"use client"
import Image from 'next/image';
import { Fade as Hamburger } from "hamburger-react";
import Link from 'next/link'
import React, { useState } from 'react'

const HamburgerANDaside = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <span className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            duration={0.4}
            distance="sm"
            label="show menu"
          />
        </span>
    <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }   fixed inset-0 duration-500 lg:hidden z-[99] grid grid-cols-5`}
      >
        {/* // TODO (1) -------- Data showing section ---------------- */}
        <section className="bg-[#040B14] overflow-scroll grid  col-span-4 sm:col-span-3">
          <section className="mt-8 md:mt-16">
            {/* //? ---------- (1) Image and name container ------- */}
            <section className="   grid gap-3 md:gap-5  place-items-center ">

              <Image
                height={200}
                width={200}
                src={"/smit.webp"}
                alt="Profile Pic"
                className="  rounded-full w-32 sm:w-36 outline outline-gray-800 outline-[6px]"
                />
              <div className="text-2xl font-semibold md:text-3xl  text-white">
                Smit Parmar
              </div>
            </section>
            {/* //? --------- (2) Socials Container ---------  */}
            <section className="grid grid-flow-col justify-center items-center gap-5 md:mt-5 md:gap-9 mt-3">
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/smit100/" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white w-10 md:w-12 rounded-full bg-gray-800 hover:bg-gray-900 duration-300 px-2 py-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path>
                </svg>
              </a>
              {/* Dribble */}
              <a href="https://dribbble.com/Smit_Parmar" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-white md:w-12 fill-gray-800 w-10 rounded-full bg-gray-800 hover:bg-gray-900 duration-300 px-2 py-2"
                  viewBox="0 0 48 48"
                >
                  <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="M44 24a19.938 19.938 0 0 1-5.889 14.173A19.937 19.937 0 0 1 24 44C12.954 44 4 35.046 4 24a19.932 19.932 0 0 1 5.5-13.775A19.943 19.943 0 0 1 24 4a19.937 19.937 0 0 1 14.111 5.827A19.938 19.938 0 0 1 44 24"></path>
                    <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147"></path>
                    <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23c2.54 7.302 3.48 16.28 4.06 18.835"></path>
                    <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3c6.4-2.733 11.907-7.76 13.796-9.355M5.5 31.613a20.076 20.076 0 0 0 9 9.991"></path>
                    <path d="M4 24a19.932 19.932 0 0 1 5.5-13.775M24 4a19.943 19.943 0 0 0-14.5 6.225M32 5.664a20.037 20.037 0 0 1 6.111 4.163A19.938 19.938 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.937 19.937 0 0 0 14.111-5.827"></path>
                  </g>
                </svg>
              </a>
              {/* Be-hance */}
              <a href="https://www.behance.net/parmarsmit001" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white md:w-12 w-10 rounded-full bg-gray-800 hover:bg-gray-900 duration-300 px-2 py-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.07 6.35H15v1.41h5.09ZM19 16.05a2.23 2.23 0 0 1-1.3.37a2.23 2.23 0 0 1-1.7-.54a2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2a5.08 5.08 0 0 0-.8-1.73a4.17 4.17 0 0 0-1.42-1.21a4.37 4.37 0 0 0-2-.45a4.88 4.88 0 0 0-1.9.37a4.51 4.51 0 0 0-1.47 1a4.4 4.4 0 0 0-.95 1.52a5.4 5.4 0 0 0-.33 1.91a5.52 5.52 0 0 0 .32 1.94a4.46 4.46 0 0 0 .88 1.53a4 4 0 0 0 1.46 1a5.2 5.2 0 0 0 1.94.34a4.77 4.77 0 0 0 2.64-.7a4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76m-3.43-4.12a1.87 1.87 0 0 1 1-1.14a2.28 2.28 0 0 1 1-.2a1.73 1.73 0 0 1 1.36.49a2.91 2.91 0 0 1 .63 1.45h-4.15a3 3 0 0 1 .11-.6Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1a2.72 2.72 0 0 0 .43-1.58a3.28 3.28 0 0 0-.29-1.48a2.4 2.4 0 0 0-.82-1a3.24 3.24 0 0 0-1.27-.52a7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1a6.55 6.55 0 0 0 1.65-.21a4.55 4.55 0 0 0 1.43-.65a3.13 3.13 0 0 0 1-1.14a3.41 3.41 0 0 0 .37-1.65a3.47 3.47 0 0 0-.57-2a3 3 0 0 0-1.75-1.19ZM4.77 7.86h2.59a4.17 4.17 0 0 1 .71.06a1.64 1.64 0 0 1 .61.22a1.05 1.05 0 0 1 .42.44a1.42 1.42 0 0 1 .16.72a1.36 1.36 0 0 1-.47 1.15a2 2 0 0 1-1.22.35h-2.8Zm4.84 7.44a1.28 1.28 0 0 1-.45.5a2 2 0 0 1-.65.26a3.33 3.33 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41a1.65 1.65 0 0 1 .54 1.39a1.77 1.77 0 0 1-.11.81"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/parmarsmit486?utm_source=qr&igsh=MTc5dm84Ym1yYnNjMw==" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white w-10 md:w-12 rounded-full bg-gray-800 hover:bg-gray-900 duration-300 px-2 py-2"
                  viewBox="0 0 32 32"
                >
                  <circle cx="22.406" cy="9.594" r="1.44"></circle>
                  <path d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></path>
                  <path d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"></path>
                </svg>
              </a>
            </section>
            {/* //? ---------------- (3) Nav -------------------- */}
            <ul className="text-gray-400 font-medium mt-9 md:mt-14 md:text-xl text-lg text-center">
              {/* (1) Home */}
              <li className="">
                <hr className="mb-3 mx-6 md:mx-14 md:mb-4 border-b-gray-500 border-[.6px]" />
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#home"
                  className=" hover:text-sky-400 duration-300"
                >
                  Home
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* (2) About  */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#about"
                  className="hover:text-sky-400 duration-300"
                >
                  About
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* (3) skills  */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#skill"
                  className="hover:text-sky-400 duration-300"
                >
                  Skills
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* Education */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#education"
                  className="hover:text-sky-400 duration-300"
                >
                  Education
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* Services */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#ready"
                  className="hover:text-sky-400 duration-300"
                >
                  Ready to hire as
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* Profiles */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#available"
                  className="hover:text-sky-400 duration-300"
                >
                  Available On
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* portfolio */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#portfolio"
                  className="hover:text-sky-400 duration-300"
                >
                  Portfolio
                </Link>
                <hr className="my-3 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
              {/* contact me */}
              <li className="">
                <Link
                  onClick={() => setOpen(!isOpen)}
                  href="#contact"
                  className="hover:text-sky-400 duration-300 "
                >
                  Contact me
                </Link>
                <hr className="mt-3 mb-8 mx-6 md:mx-14 md:my-4 border-b-gray-500 border-[.6px]" />
              </li>
            </ul>
          </section>

          {/* //?----------------- (4) Credits ---------------- */}
          <section className="text-white text-xs text-center mb-2 md:mb-4 place-self-end mx-auto">
            <div>© 2024 SmitParmar. All rights reserved.</div>
            <div>
              Designed by{" "}
              <Link
                onClick={() => setOpen(!isOpen)}
                href={"#home"}
                className="text-blue-400 font-medium"
              >
                {" "}
                Smit Parmar
              </Link>
            </div>
          </section>
        </section>
        {/* //TODO (2) -------------- click to close sidebar section ----------- */}
        <section
          onClick={() => setOpen(!isOpen)}
          className="bg-transparent col-span-1 sm:col-span-2"
        ></section>
      </aside>
    </>
  )
}

export default HamburgerANDaside