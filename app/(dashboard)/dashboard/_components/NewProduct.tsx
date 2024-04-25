"use client";

import Button from "@/app/_components/Button";
import Line from "@/app/_components/Link";
import ImageUpload from "@/app/appwrite/bucket";
import React, { useEffect, useState } from "react";
import { ProductStatus, Category, Product } from "@prisma/client";
import Loader from "@/app/_components/Loader";

const uploader = new ImageUpload();

function NewProduct() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    sellerId: "c68bca59-0be7-4a37-af98-826e7e8201a3",
    description: "",
    image: "",
    price: "",
    stock: "",
    status: ProductStatus.SAVED,
    inStock: true,
    category: Category.JACKET,
  });

  async function handleUpload() {
    console.log("inside uploader");
    // @ts-ignore
    if (file != null) {
      let fileURL = await uploader.uploadImage(file);
      if (fileURL) {
        setImage(fileURL);
        setProduct((product) => ({
          ...product,
          image: fileURL,
        }));
      }
    }
  }

  async function createProduct() {
    setLoading(true);
    console.log(product);

    const response = await fetch("/api/product/new", {
      method: "POST",
      body: JSON.stringify(product),
    });

    const data = await response.json();

    console.log(data);
    if (data) {
      setLoading(false);
      setSaved(true);
    }
  }

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen h-full p-5 bg-white">
      <h1 className="text-2xl font-semibold">Add New Product</h1>
      <div className="grid grid-flow-col justify-between">
        <p className="text-sm text-slate-600">
          You can see all sales analysis results more clearly and completely
        </p>
        {/* Buttons */}
        <div className="grid grid-flow-col gap-2">
          {!saved ? (
            <>
              <Button>Cancel</Button>
              <Button
                className="bg-blue-500 text-white border-none"
                onClick={createProduct}
              >
                Save
              </Button>
            </>
          ) : (
            <span>Saved</span>
          )}
        </div>
      </div>

      <div className="my-5 w-full grid grid-cols-4 gap-4">
        {/* left */}
        <div className="w-full flex flex-col gap-5">
          {/* image */}
          <div className="border rounded-3xl p-5 h-80 flex flex-col">
            <h2 className="text-xl font-semibold mb-5">Thumbnail</h2>
            <div className="h-full border rounded-3xl flex justify-center items-center overflow-hidden">
              {!image ? (
                <div className="flex flex-col gap-5">
                  <input
                    type="file"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm cursor-pointer focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-3 file:px-4"
                    // @ts-ignore
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  {file && (
                    <Button
                      className="bg-blue-500 text-white rounded-xl border-none"
                      onClick={() => handleUpload()}
                    >
                      Upload
                    </Button>
                  )}
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt="product"
                  className="w-52 h-52 object-cover"
                />
              )}
            </div>
          </div>

          {/* status */}
          <div className="border rounded-3xl p-5 flex flex-col">
            <h2 className="text-xl font-semibold mb-5">Status</h2>
            <Line />
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="status">Set Status</label>
              <select
                name="status"
                className="bg-white border p-3 rounded-lg"
                onChange={(e) =>
                  setProduct((product) => ({
                    ...product,
                    status: e.target.value,
                  }))
                }
              >
                <option value={ProductStatus.PUBLISHED}>Published</option>
                <option value={ProductStatus.SAVED}>Saved</option>
                <option value={ProductStatus.OUTOFSTOCK}>Out of Stock</option>
              </select>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full col-span-3 flex flex-col gap-5">
          {/* General Information */}
          <div className="border rounded-3xl p-5 w-full">
            <h2 className="text-xl font-semibold mb-5">General</h2>
            <Line />
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="product-name" className="text-md">
                Product Name
              </label>
              <input
                type="text"
                name="product-name"
                placeholder="T-Shirt ..."
                className="p-2 border rounded-xl focus:outline-none"
                onChange={(e) =>
                  setProduct((product) => ({
                    ...product,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="product-description" className="text-md">
                Product Description
              </label>
              <textarea
                name="product-description"
                placeholder="Product details..."
                className="border rounded-2xl p-2 focus:outline-none"
                onChange={(e) =>
                  setProduct((product) => ({
                    ...product,
                    description: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          {/* Pricing */}
          <div className="border rounded-3xl p-5 w-full">
            <h2 className="text-xl font-semibold mb-5">Pricing</h2>
            <Line />
            {/* base price and stock */}
            <div className="flex justify-between gap-5 my-3">
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="product-price" className="text-md">
                  Base Price
                </label>
                <input
                  type="text"
                  name="product-price"
                  placeholder="$100"
                  className="p-2 border rounded-xl focus:outline-none"
                  onChange={(e) =>
                    setProduct((product) => ({
                      ...product,
                      price: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="product-price" className="text-md">
                  Stock
                </label>
                <input
                  type="text"
                  name="product-price"
                  placeholder="100"
                  className="p-2 border rounded-xl focus:outline-none"
                  onChange={(e) =>
                    setProduct((product) => ({
                      ...product,
                      stock: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          {/* Catogary */}
          <div className="border rounded-3xl p-5 w-full">
            <h2 className="text-xl font-semibold mb-5">Category</h2>
            <Line />
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="status">Select Category</label>
              <select
                name="status"
                className="bg-white border p-3 rounded-lg"
                onChange={(e) =>
                  setProduct((product) => ({
                    ...product,
                    category: e.target.value,
                  }))
                }
              >
                <option value={Category.JACKET}>Jacket</option>
                <option value={Category.PANT}>Pant</option>
                <option value={Category.SHIRT}>Shirt</option>
                <option value={Category.TSHIRT}>T-Shirt</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
