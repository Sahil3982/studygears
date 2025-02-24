"use client";

import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaStoreAlt } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-100 shadow-md w-full h-14 flex items-center px-6">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        
        {/* Search Bar */}
        <div className="relative flex items-center w-96">
          <RiSearch2Line className="absolute left-4 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-12 pr-4 border-2 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        
        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="border-2 px-5 py-1 rounded-md hover:bg-gray-200"
          >
            Login
          </button>
          <Link href="/register">
            <button className="border-2 px-5 py-1 rounded-md hover:bg-gray-200">
              Register
            </button>
          </Link>
        </div>
        
        {/* Icons */}
        <div className="flex items-center gap-6">
          <CiShoppingCart className="text-2xl cursor-pointer" />
          <LiaFacebookMessenger className="text-2xl cursor-pointer" />
          <FaStoreAlt className="text-2xl cursor-pointer" />
        </div>
        
        {/* Hamburger Menu */}
        <div className="cursor-pointer p-2 rounded-md hover:bg-gray-200">
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;