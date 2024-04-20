import React from "react";

const Header = () => {
  return (
    <div className="h-auto w-full max-w-7xl py-2 flex justify-between items-center text-md antialiased">
      <div>
        <span className="text-lg font-bold antialiased">Logo</span>
      </div>
      <div className="flex gap-5">
        <menu className="flex items-center gap-3">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Shop</li>
        </menu>

        <button className="bg-red-100 px-4 rounded-md">Cart</button>
        <div className="w-12 aspect-square rounded-full overflow-hidden object-cover">
          <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
