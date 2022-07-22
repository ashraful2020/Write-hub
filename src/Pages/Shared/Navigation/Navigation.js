import React, { useState } from "react";
import NavLink from "./NavLink";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-50 bg-neutral-900 pt-4 text-white ">
      {/*  First Header  */}
      <div className="my-6 hidden items-center justify-around md:flex">
        {/*  First header first part  */}
        {/* // header part logo */}
        <div className="flex gap-3 text-2xl">
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
        </div>
        {/*  First header middle part  */}
        <div className="text-left text-4xl font-bold">Write Hub</div>
        {/*  First header last part  */}
        <div className="flex items-center justify-around text-lg  uppercase">
          <p className="pr-3">Search</p>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>

      <div className="flex w-full items-center justify-around md:hidden">
        <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close-sharp" : "menu-sharp"}`}></ion-icon>
        </div>

        <p className={`${open ? "hidden" : "inline"} text-xl`}>Write Hub</p>
        <p className={`${open ? "hidden" : "inline"}`}>
          <ion-icon name="search-outline"></ion-icon>
        </p>
      </div>

      <ul className="z-50 hidden justify-center text-sm md:flex md:gap-10 md:py-6 ">
        <NavLink />
        <span className="pt-6 text-left font-bold uppercase text-gray-400 hover:text-white md:pt-0">
          Sign Up
        </span>
      </ul>

      {/*  Mobile menu  */}
      <ul
        className={`absolute z-50 h-screen w-full bg-black py-8 pl-4 opacity-100 duration-500 md:hidden ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <NavLink />
        <span className="pt-6 text-left font-bold uppercase text-gray-400 hover:text-white md:pt-0">
          Ashraful
        </span>
      </ul>
    </div>
  );
};

export default Navigation;
