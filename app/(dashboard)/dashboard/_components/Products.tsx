"use client";
import React, { useEffect, useState } from "react";

import Line from "@/app/_components/Link";
import { Product } from "@prisma/client";
import Loader from "@/app/_components/Loader";

function Products() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    (async () => {
      const response = await fetch("/api/product/get", {
        method: "GET",
        headers: {
          credentials: "c68bca59-0be7-4a37-af98-826e7e8201a3",
        },
      });

      const data = await response.json();
      setProducts(data);
      setLoader(false);
    })();
  }, []);

  return (
    <div className="w-full min-h-screen h-full p-5 bg-white">
      <h1 className="text-2xl font-semibold">Products</h1>
      {loader ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="w-full border rounded-xl p-5 mt-5">
          {!products ? (
            <div>No products</div>
          ) : (
            <table className="w-full">
              <thead className="grid grid-cols-6 place-items-center">
                <tr>
                  <th>Product Name</th>
                </tr>
                <tr>
                  <th>Price</th>
                </tr>
                <tr>
                  <th>Stock</th>
                </tr>
                <tr>
                  <th>Status</th>
                </tr>
                <tr>
                  <th>Category</th>
                </tr>
                <tr>
                  <th>Orders</th>
                </tr>
              </thead>
              <Line />
              {products?.map((p) => (
                <tbody
                  className="grid grid-cols-6 text-center py-2 border-b"
                  key={p.id}
                >
                  <tr>
                    <span>{p.name}</span>
                  </tr>
                  <tr>
                    <span>{p.price}</span>
                  </tr>
                  <tr>
                    <span>{p.stock}</span>
                  </tr>
                  <tr>
                    <span>{p.status}</span>
                  </tr>
                  <tr>
                    <span>{p.category}</span>
                  </tr>
                  <tr>
                    <span>{p.orders.length}</span>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
