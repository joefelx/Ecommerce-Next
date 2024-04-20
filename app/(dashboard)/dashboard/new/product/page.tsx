"use client";

import ImageUpload from "@/app/appwrite/bucket";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`border py-2 px-5 rounded-full text-sm font-normal ${className}`}
    >
      {children}
    </button>
  );
};

const uploader = new ImageUpload();

function NewProduct() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  async function handleUpload() {
    console.log("inside uploader");
    // @ts-ignore
    if (file != null) {
      let fileURL = await uploader.uploadImage(file);
      if (fileURL) {
        setImage(fileURL);
      }
    }
  }

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className="w-full min-h-screen h-full p-5">
      <h1 className="text-2xl font-semibold">Add New Product</h1>
      <div className="grid grid-flow-col justify-between">
        <p className="text-sm text-slate-600">
          You can see all sales analysis results more clearly and completely
        </p>
        {/* Buttons */}
        <div className="">
          <Button>Cancel</Button>
          <Button className="bg-blue-500 text-white">Save</Button>
        </div>
      </div>

      <div className="my-5 flex">
        {/* left */}
        <div className="border rounded-3xl p-5">
          <h2 className="text-xl font-semibold mb-5">Thumbnail</h2>
          <div className="h-52 w-52 border rounded-3xl flex justify-center items-center overflow-hidden">
            {!image ? (
              <div className="flex flex-col items-center justify-center">
                <input
                  type="file"
                  className="flex"
                  // @ts-ignore
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {file && (
                  <button
                    className="p-2 border rounded-xl text-sm capitalize"
                    onClick={() => handleUpload()}
                  >
                    upload
                  </button>
                )}
              </div>
            ) : (
              <img
                src={image}
                alt="product"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        {/* right */}
        <div>hello</div>
      </div>
    </div>
  );
}

export default NewProduct;
