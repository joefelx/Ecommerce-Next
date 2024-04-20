import React from "react";
import PRODUCTIMAGE from "../_assets/product.jpg";
import Image from "next/image";

function Product() {
  return (
    <div className="block w-[25rem] min-h-80 h-auto bg-white p-5 border rounded-lg ">
      {/* image */}
      <div className="h-[20rem] object-cover">
        {/* <img src={PRODUCTIMAGE} alt="" className="w-full h-full" /> */}
        <Image
          src={PRODUCTIMAGE}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* description */}
      <div className="pt-5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Title</h1>
          <span className="text-yellow-500">In Stock</span>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit is repellat vel, doloribus natus unde. Quo
          possimus, ex fuga, minima nisi iure odit vel perspiciatis velit beatae
          non. Quos, temporibus!
        </p>
        <div className="flex justify-between items-end my-5">
          <span className="text-3xl font-semibold">$40</span>
          <span>discounted</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button className="border rounded-lg w-full py-2 hover:bg-slate-200">
          Add to Cart
        </button>
        <button className="border rounded-lg bg-blue-500 text-white w-full py-2 hover:bg-blue-800">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Product;
