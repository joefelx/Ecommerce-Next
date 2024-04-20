"use client";

import React, { useState } from "react";
import ImageUpload from "@/app/appwrite/bucket";
import Avatar from "../../_assets/avatar.png";
import Image from "next/image";
import Link from "next/link";

function Dashboard() {
  const DASHBOARD_MENU = [
    {
      title: "Overview",
      link: "/new/product",
    },
    {
      title: "Order",
      link: "/new/product",
    },
    {
      title: "Products",
      link: "/new/product",
    },
    {
      title: "Transactions",
      link: "/new/product",
    },
  ];
  const NEW_MENU = [
    {
      title: "Add Product",
      link: "/dashboard/new/product",
    },
  ];

  const MenuComponent = ({
    title,
    menus,
  }: {
    title: string;
    menus: Array<Object>;
  }) => {
    const [active, setActive] = useState("");

    return (
      <div className="p-5">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex flex-col py-1">
          {menus.map((menu) => (
            <Link key={menu.title} href={menu.link}>
              <div
                className={`p-2 rounded-md cursor-pointer ${
                  active === menu && "bg-slate-500"
                } `}
              >
                <span onClick={() => setActive(menu)}>{menu.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-screen flex bg-slate-800 text-white">
      <aside className="flex-1">
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
        <hr className="border-t border-slate-500" />
        {/* Menu */}
        <MenuComponent title="Dashboard" menus={DASHBOARD_MENU} />
        <hr className="border-t border-slate-500" />
        <MenuComponent title="New" menus={NEW_MENU} />
      </aside>

      <div className="flex-[3]">stats</div>
    </div>
  );
}

export default Dashboard;
