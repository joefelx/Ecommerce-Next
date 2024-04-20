import React from "react";
import Hero from "./_components/Hero";
import Product from "../_components/Product";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Hero />
      <div className="flex flex-wrap items-center justify-evenly gap-y-8">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomePage;
