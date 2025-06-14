import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {/* adding active classes to link via navlink */}
        <NavLink to="/" className="flex-col flex items-center gap-1 ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex-col flex items-center gap-1 ">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex-col flex items-center gap-1 ">
          <p>About</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex-col flex items-center gap-1 ">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative ">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="corsor-pointer hover:text-black">My Profile</p>
              <p className="corsor-pointer hover:text-black">Orders</p>
              <p className="corsor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`${
          visible ? "w-full" : "w-0"
        } absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
          <div onClick={()=>setVisible(false)} className="flex flex-col text-gray-600">
               <div className="flex items-center gap-4 p-3">
                    <img src={assets.dropdown_icon} alt="" className="h-4 " />
                    <p >Back</p>
                    
               </div>
               <div onClick={()=>setVisible(false) } className="flex flex-col">
                    <NavLink to="/" className="py-2 pl-6 border ">
                         Home
                    </NavLink>
                    <NavLink to="/collection" className="py-2 pl-6 border ">
                         Collection
                    </NavLink>
                    <NavLink to="/about" className="py-2 pl-6 border ">
                         About
                    </NavLink>
                    <NavLink to="/contact" className="py-2 pl-6 border ">
                         Contact
                    </NavLink>
               </div>

          </div>
      </div>
    </div>
  );
};

export default Navbar;
