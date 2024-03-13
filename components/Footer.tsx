import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="px-3 sm:px-6 md:px-8 lg:px-12 md:pt-14 pt-10">
        <h2
          id="contact"
          className="text-3xl lg:text-5xl md:text-4xl pt-24 -mt-24   font-semibold text-white"
        >
          Contact Me
        </h2>
        <p className="mt-2">
        For inquiries or collaborations, please reach out via email or the contact from below : )
        </p>
        {/* conatiner of all conatct me */}
        <section className="py-5 grid gap-6 sm:grid-cols-2 sm:gap-8 sm:pt-7 md:gap-12 md:pt-12 lg:grid-cols-4 lg:pt-16 ">
          {/* Address */}
          <section className="grid grid-flow-col group justify-start gap-6 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#FFBD38] w-16 group-hover:bg-[#2a2a2a] duration-300 rounded-full bg-[#1a1a1a] p-4"
              viewBox="0 0 24 24"
            >
              <path d="M11.75 1a.75.75 0 0 1 .75.75V4h6.532c.42 0 .826.15 1.143.425l3.187 2.75a1.75 1.75 0 0 1 0 2.65l-3.187 2.75a1.75 1.75 0 0 1-1.143.425H12.5v9.25a.75.75 0 0 1-1.5 0V13H3.75A1.75 1.75 0 0 1 2 11.25v-5.5C2 4.783 2.784 4 3.75 4H11V1.75a.75.75 0 0 1 .75-.75m7.282 4.5H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h15.282c.06 0 .118-.021.163-.06l3.188-2.75a.248.248 0 0 0 0-.38l-3.188-2.75a.249.249 0 0 0-.163-.06" />
            </svg>
            <div>
              <h4 className="text-xl font-semibold text-white group-hover:text-slate-200 duration-300">
                Address
              </h4>
              <h5 className="text-sm">Jeevandeep Society, Thaltej</h5>
              <h5 className="text-sm">Ahmedabad, Gujarat, India</h5>
            </div>
          </section>
          {/* Contact Number */}
          <a
            href="tel:+91 6354127241"
            className="grid grid-flow-col group justify-start gap-6 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#FFBD38] group-hover:bg-[#2a2a2a] duration-300 w-16 rounded-full bg-[#1a1a1a] p-4"
              viewBox="0 0 24 24"
            >
              <path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path>
            </svg>
            <div className="">
              <h4 className="text-xl font-semibold text-white group-hover:text-slate-200 duration-300">
                Contact Number
              </h4>
              <h5 className="text-sm">+91 63541 27241</h5>
            </div>
          </a>
          {/* Email */}
          <a
            href="mailto:parmarsmit505@gmail.com"
            className="grid group grid-flow-col justify-start gap-6 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#FFBD38] group-hover:bg-[#2a2a2a] duration-300 w-16 rounded-full bg-[#1a1a1a] p-4"
              viewBox="0 0 21 21"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m1.5 9l16-6.535L14.7 17zm16-6.5l-11 10m0 0v5l3-3"
              ></path>
            </svg>
            <div className="">
              <h4 className="text-xl font-semibold text-white group-hover:text-slate-200 duration-300">
                Email Address
              </h4>
              <h5 className="text-sm">parmarsmit505@gmail.com</h5>
            </div>
          </a>
          {/* What app */}
          <a
            href="whatsapp://send?text=Hello Smit&phone=6354127241"
            className="grid group grid-flow-col justify-start gap-6 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#FFBD38] group-hover:bg-[#2a2a2a] duration-300 group-hover:bg- w-16 rounded-full bg-[#1a1a1a] p-4"
              viewBox="0 0 24 24"
            >
              <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
            </svg>
            <div className="">
              <h4 className="text-xl font-semibold text-white group-hover:text-slate-200 duration-300">
                Whatsapp
              </h4>
              <h5 className="text-sm">+91 63541 27241</h5>
            </div>
          </a>
        </section>

        <h5 className="text-xs text-center my-5 sm:text-sm lg:mt-16">
          Copyright ©2024 All rights reserved | This Designed by{" "}
          <Link href={"#home"} className="text-sky-500">
            Smit Parmar
          </Link>
        </h5>
      </footer>
  )
}

export default Footer