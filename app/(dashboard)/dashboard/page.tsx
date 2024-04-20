"use client";

import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/appwrite/bucket";
import Avatar from "../../_assets/avatar.png";
import Image from "next/image";
import Link from "next/link";
import Line from "@/app/_components/Link";
import NewProduct from "./_components/NewProduct";
import Products from "./_components/Products";

const DASHBOARD_MENU = [
  {
    title: "Overview",
    tag: "add-product",
  },
  {
    title: "Order",
    tag: "add-product",
  },
  {
    title: "Products",
    tag: "products",
  },
  {
    title: "Transactions",
    tag: "add-product",
  },
];
const NEW_MENU = [
  {
    title: "Add Product",
    tag: "add-product",
  },
];

function Dashboard() {
  const [active, setActive] = useState("");

  const MenuComponent = ({
    title,
    menus,
    active,
    setActive,
  }: {
    title: string;
    menus: Array<Object>;
    active: string;
    setActive: () => void;
  }) => {
    useEffect(() => {
      console.log(active);
    }, [active]);

    return (
      <div className="p-5">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex flex-col py-1">
          {menus.map((menu) => (
            <div
              key={menu.title}
              onClick={() => setActive(menu.tag)}
              className={`p-2 rounded-md cursor-pointer ${
                active === menu && "bg-slate-200 text-"
              } `}
            >
              <span>{menu.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-screen flex bg-white-900 text-black">
      <aside className="w-1/5">
        {/* Profile */}
        <div className="p-5 flex items-center gap-5">
          <Image
            src={Avatar}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold">Seller</h1>
            <p className="text-sm">Company</p>
          </div>
        </div>
        <Line />
        {/* Menu */}
        <MenuComponent
          title="Dashboard"
          menus={DASHBOARD_MENU}
          active={active}
          setActive={setActive}
        />
        <Line />
        <MenuComponent
          title="New"
          menus={NEW_MENU}
          active={active}
          setActive={setActive}
        />
      </aside>

      <div className="w-4/5">
        {active === "add-product" && <NewProduct />}
        {active === "products" && <Products />}
      </div>
    </div>
  );
}

export default Dashboard;
