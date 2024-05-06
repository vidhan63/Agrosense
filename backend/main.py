from flask import Flask, request, jsonify
import numpy as np
import joblib
import cv2
from PIL import Image
from keras.models import load_model
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the RandomForestClassifier model from the file
with open("model.joblib", "rb") as file:
    rfc = joblib.load(file)


def recommendation(N, P, K, temperature, humidity, ph, rainfall):
    features = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    prediction = rfc.predict(features)
    suggest={
            'rice':'',
             'maize':'',
             'chickpea':'',
             'kidneybeans':'',
             'pigeonpeas':'',
             'mothbeans':'',
             'mungbean':'',
             'blackgram':'',
             'lentil':'',
             'pomegranate':'',
             'banana':'',
             'mango':'',
             'grapes':'',
             'watermelon':'',
             'muskmelon':'',
             'apple':'',
             'orange':'',
             'papaya':'',
             'coconut':'',
             'cotton':'',
             'jute':'',
             'coffee':'',
            }
    return prediction[0]
def fertiPredict(Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous):
    fetriModel = joblib.load("ferti.joblib")
    prediction = fetriModel.predict([[Temparature,Humidity,Moisture,Soil_Type,Crop_Type,Nitrogen,Potassium,Phosphorous]])
    return prediction

@app.route("/")
def index():
    return "Hello, server started"


def loadKerasModel(imgRes=None):
  try:
    if imgRes is None:
        return {"prediction": "No image provided"}
    model = load_model('disease.h5')
    # Assuming imgRes is already a file object (like request.files['image'])
    image_data = imgRes.read()
    imgNm = imgRes.filename
    image = cv2.imdecode(np.frombuffer(image_data, np.uint8), cv2.IMREAD_COLOR)
    if image_data is None:
        return {"error": "Image not found"}
    #   img = Image.fromarray(image)
    #   img = image.resize((128, 128))
    img = np.array(image,dtype=np.float16) / 225.0
    input_img = img[np.newaxis, ...]
    result = model.predict(input_img)  # Get the scalar value
    values=result[0,:]
    rounded_values = [1 if value > 0.5 else 0 for value in values]
    index=rounded_values.index(1)
    print(index)
    diesease_dict={0:'apple_scab_diseased',1:'apple_rot_diseased',2:'apple_cedar_rust_diseased',3:'apple_healthy',4:'blueberry_healthy',5:'cherry_powdery_milk',6:'cherry_healthy',7:'corn_(maize)_spot_g_diseased',8:'Corn_(maize)_Common_rust',9:'Corn_(maize)_Northern_Leaf_Blight',10:'Corn_(maize)_healthy',11:'Grape_Black_rot',12:'Grape_Esca_(Black_Measles)',13:'Grape_Leaf_blight_(Isariopsis_Leaf_Spot)',14:'Grape_healthy',15:'Orange_Haunglongbing_(Citrus_greening)',16:'Peach_Bacterial_spot',17:'Peach_healthy',18:'Pepper_bell_Bacterial_spot',19:'Pepper_bell_healthy',20:'Potato_Early_blight',21:'Potato_Late_blight',22:'Potato_healthy',23:'Raspberry_healthy',24:'Soybean_healthy',25:'Squash_Powdery_mildew',26:'Strawberry_Leaf_scorch',27:'Strawberry_healthy',28:'Tomato_Bacterial_spot',29:'Tomato_Early_blight',30:'Tomato_Late_blight',31:'Tomato_Leaf_Mold',32:'Tomato_septoria_leaf_spot',33:'Tomato_Spider_mites Two-spotted_spider_mite',34:'Tomato_Target_Spot',35:'Tomato_Tomato_Yellow_Leaf_Curl_Virus',36:'Tomato_Tomato_mosaic_virus',37:'Tomato_healthy'}
    prediction=diesease_dict[index]
    print(prediction)
    return {"prediction": prediction + " in " + imgNm}
  except Exception as e:
    print("e",e)
    return {"prediction": "Invalid data received!"}


@app.route('/disease', methods=['GET', 'POST'])
def disease():
  image_file = None
  if request.method == 'POST':
    print(
        request.args.to_dict(),
        request.files,
    )
    image_file = request.files['image']
  return jsonify(loadKerasModel(image_file))

@app.route("/health")
def health():
    return "healthy"

