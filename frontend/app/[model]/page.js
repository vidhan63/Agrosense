"use client";
import { poppins } from "../layout";
import { urlCommon } from "../constants";
import { useEffect, useState } from "react";

export default function Home({ params }) {
  const [prediction, setPrediction] = useState(null);
  const modelName = params.model?.toString().replace("%20", " ");
  useEffect(() => {
    let timer;
    if (prediction) {
      timer = setTimeout(() => {
        setPrediction(null);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [prediction]);
  function sendPrediction() {
    var formData = {
      N: parseInt(document.getElementById("N").value),
      P: parseInt(document.getElementById("P").value),
      K: parseInt(document.getElementById("K").value),
      temperature: parseFloat(document.getElementById("temperature").value),
      humidity: parseInt(document.getElementById("humidity").value),
      ph: parseInt(document.getElementById("ph").value),
      rainfall: parseInt(document.getElementById("rainfall").value),
    };

    fetch(urlCommon + "/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrediction(data);
      })
      .catch((error) => console.error("Error:", error));
  }
  const commonProps = {
    className:
      "bg-cardBg rounded-lg py-1 px-3 focus:border-heading border border-textLight ",
  };
  const fields = {
    "Crop Recommendation": [
      {
        value: "N",
        label: "Nitrogen",
        defaultValue: 25,
        type: "number",
      },
      {
        value: "P",
        label: "Phosphorus",
        defaultValue: 35,
        type: "number",
      },
      {
        value: "K",
        label: "Potassium",
        defaultValue: 45,
        type: "number",
      },
      {
        value: "temperature",
        label: "Temperature",
        defaultValue: 42.0,
        type: "number",
      },
      {
        value: "humidity",
        label: "Humidity",
        defaultValue: 22,
        type: "number",
      },
      {
        value: "ph",
        label: "pH",
        defaultValue: 32,
        type: "number",
      },
      {
        value: "rainfall",
        label: "Rainfall",
        defaultValue: 55,
        type: "number",
      },
    ],
    "Fertilizer Recommendation": [
      {
        value: "N",
        label: "Nitrogen",
        defaultValue: 25,
        type: "number",
      },
      {
        value: "P",
        label: "Phosphorus",
        defaultValue: 35,
        type: "number",
      },
      {
        value: "K",
        label: "Potassium",
        defaultValue: 45,
        type: "number",
      },
      {
        value: "temperature",
        label: "Temperature",
        defaultValue: 42.0,
        type: "number",
      },
      {
        value: "humidity",
        label: "Humidity",
        defaultValue: 22,
        type: "number",
      },
      {
        value: "Soil_Type",
        label: "Soil Type",
        defaultValue: 32,
        type: "number",
      },
      {
        value: "Crop_Type",
        label: "Crop Type",
        defaultValue: 55,
        type: "number",
      },
    ],
    "Disease Detection": [
      {
        value: "img",
        label: "Image",
        type: "file",
      },
    ],
  };
  return (
    <main className="flex min-h-screen  flex-col items-center  p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      {/* <h1 className="text-4xl font-bold text-center">Predictor</h1> */}
      <p
        className={` text-[24px] uppercase font-semibold mb-5 text-center lg:text-[48px]  ${poppins.className} text-heading relative z-10 font-semibold`}
      >
        {modelName}
      </p>
      <form id="predictionForm" className="flex flex-col items-center gap-y-3">
        {modelName &&
          Array.isArray(fields[modelName]) &&
          fields[modelName].map((item, index) => (
            <div className="flex flex-col items-start gap-y-1">
              <label htmlFor={item.value}>{item.label}:</label>
              <input
                {...commonProps}
                type={item.type}
                id={item.value}
                name={item.value}
                defaultValue={item.defaultValue}
              />
            </div>
          ))}
        <button
          type="button"
          className="mt-2 bg-white hover:bg-cardBg p-2 px-4 border rounded-lg border-cardBorder"
          onClick={() => {
            sendPrediction();
          }}
        >
          Submit
        </button>
      </form>
      {/* </div> */}
      {prediction && (
        <div className="mx-2">
          <h2>Prediction</h2>
          <p>{JSON.stringify(prediction)}</p>
        </div>
      )}
    </main>
  );
}
