import Link from 'next/link'
import React from 'react'
import HamburgerANDaside from "@/components/HamburgerANDaside";

const Header = () => {
  return (
    <header
    className={`grid grid-flow-col sm:px-2 md:px-4 lg:py-5 lg:px-12 py-2 md:py-3  justify-between items-center fixed top-0 inset-x-0 text-white z-50 bg-[#000000bd]`}
  >
    <Link
      href={"#home"}
      className="text-xl font-semibold pl-4 lg:pl-0 md:text-2xl lg:text-3xl hover:bg-gradient-to-r hover:from-amber-400 hover:to-fuchsia-400 hover:bg-clip-text hover:text-transparent duration-500 bg-gradient-to-r from-blue-400  to-red-400 bg-clip-text text-transparent"
    >
      Smit Parmar
    </Link>
    <nav className=" lg:grid grid-flow-col hidden gap-10 font-extralight  text-lg ">
      <Link
        href={"#about"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        About
      </Link>
      <Link
        href={"#skill"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        Skills
      </Link>
      <Link
        href={"#education"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        Education
      </Link>
      <Link
        href={"#ready"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        Ready to Hire as
      </Link>
      <Link
        href={"#available"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        Available On
      </Link>
      <Link
        href={"#portfolio"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        Portfolio
      </Link>
      <Link
        href={"#contact"}
        className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#FFBD38] hover:font-medium after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        Contact Me
      </Link>
    </nav>
    <HamburgerANDaside/>
  </header>
  )
}

export default Header