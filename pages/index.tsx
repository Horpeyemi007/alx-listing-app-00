import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-9xl mx-auto px-4 py-6">
      <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/assets/hero_img.jpg"
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg mt-2">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