@app.route("/ferti",methods=["GET","POST"])
def ferti():
    try:
        res = ""
        if request.method == "POST":
            data = request.get_json(force=True)
            # Extract feature values from the JSON data
            temperature = float(data.get("Temperature", 40))
            humidity = int(data.get("Humidity", 20))
            moisture = int(data.get("Moisture", 30))
            nitrogen = int(data.get("Nitrogen", 20))
            potassium = int(data.get("Potassium", 30))
            phosphorous = int(data.get("Phosphorous", 40))
            soil_type = data.get("Soil_Type", "Loamy")  # Assuming default as "Loamy" if not provided
            crop_type = data.get("Crop_Type", "Rice")  # Assuming default as "Rice" if not provided
            soil_dict={'Loamy':1,'Sandy':2,'Clayey':3,'Black':4,'Red':5}
            print(temperature,humidity,moisture,nitrogen,potassium,phosphorous,soil_type,crop_type)
            crop_dict={'Sugarcane':1,'Cotton':2,'Millets':3,'Paddy':4,'Pulses':5,'Wheat':6,'Tobacco':7,'Barley':8,'Oil seeds':9,'Ground Nuts':10,'Maize':11 }
            st=soil_dict[soil_type]
            ct=crop_dict[crop_type]
            ans = fertiPredict(temperature,humidity,moisture,st,ct,nitrogen,potassium,phosphorous)
            print(temperature,humidity,moisture,nitrogen,potassium,phosphorous,soil_type,crop_type)
            print(ans)
            print(temperature,humidity,moisture,nitrogen,potassium,phosphorous,soil_type,crop_type)
            if ans[0] == 0:
                print("10-26-26")
                res = "10-26-26"
            elif ans[0] ==1:
                print("14-35-14")
                res = "14-35-14"
            elif ans[0] == 2:
                print("17-17-17")
                res = "17-17-17"
            elif ans[0] == 3:
                print("20-20")
                res = "20-20"
            elif ans[0] == 4:
                print("28-28")
                res = "28-28"
            elif ans[0] == 5:
                print("DAP")
                res = "DAP"
            else:
                print(temperature,humidity,moisture,nitrogen,potassium,phosphorous,soil_type,crop_type)
                print("Urea")
                res = "Urea"
            print(temperature,humidity,moisture,nitrogen,potassium,phosphorous,soil_type,crop_type)
        if res == "":
            print("hello")
            return jsonify({"error": "Invalid data received!"})
        return jsonify({"fertilizer": "Predicted Fertilizer for the give conditions is--> "+res})
    except Exception as e:
        print("e",e)
        return jsonify({"error": "Invalid data received!"})
# eg: predict?N=20&P=30&K=40&temperature=40.0&humidity=20&ph=30&rainfall=50
@app.route("/predict", methods=["GET", "POST"])
def predict():
    try:
        if request.method == "GET":
            # Handling GET request
            print("here")
            print(request.args.to_dict())

            # Extract feature values from query parameters
            N = int(request.args.get("N") or 20)
            P = int(request.args.get("P") or 30)
            K = int(request.args.get("K") or 40)
            temperature = float(request.args.get("temperature") or 40)
            humidity = int(request.args.get("humidity") or 20)
            ph = int(request.args.get("ph") or 30)
            rainfall = int(request.args.get("rainfall") or 50)
            print("data received =>", N, P, K, temperature, humidity, ph, rainfall)

        elif request.method == "POST":
            # Handling POST request
            data = request.get_json(force=True)
            print("data received =>", data)

            # Extract feature values from the JSON data
            N = int(data.get("N", 20))
            P = int(data.get("P", 30))
            K = int(data.get("K", 40))
            temperature = float(data.get("temperature", 40))
            humidity = int(data.get("humidity", 20))
            ph = int(data.get("ph", 30))
            rainfall = int(data.get("rainfall", 50))

        else:
            # Unsupported HTTP method
            return jsonify({"error": "Unsupported HTTP method"})
        # Make a prediction using the recommendation function
        prediction = recommendation(N, P, K, temperature, humidity, ph, rainfall)
        print("best crop to grow is ", prediction)
        # Check if the predicted label is present in the crop dictionary
        if prediction :
            return jsonify({"fertilizer":"best crop to grow is "+ prediction})
        else:
            # If the predicted label is not in the dictionary, return an error message
            return jsonify({"error": "No crop recommended!"})

    except Exception as e:
        # If an exception occurs (e.g., invalid query parameters), return an error message
        return jsonify(
            {
                "error": str(e),
                "message": "Invalid or missing data. Please provide the required features.",
            }
        )


if __name__ == "__main__":
    app.run("0.0.0.0", port=3002)
