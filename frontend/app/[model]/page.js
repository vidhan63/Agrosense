"use client";
import { poppins } from "../layout";
import { urlCommon } from "../constants";
import { useEffect, useState } from "react";
import ImageUploader from "@/components/ImageUploader";

export default function Home({ params }) {
  const [prediction, setPrediction] = useState(null);
  const modelName = params.model?.toString().replace("%20", " ");
  console.log(modelName);
  // useEffect(() => {
  //   let timer;
  //   if (prediction) {
  //     timer = setTimeout(() => {
  //       setPrediction(null);
  //     }, 5000);
  //   }
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [prediction]);
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
        value: "Nitrogen",
        label: "Nitrogen",
        defaultValue: 25,
        type: "number",
      },
      {
        value: "Phosphorus",
        label: "Phosphorus",
        defaultValue: 35,
        type: "number",
      },
      {
        value: "Moisture",
        label: "Moisture",
        defaultValue: 35,
        type: "number",
      },
      {
        value: "Potassium",
        label: "Potassium",
        defaultValue: 45,
        type: "number",
      },
      {
        value: "Temperature",
        label: "Temperature",
        defaultValue: 40,
        type: "number",
      },
      {
        value: "Humidity",
        label: "Humidity",
        defaultValue: 22,
        type: "number",
      },
      {
        value: "Soil_Type",
        label: "Soil Type",
        defaultValue: "Loamy",
        type: "text",
      },
      {
        value: "Crop_Type",
        label: "Crop Type",
        defaultValue: "Maize",
        type: "text",
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
  function sendPrediction() {
    if (!modelName || !fields[modelName]) {
      console.error("Model not found");
      return;
    }
    const formData = {};
    fields[modelName].forEach((field) => {
      console.log(field.value, document.getElementById(field.value).value);
      formData[field.value] = field.type == "text" ? document.getElementById(field.value).value :parseInt(
        document.getElementById(field.value).value,
      );
    });
    const endpoint = {
      "Crop Recommendation": "/predict",
      "Fertilizer Recommendation": "/ferti",
      "Disease Detection": "/disease",
    };
    console.log(formData, "for", fields[modelName], modelName);
    fetch(urlCommon + endpoint[modelName], {
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
  if (modelName == "Disease Detection") {
    return <ImageUploader />;
  }
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
            <div key={index} className="flex flex-col items-start gap-y-1">
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
          {/* <h2>Prediction</h2> */}
          <p>{JSON.stringify(prediction['fertilizer'])}</p>
        </div>
      )}
    </main>
  );
}
