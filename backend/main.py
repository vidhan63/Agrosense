from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the RandomForestClassifier model from the file
with open("model.joblib", "rb") as file:
    rfc = joblib.load(file)


def recommendation(N, P, K, temperature, humidity, ph, rainfall):
    features = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    prediction = rfc.predict(features)
    return prediction[0]


@app.route("/")
def index():
    return "Hello, server started"


@app.route("/health")
def health():
    return "healthy"


# eg: predict?N=20&P=30&K=40&temperature=40.0&humidity=20&ph=30&rainfall=50
@app.route("/predict", methods=["GET", "POST"])
def predict():
    try:
        print("here")
        print(request.args.to_dict())
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
        print("prediction", prediction)
        # Check if the predicted label is present in the crop dictionary
        if prediction :
            return jsonify({"crop": prediction})
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
