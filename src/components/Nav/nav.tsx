"use client";
import { useState } from "react";
import { Logo } from "../Logo";
import { NavLink } from "./NavLink";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center absolute z-50 top-0 left-0 w-screen py-5 px-10 ">
      <div>
        <Logo />
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={"M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`lg:block ${isOpen ? "absolute top-0 left-0 backdrop-blur-lg w-screen h-screen py-5 px-10" : "hidden w-1/5"}`}
      >
        <div className="lg:hidden" dir="rtl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={"M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center h-1/2 space-y-4 lg:space-y-0 w-full">
          <div className="lg:hidden flex justify-center w-full mb-5">
            <Logo />
          </div>
          <NavLink
            href="/#"
            text="About Us"
            className="bg-white lg:bg-transparent lg:!text-white !text-black  !hover:bg-primary/90  w-full lg:w-auto"
          />
          <NavLink
            href="/#"
            text="Get Started"
            className="bg-white !text-black lg:hover:!bg-primary/90 w-full lg:w-auto"
          />
        </div>
      </div>
    </nav>
  );
}
