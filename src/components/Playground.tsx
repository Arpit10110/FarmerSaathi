"use client";
import { useSearchParams, useRouter } from "next/navigation";
import "@/styles/playground.css";
import CropPricePrediction from "./LiveCrop";
import CropYield from "./CropYield";
import Weather from "./Weather";
import CropDisease from "./CropDisease ";

const Playground = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedComponent = searchParams.get("component") || "";

  const handleClick = (component: string) => {
    router.push(`?component=${component}`);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "weather":
        return <Weather />;
      case "yield":
        return <CropYield />;
      case "disease":
        return <CropDisease />;
      case "pricing":
        return <CropPricePrediction />;
      default:
        return <p>Select a component to display.</p>;
    }
  };

  return (
    <div className="image">
      <div className="components">
        {/* <button
          className={`para ${selectedComponent === "weather" ? "active" : ""}`}
          onClick={() => handleClick("weather")}
        >
          Weather Data
        </button> */}
        <button
          className={`para ${selectedComponent === "yield" ? "active" : ""}`}
          onClick={() => handleClick("yield")}
        >
          Crop Yield Prediction
        </button>
        <button
          className={`para ${selectedComponent === "disease" ? "active" : ""}`}
          onClick={() => handleClick("disease")}
        >
          Crop Disease Predict
        </button>
        <button
          className={`para ${selectedComponent === "pricing" ? "active" : ""}`}
          onClick={() => handleClick("pricing")}
        >
          Live Crop Pricing
        </button>
      </div>
      <div className="component-view">{renderComponent()}</div>
    </div>
  );
};

export default Playground;
