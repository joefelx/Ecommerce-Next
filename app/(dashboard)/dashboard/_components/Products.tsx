"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@prisma/client";

function Products() {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/product/get", {
        method: "GET",
        headers: {
          credentials: "56c931e1-37ca-44d3-99b2-daab734afe18",
        },
      });

      const data = await response.json();
      setProducts(data.products);
    })();
  }, []);
  return (
    <div>
      <h1>Produts</h1>
      <div>
        {products?.map((p) => (
          <h1 key={p.id}>{p.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default Products;
