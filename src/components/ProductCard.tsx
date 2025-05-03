"use client"
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string | number;
  image: string;
}

export default function ProductCard({ name, description, price, image }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-[25%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={image || "../assets/Image1.jpg"} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <div className='bg-[#2D2D2D] flex justify-around items-center flex-col ' >
            <div className='flex  justify-around items-center ' >
                <div className='text-white' >
                    <h1 className="text-xl font-bold ">{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="bg-yellow-500 px-3 py-1 rounded-full">
                    <span className="text-black font-bold text-xl">{price}</span>
                 </div>
            </div>
            <div className="flex space-x-2">
            <button className="px-4 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-400 transition-colors duration-300">
              Buy Now
            </button>
            <button className="px-4 py-2 border border-yellow-500 text-yellow-500 font-medium rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300">
              Add to Cart
            </button>
            </div>
        </div>
      </div>
      

    </div>
  );
}
