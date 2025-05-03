import Image1 from "@/assets/Image1.jpg"

interface ProductData {
    id: number;
    img: any;
    productname: string;
    price: number;
    desc: string;
  }
  
  export const productdata: ProductData[] = [
    {
      id: 1,
      img: Image1,
      productname: "Ugaoo Organic Vermicompost Fertilizer",
      price: 188,
      desc: "Enhances soil aeration and enriches plant growth naturally."
    },
    {
      id: 2,
      img: Image1,
      productname: "DAP Fertilizer for Home Plants",
      price: 199,
      desc: "All-purpose gardening fertilizer promoting robust plant development."
    },
    {
      id: 3,
      img: Image1,
      productname: "Urea Fertilizer 46-0-0 High Nitrogen",
      price: 199,
      desc: "Fast-acting nitrogen source for lush green lawns and crops."
    },
    {
      id: 4,
      img: Image1,
      productname: "Natures Plus Organic Vermi Compost",
      price: 59,
      desc: "Organic compost improving soil fertility and structure."
    },
    {
      id: 5,
      img: Image1,
      productname: "Unitedlys NPK 20-20-20 Fertilizer",
      price: 263,
      desc: "Balanced nutrient supply for healthy plant growth."
    },
    {
      id: 6,
      img: Image1,
      productname: "Ugaoo Bone Meal",
      price: 399,
      desc: "Natural source of phosphorus and calcium for flowering plants."
    },
    {
      id: 7,
      img: Image1,
      productname: "UGAOO Plant Food Fertilizer Sticks",
      price: 243,
      desc: "Convenient slow-release fertilizer sticks for continuous nourishment."
    },
    {
      id: 8,
      img: Image1,
      productname: "Utkarsh Fertilizer",
      price: 260,
      desc: "High-quality fertilizer enhancing crop yield and quality."
    },
    {
      id: 9,
      img: Image1,
      productname: "NATURES PLUS Organic Fertiliser",
      price: 229,
      desc: "Eco-friendly fertilizer promoting sustainable gardening practices."
    },
    {
      id: 10,
      img: Image1,
      productname: "Compost Organic Fertilizer",
      price: 150,
      desc: "Rich in nutrients, ideal for improving soil health and plant vitality."
    }
  ];
  