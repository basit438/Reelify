"use client";
import React, { useState } from "react";

function Captions({ handleFormSubmit }) {
  const captions = [
    {
      name: "Luminous Majesty",
      style: "text-amber-500 text-5xl font-extrabold italic drop-shadow-2xl font-serif",
    },
    {
      name: "Velvet Mirage",
      style: "text-indigo-600 text-4xl font-semibold tracking-wider uppercase font-mono",
    },
    {
      name: "Eternal Opulence",
      style: "text-teal-800 text-6xl font-light italic leading-tight font-serif",
    },
    {
      name: "Crimson Reverie",
      style: "text-red-600 text-3xl font-bold tracking-wide drop-shadow-md",
    },
    {
      name: "Celestial Rapture",
      style: "text-white text-5xl font-extrabold uppercase leading-snug drop-shadow-3xl font-sans",
    },
    {
      name: "Golden Hour Bliss",
      style: "text-yellow-400 text-4xl font-medium italic tracking-tight font-serif",
    },
    {
      name: "Midnight Echoes",
      style: "text-gray-900 text-5xl font-extrabold italic uppercase font-sans drop-shadow-xl",
    },
    {
      name: "Twilight Whispers",
      style: "text-purple-500 text-4xl font-semibold leading-loose font-serif",
    },
    {
      name: "Majestic Solitude",
      style: "text-blue-800 text-3xl font-bold tracking-tight font-mono",
    },
    {
      name: "Vivid Enchantment",
      style: "text-pink-500 text-4xl font-light italic drop-shadow-lg font-poppins",
    },
  ];

  const [selectedCaption, setSelectedCaption] = useState();

  return (
    <div className="mt-7">
      <h2 className="text-lg font-semibold p-2">Caption Styling</h2>
      <p className="text-sm text-gray-500 p-2">Select a caption style</p>
      <div className="flex flex-wrap gap-4">
        {captions.map((caption, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCaption(caption.name);
              handleFormSubmit("caption", caption); // Pass both fieldName and fieldValue
            }}
            className={`cursor-pointer p-2 border-2 border-transparent hover:border-blue-500 ${
              caption.name === selectedCaption && "border-4 border-green-700"
            }`}
          >
            {/* Apply a smaller size with the preview styles */}
            <h2 className={`text-sm ${caption.style}`}>{caption.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Captions;
