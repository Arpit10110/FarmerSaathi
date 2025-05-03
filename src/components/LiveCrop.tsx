import React, { useState } from "react";
import axios from "axios";

interface PriceData {
  State: string;
  "APMC's": string;
  Commodity: string;
  "Min Price": string;
  "Modal Price": string;
  "Max Price": string;
}

const CropPricePrediction: React.FC = () => {
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedCommodity, setSelectedCommodity] = useState("All Commodities");
  const [priceData, setPriceData] = useState<PriceData[] | null>(null); // Use null initially to differentiate from empty array

  const states = [
    "All States", "ANDHRA PRADESH", "CHHATTISGARH", "GUJARAT", "HARYANA", "HIMACHAL PRADESH",
    "JAMMU AND KASHMIR", "KARNATAKA", "MADHYA PRADESH", "MAHARASHTRA", "NAGALAND", "ODISHA",
    "PUNJAB", "RAJASTHAN", "TAMIL NADU", "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", "WEST BENGAL"
  ];

  const commodities = [
    "All Commodities", "MOUSAMBI", "CHILLI-5", "CHILLI-TEJA", "CHILLI-THAALU", "CHILLI BADIGA", "CHILLI-334",
    "CHILLI -SHARK 1", "CHILLI- ARMOUR", "CHILLI-4884", "CHILLI-341", "CHILLI-DEVANURU DELUX", "CHILLI-273",
    "TOMATO", "TURMERIC BULB", "GROUND NUT", "TURMERIC FINGER", "CABBAGE", "BEANS -CLUSTER", "POTATO", "BRINJAL",
    "CAULIFLOWER", "GREEN CHILLI", "RIDGE GOURD (TURAI)", "LEMON", "BANANA BHUSHAVALI", "BANANA KARPURA",
    "BANANA WHITE CHAKRAKELI", "BANANA AMRUTHAPANI", "BANANA BONTHA", "BANANA RED CHAKRAKELI", "SWARNA PADDY",
    "PADDY COMMON", "PADDY IR64 NEW", "MAHUA", "PADDY-IR.64", "PADDY-MTU 1010", "CHANA (BENGAL GRAM)", "WHEAT",
    "PADDY-MAHAMAYA", "PADDY-BPT", "PADDY SAMBA MASURI", "CHANA GRAM", "MASOOR", "COTTON", "ONION",
    "BANANA ANNAN", "MANGO", "CHILLIES", "GRAPES", "PAPAYA", "MUSTARD SEED", "ISABGOL", "BHINDI (LADIES FINGER)",
    "BOTTLE GOURDE", "BOTTLE GOURD", "CHIKOOS", "JOWAR", "CASTOR SEED", "BAJRA", "PADDY LOCAL", "TUR/ARHAR-WHITE",
    "TUR/ARHAR", "CHANA (BENGAL GRAM)-DESI", "CORIANDAR", "GREEN GRAM LOCAL", "CUMMIN", "SOUNF",
    "SOYA SEEDS (WHITE)", "SOYABEANS", "SESAME SEED", "PADDY 6444", "POINTED GOURD (PARWAL)", "ONION RED",
    "ONION WHITE", "AMERICAN-COTTON", "BARLEY (JAU)", "GUAR SEEDS", "MUSTARD", "POMEGRANATE", "PUMPKIN",
    "PEAS GREEN", "SPONGE GOURD", "SWEET LEMON (MOSAMBI)", "APPLE", "CUCUMBER", "MUSK MELON", "PLUM",
    "WATER MELON", "SPINACH (PALAK)", "GINGER", "SQUASH", "CAPSICUM", "CORIANDER LEAVES", "LADY FINGER", "PEACH",
    "FRENCH BEAN", "GARLIC", "CARROT"
  ];

  const handleSubmit = async () => {
    try {
      const payload = {
        state: selectedState,
        commodity: selectedCommodity
      };
      const response = await axios.post("http://localhost:5000/getdata", payload);
      setPriceData(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPriceData([]); // show empty in case of error
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-5xl mx-auto bg-[#ffffff21] my-[1rem] text-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Crop Price Prediction</h1>
          <p className="mt-2 text-white">
            Get real-time agricultural commodity prices to make informed decisions for your farm business. <br />
            Updated daily with market trends and forecasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col text-left">
            <label className="text-white font-medium mb-1">Select State</label>
            <select
              className="bg-gray-800 text-white border border-gray-600 rounded-md p-2"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map(state => <option key={state}>{state}</option>)}
            </select>
          </div>

          <div className="flex flex-col text-left">
            <label className="text-white font-medium mb-1">Select Commodity</label>
            <select
              className="bg-gray-800 text-white border border-gray-600 rounded-md p-2"
              value={selectedCommodity}
              onChange={(e) => setSelectedCommodity(e.target.value)}
            >
              {commodities.map(commodity => <option key={commodity}>{commodity}</option>)}
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-md mb-8"
        >
          Get Prices
        </button>

        {priceData !== null && priceData.length === 0 && (
          <p className="text-red-400 font-semibold mt-4">No data available right now</p>
        )}

        {priceData && priceData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-600">
              <thead className="bg-green-900">
                <tr>
                  <th className="border border-gray-600 px-4 py-2">APMC</th>
                  <th className="border border-gray-600 px-4 py-2">State</th>
                  <th className="border border-gray-600 px-4 py-2">Commodity</th>
                  <th className="border border-gray-600 px-4 py-2">Min Price</th>
                  <th className="border border-gray-600 px-4 py-2">Modal Price</th>
                  <th className="border border-gray-600 px-4 py-2">Max Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((entry, idx) => (
                  <tr key={idx} className="bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-600 px-4 py-2">{entry["APMC's"]}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry.State}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry.Commodity}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry["Min Price"]}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry["Modal Price"]}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry["Max Price"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropPricePrediction;
