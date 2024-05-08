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
    suggest={'rice':'''1. Location: Choose a flat location with enough water resources. 
                       2. River valley and delta areas are also suitable for growing rice.
                       3. Preparation: Remove rocks, trash, and weeds from the land.
                       4. Soil amendments: Add organic matter and fertilizers to the soil.
                       5. Seeds: Use premium rice seeds that are bred locally for high yield and disease resistance.
                       6. Protection: Use fungicides and pesticides to protect the seeds from pests and diseases.''',
             'maize':'''1. Maize needs adequate moisture throughout the growing season, but is susceptible to water logging.
                           To avoid waterlogging, you can try ridge tillage, drainage, and early planting. In drier areas, you can also try water conservation techniques like mulching, pot-holing, and tied-ridges.
                        2. You can increase the growth speed of maize by controlling pests and diseases.
                        3. Use best quality seeds.''',
             'chickpea':'''1. Chickpeas need warm, moist soil for germination and emergence, but they don't tolerate wet soils. The soil should warm quickly while still retaining moisture.
                           2. Seed chickpeas a bit deeper to reduce the risk of root uptake if it rains shortly after application. Chickpeas are also susceptible to seed-to-seedling transmission of Ascochyta blight, so it's recommended to treat the seeds.
                           3. Chickpeas grow best in areas with moderate rainfall of 60–90 cm per year.
                           4.Before sowing, remove any stubble or debris from the previous crop, as it can contain pathogens that cause root diseases. For heavy soils, prepare a rough seedbed to help with aeration and seedling emergence.''',
             'kidneybeans':'''1. Before planting, add well-rotted compost or organic matter to increase soil nutrients if needed.
                              2. Kidney beans need at least 6–8 hours of direct sunlight per day in a sheltered location.
                              3. Kidney beans are a warm-weather crop that grow best in temperatures between 65–85°F (18–29°C) and are sensitive to frost. They perform poorly in temperatures above 85°F (29°C).
                              4. Space plants to give them enough room to grow. Pole beans should be at least 4 inches apart, and bush kidney beans should be at least 8 inches apart.
                              5. Keep the soil evenly moist but not soggy, especially once the beans have flowered. Water regularly, checking the top 2–3 inches of soil for dryness.''',
             'pigeonpeas':'''1. Pigeon peas respond well to properly tilled and well-drained seedbeds. For fallow or waste lands, you can deep plow with a soil turning plow. For low lying and intercropping areas, you can use Broad Bed Furrow/Ridge-furrow planting.
                             2. Early maturing varieties should be sown in the first half of June, while medium and late maturing varieties should be sown in the second half of June.
                             3. The amount of fertilizer should be based on the results of a soil test.''',
             'mothbeans':'''1. Moth beans require minimal land preparation, and can often be sown in sandy soils without any preparation. For other soils, you can prepare the field by cross-harrowing it once or twice, and then planking it.
                            2. Moth beans are usually sown in May and June, but you can also sow them in late June or mid-July. You should sow them on a prepared seedbed at an optimal temperature of around 25–27°C.
                            3. The low-lying soil cover created by the crop helps to prevent soil erosion by reducing moisture loss. To reduce soil moisture loss further, you can sow the crop immediately after rain on light soil dunes.
                            4.To control white grubs, you can apply 25 kg of phorate 10 G in the furrows. If you have a serious termite problem, you can apply 25 kg/ha of 5 percent aldrin dust at the time of soil preparation.''',
             'mungbean':'''1. Prepare the seedbed: Plow the soil 2–3 times, then plank to remove weeds and clods.
                           2. Select paddocks: Choose paddocks with fairly uniform soil types, trash cover, and harvest impediments.
                           3. Plant in dryer months: Mung beans are highly susceptible to water logging, and maturing pods are susceptible to rain.
                           4.Space rows: Space rows 50–100 cm apart, or 18–50 cm apart for high yielding irrigated crops.''',
             'blackgram':'''1.Plow the land in the summer, then harrow it two to three times before the monsoon.
                            2.  For spring or summer crops, soil moisture is critical at the time of sowing.
                            3. The soil should be well-drained and have good water-holding capacity.''',
             'lentil':'''1. Before seeding, prepare the soil so that it's friable and weed-free, and can be seeded at a uniform depth. For heavy soils, you can plow deeply once, then cross-harrow two to three times. After harrowing, level the field with a gentle slope to make irrigation easier.
                         2. Lentils need 15 to 25 cm of moisture during the growing season to produce a full seed set. Too much moisture before the plant is fully bloomed can delay and reduce seed set, and promote fungal infections.
                         3. Avoid fields with high levels of soil nitrogen, as this can delay the development of nitrogen-fixing nodules. According to the University of Saskatchewan, soil nitrate levels of 25 to 35 lbs./ac can delay nodulation, and combined soil and fertilizer N levels over 50 lbs./ac can prevent it.
                         4. Choose fields that are relatively free of rocks and have level terrain to make harvesting easier. ''',
             'pomegranate':'''1. You can propagate pomegranates using semi-hardwood or hardwood cuttings. Semi-hardwood cuttings that are 20–25 cm long, 6–12 months old, and pencil thick work best. To reduce the risk of disease and pests, you can dip the cuttings in a fungicide and bio clean sweep for five minutes before planting.
                              2. Pomegranates prefer a semi-arid to subtropical climate with hot summers and mild winters. They are suited to USDA Zones 8–11.
                              3. Make sure to space the plants properly.
                              4. To encourage flowering, you can withhold water for 3–4 months.''',
             'banana':'''1. Bananas prefer a more acidic soil with a pH between 6–7.5. Soil with a pH higher than 7.5 can harm the plant.
                         2.  The soil should have good drainage, but also retain water well enough to avoid waterlogging, which can kill the plant.
                         3.  Bananas need at least 12 hours of sunlight to grow.
                         4. Bananas grow best in warm and rainy climates.''',
             'mango':'''1. They should be planted in soil that's at least 2–2.5 meters deep and doesn't become waterlogged.
                        2. Mango trees don't tolerate salty soil, so you should avoid using chemical fertilizers and planting in fully fertilized areas.
                        3. you can improve the fertility of the soil by mixing equal parts native soil, organic mulch, and sand.''',
             'grapes':'''1. Grapevines can tolerate pH levels between 4.5 and 8.5, but soil pH affects nutrient availability. In cool climates, vines grown in soils with a pH above 7.3 may be prone to iron chlorosis.
                         2. Grapevines have deep-rooting habits, so the soil should be at least 30 inches deep.
                         3. Before planting, loosen, break up, and mix the soil layers well below the normal cultivation depth. You can also dig a hole that's wide and deep enough to allow the root system to expand easily.
                         4. Grapes don't like wet soil, so good drainage is essential.''',
             'watermelon':'''1. Improve the soil's texture and nutrition by adding compost, seaweed, or rotted manure.
                             2. Plant the watermelon in a mound of loose soil so the plant is slightly off the ground while the roots stay in damp soil. This can help prevent powdery mildew.
                             3. Give watermelon vines enough room to grow by spacing plants 3–5 feet apart.
                             4. Fertilize watermelons after transplanting them or when they become robust seedlings. Fertilize two more times during the growing season.
                             5. Apply a 1–2 inch layer of organic mulch around the vines when they are 6–8 inches long to suppress weeds and keep the soil moist.''',
             'muskmelon':'''1. Plant 4–6 seeds directly in the garden when the soil is 65°F, 1–2 inches deep, and in mounds 4 feet apart. After the mounds emerge, thin them to 2 plants.
                            2. Muskmelon needs full sunlight, but if there is too much heat, protect it with a shield. The best temperature to grow muskmelon is 21–32°C.
                            3. Before planting, incorporate organic matter and a complete fertilizer into the soil. You can also apply farmyard manure and neem cake at the time of land preparation.
                            4. Water deeply and infrequently, at least 5 liters per day. Avoid wetting the vines or vegetative parts, especially during flowering and fruit-set.''',
             'apple':'''1. Apple trees grow best in slightly acidic to neutral soil with a pH between 5.8 and 7.0. You can test your soil's pH with a kit from a garden center or by taking a sample to a Cooperative Extension agent. If your soil is acidic, you can add lime before planting to adjust the pH.
                        2. Apple trees need well-drained soil to avoid poor aeration and crown rot. Avoid planting in areas where water pools for several hours after rain.
                        3. Fertile sandy and loam soils produce the best apple crops. Soils with high organic matter content are usually better structured.
                        4. The rootstock you choose should match your soil's pH, structure, and humidity, as well as other local conditions. The Malling types (M. and MM. series) are the most common rootstocks used for apples.
                        5. Sowing grass mulch between tree rows can help increase the soil's water holding capacity, nutrient recycling, and infiltration rate. ''',
             'orange':'''1. Orange trees need at least 8 hours of direct sunlight per day for proper growth and fruit development.
                         2. Orange trees need consistent watering, especially during dry periods.
                         3. Orange trees grow best in a downhill position with a flat surface that allows cold currents to escape.
                         4. To prevent soil erosion, plant grass between the rows of trees at a low level. In areas with a high slope, create terraces.
                         5. Orange trees are sensitive to salts, so if the water contains a lot of salts, the tree's growth and productivity may be limited.
                         6. Good air circulation can help reduce disease.''',
             'papaya':'''1. The best time to plant papaya is from June to September, but avoid planting during the rainy season.
                         2. Apply 10 kg of FYM per plant as a base, and then apply 50 g of N, P, and K per plant every two months after the third month.
                         3. Use a ring system of irrigation to prevent collar rot, or use drip irrigation to save 50–60 percent of water.
                         4. Papaya plants need at least 6 hours of direct sunlight per day.
                         5. Papaya plants grow best at elevations below 6,000 ft (1,800 m).''',
             'coconut':'''1. Avoid heavy, imperfectly drained soil, shallow soils with hard rock, and low-lying areas that can stagnate water.
                          2. Select sites with soil that's at least 1.5 m deep.
                          3. Coconut trees need unrestricted root development and aeration.
                          4. Coconut trees need a proper supply of moisture through rainfall or irrigation.
                          5. Coconut trees need nutrient-rich soil with organic matter, nitrogen, phosphorus, and potassium. You can apply 20 to 50 kg of organic manure per palm each year at the start of the southwest monsoon.''',
             'cotton':'''1. Test the soil's pH level and nutrient content before planting to ensure the right amount of moisture and temperature.
                         2. Rotating crops helps prevent nutrient deficiencies, pests, and disease problems that can occur from continuous cotton production.
                         3. Cotton grows best in soil with a pH between 5.8–8.0, with 6.0–6.5 being ideal. Lime can help increase the pH of acidic soil to make nutrients more available.
                         4. Cotton needs more potassium than any other nutrient, except nitrogen, for plant growth. Apply potassium before the season starts.
                         5. Cover crops can improve soil health when cotton isn't growing.''',
             'jute':'''1. Jute grows best in soil with a pH of 6–7.5.
                       2.  Jute seeds are very small, so fine tilth is required.
                       3. Apply five tons of well-decomposed farm yard manure during the final ploughing. Also apply 20 kg per hectare each of N, P2O5, and K2O at the base.
                       4. Jute requires 500 mm of water. Constant rain or water-logging is harmful.''',
             'coffee':'''1. Coffee plants prefer a pH level between 4.9 and 5.6, which helps them absorb nutrients and reduces pests and disease. If your soil is too acidic, you can neutralize it with calcitic lime, and if it's too low in acidity, you can balance it out with frequent fertilization.
                         2. Nitrogen is important for strong vegetative growth and cherry fill. You can use fertilizer nutrition to secure high coffee yield potential crops.
                         3. Prepare the soil thoroughly before planting, and maintain good rooting. You can also use gypsum as a soil conditioner to provide calcium and sulfur to the plants, and to correct toxic aluminum. '''
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
