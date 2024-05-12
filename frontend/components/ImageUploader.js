"use client";
import { urlCommon } from "@/app/constants";
import React, { useState } from "react";

const ImageUploader = ({ onUpload1 }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const blah = new Image();
  const handleFileChange = (event) => {
    const [file] = event.target.files;
    if (file) {
      const a = URL.createObjectURL(file);
      setUrl(a);
    }
    setSelectedFile(file);
  };

  const onUpload = async (formData) => {
    try {
      console.log("Uploading image...", formData.get("image"));
      const response = await fetch(urlCommon + "/disease", {
        method: "POST",
        body: formData,
      });
      console.log("response", response);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Upload successful:", responseData);
        if (responseData.prediction) {
          setText(responseData.prediction);
        }
      } else {
        console.error("Error uploading image:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      onUpload(formData);
    }
  };
  return (
    <div className="w-screen flex flex-col justify-center items-center  h-screen">
      <div className="flex flex-col max-w-80 gap-5">
        {url && (
          <img src={url} alt="image" className="w-80 h-80 object-cover" />
        )}
        <input type="file" onChange={handleFileChange} />
        <button
          className="mt-2 bg-white hover:bg-cardBg p-2 px-4 border rounded-lg border-cardBorder"
          onClick={handleUpload}
        >
          Get Result
        </button>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default ImageUploader;
