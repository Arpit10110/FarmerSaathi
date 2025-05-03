import axios from "axios";
import React, { useState } from "react";

const CropPrediction = () => {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [pH, setPH] = useState("");
  const [moisture, setMoisture] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setrainfall] = useState("");
  const [predictedCrop, setPredictedCrop] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.251.48:5000/predict",{
        nitrogen: nitrogen,
        phosphorus: phosphorus,
        potassium:potassium ,
        temperature: temperature,
        humidity:moisture ,
        ph: pH,
        rainfall: rainfall
    });
      setPredictedCrop(response.data.prediction)
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
    <div className="bg-[#ffffff21] mt-[2rem] m-auto shadow-lg rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-white">
          Soil Analysis & Crop Prediction
        </h2>
        <p className="text-center text-white mt-2 mb-6">
          Enter your soil properties to get the most suitable crop recommendation
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input
            type="number"
            name="nitrogen"
            placeholder="Nitrogen (N)"
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="number"
            name="phosphorus"
            placeholder="Phosphorus (P)"
            value={phosphorus}
            onChange={(e) => setPhosphorus(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="number"
            name="potassium"
            placeholder="Potassium (K)"
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="number"
            name="pH"
            placeholder="pH Level (0.0 - 14.0)"
            value={pH}
            onChange={(e) => setPH(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="number"
            name="moisture"
            placeholder="Moisture (%)"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="number"
            name="temperature"
            placeholder="Temperature (°C)"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="number"
            name="Rainfall"
            placeholder="Rainfall in (mm) "
            value={rainfall}
            onChange={(e) => setrainfall(e.target.value)}
            required
            className="border border-gray-300 rounded px-4 py-2"
          />
          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded w-full"
            >
              Predict Crop
            </button>
          </div>
        </form>

        {predictedCrop && (
          <p className="mt-6 text-center text-green-700 font-semibold text-lg">
            The recommended crop for your soil is:{" "}
            <span className="text-white font-bold ">{predictedCrop}</span>
          </p>
        )}

        <p className="text-xs text-white mt-4 text-center">
          Last updated: May 1, 2025 | Soil Analysis & Crop Prediction Tool
        </p>
      </div>
    </>
  );
};

export default CropPrediction;