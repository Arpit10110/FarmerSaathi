'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import '@/styles/cropDisease.css';

interface ImageInfo {
  id: string;
  url: string;
  license: string;
  citation: string;
}

interface DiseaseCardProps {
  name: string;
  probability: number;
  images: ImageInfo[];
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ name, probability, images }) => (
  <div className="card">
    <h1>The Predicted Disease is “{name}”</h1>
    <p>Probability: {(probability * 100).toFixed(2)}%</p>
    <div className="image-container">
      {images.map((img) => (
        <div key={img.id}>
          <img src={img.url} alt="Similar" />
          <a href="#" className="text-xs text-blue-500 underline block mt-1">
            {img.license}
          </a>
          <p className="text-[10px] text-gray-500">{img.citation}</p>
        </div>
      ))}
    </div>
  </div>
);

const CropDisease = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    if (!file) return alert('Please upload an image');
    setLoading(true);
    try {
      const base64Image = await getBase64(file);
      const dummyLat = 40.7128;
      const dummyLon = -74.006;

      const response = await axios.post(
        'https://plant.id/api/v3/health_assessment',
        {
          images: [base64Image],
          latitude: dummyLat,
          longitude: dummyLon,
          similar_images: true,
        },
        {
          headers: {
            'Api-Key': process.env.NEXT_PUBLIC_PLANTID!,
            'Content-Type': 'application/json',
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert('Something went wrong while predicting.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="crop-disease-container">
        <div className="content-box">
          <h2>Crop Disease Detection</h2>
          <input type="file" className="file-input" onChange={handleFileChange} />
          <button className="btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Predicting...' : 'Predict'}
          </button>
        </div>

        <div className='w-full justify-around flex gap-y-[3rem] flex-wrap  ' >
        {result?.result?.disease?.suggestions?.length > 0 &&
          result.result.disease.suggestions.map((disease: any) => (
            <DiseaseCard
              key={disease.id}
              name={disease.name}
              probability={disease.probability}
              images={disease.similar_images.map((img: any) => ({
                id: img.id,
                url: img.url_small,
                license: img.license_name,
                citation: img.citation,
              }))}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CropDisease;
