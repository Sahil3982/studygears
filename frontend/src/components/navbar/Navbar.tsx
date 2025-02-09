"use client"
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaStoreAlt } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-grey h-14 shadow-xl   w-full  ">
        <div className="flex items-center justify-between pr-10">
          <img src="logo.png" alt="" className="h-14 w-30"  />
          <div className="h-10 w-96 border-2 rounded-3xl flex items-center justify-start shadow-xl">
          <RiSearch2Line className="pl-5 h-full w-10" />
          </div>
          // User Profile Pop
          <div className="h-10 w-44 flex items-center justify-between gap-4 ">
            <button type="button" onClick={()=>router.push("/login")}  className=" border-2 px-5">Login</button>
           <Link href="/register"> <button type="button"className=" border-2 px-5">Register</button></Link> 
          </div>
          <div className="h-10 w-40 flex items-center justify-between ">
          <CiShoppingCart className="h-full w-8" />
          <LiaFacebookMessenger  className="h-full w-8"/>
          <FaStoreAlt  className="h-full w-8"/>
          </div>
          <div  className="h-10 w-10 flex items-center justify-center ">
          <RxHamburgerMenu className="h-full w-full" />
          </div>
        </div >
      </div>
    </div>
  );
};

export default Navbar;
