import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
const context = {
    "faq": {
      "What is the best fertilizer for wheat crops in Punjab?": "For wheat crops in Punjab, DAP (Di-Ammonium Phosphate) and Urea are commonly recommended fertilizers.",
      "When should I sow paddy in Haryana?": "The ideal time for sowing paddy in Haryana is between June and July during the Kharif season.",
      "How can I improve soil fertility naturally?": "You can improve soil fertility by using organic compost, green manure, and practicing crop rotation.",
      "Which is the best high-yield variety of sugarcane in Maharashtra?": "CO-86032 is a popular high-yielding sugarcane variety suitable for Maharashtra.",
      "How do I control pests in cotton farming?": "Use Integrated Pest Management (IPM) methods, including neem oil sprays and biological controls.",
      "What is drip irrigation and how can it help my farm?": "Drip irrigation saves water by delivering it directly to the plant roots, improving efficiency and yields.",
      "Which is the most profitable crop to grow in Rajasthan?": "Cumin, mustard, and gram are among the most profitable crops for Rajasthan's climate.",
      "How can I sell my produce at better prices?": "Stay updated with real-time market prices through platforms like ours and connect with direct buyers when possible.",
      "Which government schemes are available for Indian farmers?": "PM-KISAN, PMFBY, and Soil Health Card Scheme are some major initiatives supporting Indian farmers.",
      "What are the benefits of using organic fertilizers?": "Organic fertilizers improve soil health, reduce dependency on chemicals, and lead to sustainable farming.",
      "How often should I test my soil?": "It’s recommended to test your soil at least once every 2-3 years for better nutrient management.",
      "What are the symptoms of nitrogen deficiency in plants?": "Yellowing of older leaves and stunted growth are common symptoms of nitrogen deficiency.",
      "Which is the best season for growing maize in India?": "Maize is usually grown during the Kharif season (June-July) but can also be grown during Rabi in some regions.",
      "How can I start organic farming in India?": "Start by avoiding chemical fertilizers and pesticides, and register with an organic certification agency.",
      "Which pesticide is best for protecting tomato plants?": "Neem-based pesticides and Bacillus thuringiensis are effective and safer choices for tomato protection.",
      "How can farmers protect crops during heavy rains?": "Building proper drainage, raised beds, and early sowing of rain-resistant varieties help protect crops.",
      "Which crops require less water and are drought-resistant?": "Millets, pulses like chickpea, and mustard require less water and are drought-tolerant.",
      "How do I know if my soil needs lime?": "If soil tests show low pH (acidic soil), applying agricultural lime can help neutralize it.",
      "How can I save water while irrigating my fields?": "Adopt drip or sprinkler irrigation and practice mulching to reduce evaporation losses.",
      "How can I get crop insurance in India?": "You can enroll in the Pradhan Mantri Fasal Bima Yojana (PMFBY) scheme through local authorities or online portals.",
      "What does this website do?": "Our website provides real-time agricultural commodity price predictions and market insights to help farmers make informed decisions.",
      "How can I check crop prices?": "You can check crop prices by selecting your state and the commodity from the dropdown menus and clicking the 'Get Prices' button.",
      "Is the crop price data updated daily?": "Yes, we update our crop price data daily to provide the most accurate and recent market trends.",
      "Can I select my state to get local prices?": "Yes, you can select your specific state from the dropdown menu to view local commodity prices.",
      "Which crops do you provide price predictions for?": "We currently provide price predictions for major crops like wheat, rice, corn, sugarcane, cotton, and more.",
      "Is this service free for farmers?": "Yes, accessing price predictions and market insights on our website is completely free for farmers.",
      "How reliable are the price predictions?": "Our price predictions are based on real market trends, historical data, and AI-driven analysis to ensure high reliability.",
      "Can I access this service from my mobile phone?": "Yes, our website is fully mobile-friendly, allowing you to check crop prices anytime, anywhere.",
      "How often are the forecasts updated?": "Forecasts and market insights are refreshed daily based on the latest available data.",
      "Will you add more crops and states in the future?": "Yes, we are continuously working to expand the list of crops and states based on farmer feedback and market demand.",
      "Can I get market trend reports for future planning?": "Yes, along with real-time prices, we provide short-term forecasts and market trend reports to help with your farming plans.",
      "Do you offer any advisory services for farmers?": "Currently, we provide data-based insights. Personalized advisory services are coming soon!",
      "Is the website available in regional languages?": "Currently, the website is in English, but we are working to support Hindi and other regional languages soon.",
      "How do I report an error in crop prices?": "If you notice any discrepancies, please contact us through the 'Support' section. We take corrections seriously.",
      "Can I trust the prices shown on your platform?": "Yes, our prices are aggregated from reliable government sources and verified market trends.",
      "Will the website predict prices for next season's crops?": "We are working on long-term forecasting features that will help you plan for the next farming season.",
      "Are there any hidden charges to use the platform?": "No, there are no hidden charges. Our goal is to provide free, reliable data to farmers.",
      "Is registration required to use the website?": "No registration is required. You can simply visit the website and start using the services immediately."
    },
    "fallback": "I'm here to assist with farming-related queries and about how our website helps farmers. Please ask me about crops, prices, or farming advice!"
  }

  export const POST = async (req: any) => {
    const { query } = await req.json();
  
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_Gemni_Api_key });
  
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a helpful AI assistant on website called FarmerSaathi for farmers in India. Use the following context to answer farming-related questions. Always reply in Hindi.
  
  Context:
  ${JSON.stringify(context)}
  
  User Query: ${query}`
            }
          ]
        }
      ]
    });
  
    try {
      const replyText = result.candidates?.[0]?.content?.parts?.[0]?.text || "कोई उत्तर नहीं मिला।";
  
      return NextResponse.json({
        success: true,
        answer: replyText,
      });
    } catch (error) {
      return NextResponse.json({
        success: false,
        error: error || "कुछ गलत हो गया।"
      });
    }
  };