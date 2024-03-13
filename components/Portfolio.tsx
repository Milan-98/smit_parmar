"use client";
import React, { useState } from "react";
import Image from "next/image";
import Photo from "./Photo";

const Portfolio: React.FC = () => {
  const [activeButton, setActiveButton] = useState({
    illustrator: true,
    photoshop: false,
    blender: false,
    corel: false,
    youtube: false,
  });
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  //   Handling Left side button
  const handleLeftButton = () => {
    let SrcNumber = Number(
      modalImageSrc?.slice(1, modalImageSrc?.lastIndexOf(".webp"))
    );
    if (SrcNumber === 1) {
      SrcNumber = 54;
    }

    setModalImageSrc(`/${SrcNumber - 1}.webp`);
  };
  //   Handling Right side button
  const handleRightButton = () => {
    let SrcNumber = Number(
      modalImageSrc?.slice(1, modalImageSrc?.lastIndexOf(".webp"))
    );
    if (SrcNumber === 53) {
      SrcNumber = 0;
    }
    setModalImageSrc(`/${SrcNumber + 1}.webp`);
  };
  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setModalStatus(true);
  };
  return (
    <>
      <section className="py-10 px-3 md:px-8 lg:px-12 md:py-14 sm:px-6">
        <h2
          id="portfolio"
          className="text-3xl lg:text-5xl md:text-4xl font-semibold text-white pt-24 -mt-24 "
        >
          Portfolio
        </h2>
        <p className="mt-2">
        This portfolio showcases my diverse skill set and expertise, serving as a testament to my abilities and proficiency in various areas.
        </p>
        {/* Portfolio images */}
        <ul className="grid grid-flow-col mt-6 gap-6 text-center items-center overflow-scroll text-xl auto-cols-min   font-light text-white  py-2">
          <li
            onClick={() =>
              setActiveButton({
                ...activeButton,
                illustrator: true,
                photoshop: false,
                blender: false,
                corel: false,
                youtube: false,
              })
            }
            className={`${
              activeButton.illustrator
                ? " bg-[#ffbd38e0]"
                : "hover:bg-[#565656]"
            } cursor-pointer px-4 py-1 rounded-full`}
          >
            Illustrator
          </li>
          <li
            onClick={() =>
              setActiveButton({
                ...activeButton,

                illustrator: false,
                photoshop: true,
                blender: false,
                corel: false,
                youtube: false,
              })
            }
            className={`${
              activeButton.photoshop ? " bg-[#ffbd38e0]" : "hover:bg-[#565656]"
            } cursor-pointer px-4 py-1 rounded-full`}
          >
            Photoshop
          </li>
          <li
            onClick={() =>
              setActiveButton({
                ...activeButton,

                illustrator: false,
                photoshop: false,
                blender: true,
                corel: false,
                youtube: false,
              })
            }
            className={`${
              activeButton.blender ? " bg-[#ffbd38e0]" : "hover:bg-[#565656]"
            } cursor-pointer px-4 py-1 rounded-full`}
          >
            Blender
          </li>
          <li
            onClick={() =>
              setActiveButton({
                ...activeButton,

                illustrator: false,
                photoshop: false,
                blender: false,
                corel: true,
                youtube: false,
              })
            }
            className={`${
              activeButton.corel ? " bg-[#ffbd38e0]" : "hover:bg-[#565656]"
            } cursor-pointer px-4 py-1 rounded-full`}
          >
            Corel
          </li>
          <li
            onClick={() =>
              setActiveButton({
                ...activeButton,

                illustrator: false,
                photoshop: false,
                blender: false,
                corel: false,
                youtube: true,
              })
            }
            className={`${
              activeButton.youtube ? " bg-[#ffbd38e0]" : "hover:bg-[#565656]"
            } cursor-pointer px-4 py-1 rounded-full`}
          >
            Youtube
          </li>
        </ul>
        <section className="mt-6">
          {/* //? -------------- Illustrator ---------- */}
          <section
            className={`${
              activeButton.illustrator ? "block" : "hidden"
            }  grid grid-cols-2  gap-2 lg:gap-4 `}
          >
            <div className="grid gap-2 sm:grid-cols-2 auto-rows-min lg:gap-4">
              <Photo number={1} handleImageClick={handleImageClick} />
              <Photo number={2} handleImageClick={handleImageClick} />
              <Photo number={3} handleImageClick={handleImageClick} />
              <Photo number={4} handleImageClick={handleImageClick} />
              <Photo number={5} handleImageClick={handleImageClick} />
              <Photo number={6} handleImageClick={handleImageClick} />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 auto-rows-min lg:gap-4">
              <Photo number={7} handleImageClick={handleImageClick} />
              <Photo number={8} handleImageClick={handleImageClick} />
              <Photo number={9} handleImageClick={handleImageClick} />
              <Photo number={10} handleImageClick={handleImageClick} />
              <Photo number={11} handleImageClick={handleImageClick} />
              <Photo number={12} handleImageClick={handleImageClick} />
              <Photo number={13} handleImageClick={handleImageClick} />
            </div>
          </section>
          {/* //? ---------------  Photoshop ---------- */}
          <section
            className={`${
              activeButton.photoshop ? "block" : "hidden"
            } grid grid-cols-2  gap-2 lg:gap-4 `}
          >
            <div className="grid gap-2 sm:grid-cols-2 auto-rows-min lg:gap-4">
              <Photo number={14} handleImageClick={handleImageClick} />
              <Photo number={15} handleImageClick={handleImageClick} />
              <Photo number={16} handleImageClick={handleImageClick} />
              <Photo number={17} handleImageClick={handleImageClick} />
              <Photo number={18} handleImageClick={handleImageClick} />
              <Photo number={19} handleImageClick={handleImageClick} />
              <Photo number={20} handleImageClick={handleImageClick} />
              <Photo number={21} handleImageClick={handleImageClick} />
              <Photo number={22} handleImageClick={handleImageClick} />
              <Photo number={23} handleImageClick={handleImageClick} />
              <Photo number={24} handleImageClick={handleImageClick} />
              <Photo number={25} handleImageClick={handleImageClick} />
              <Photo number={26} handleImageClick={handleImageClick} />
              <Photo number={27} handleImageClick={handleImageClick} />
              <Photo number={28} handleImageClick={handleImageClick} />
              <Photo number={29} handleImageClick={handleImageClick} />
              <Photo number={30} handleImageClick={handleImageClick} />
              <Photo number={31} handleImageClick={handleImageClick} />
              <Photo number={32} handleImageClick={handleImageClick} />
              <Photo number={33} handleImageClick={handleImageClick} />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 auto-rows-min lg:gap-4">
              <Photo number={34} handleImageClick={handleImageClick} />
              <Photo number={35} handleImageClick={handleImageClick} />
              <Photo number={36} handleImageClick={handleImageClick} />
              <Photo number={37} handleImageClick={handleImageClick} />
              <Photo number={38} handleImageClick={handleImageClick} />
              <Photo number={39} handleImageClick={handleImageClick} />
              <Photo number={40} handleImageClick={handleImageClick} />
              <Photo number={41} handleImageClick={handleImageClick} />
              <Photo number={42} handleImageClick={handleImageClick} />
              <Photo number={43} handleImageClick={handleImageClick} />
              <Photo number={44} handleImageClick={handleImageClick} />
              <Photo number={45} handleImageClick={handleImageClick} />
              <Photo number={46} handleImageClick={handleImageClick} />
              <Photo number={47} handleImageClick={handleImageClick} />
              <Photo number={48} handleImageClick={handleImageClick} />
              <Photo number={49} handleImageClick={handleImageClick} />
              <Photo number={50} handleImageClick={handleImageClick} />
              <Photo number={51} handleImageClick={handleImageClick} />
              <Photo number={52} handleImageClick={handleImageClick} />
              <Photo number={53} handleImageClick={handleImageClick} />
            </div>
          </section>
          {/* //? -------------- Blender -------- */}
          <section
            className={`${
              activeButton.blender ? "block" : "hidden"
            } grid  sm:grid-cols-2 md:grid-cols-3 md:gap-5 `}
          >
            <video width="320" height="240" className="md:my-auto" controls>
              <source src="444.mp4" type="video/mp4" />
            </video>
            <video width="320" height="240" controls>
              <source src="455.mp4" type="video/mp4" />
            </video>
            <video width="320" height="240" className="md:my-auto" controls>
              <source src="466.mp4" type="video/mp4" />
            </video>
          </section>
          {/* //? -------------- Corel ----------- */}
          <section
            className={`${
              activeButton.corel ? "block" : "hidden"
            } grid  sm:grid-cols-2 md:grid-cols-3 md:gap-5 `}
          >
            <h3 className="text-lg text-white text-center">
              Working on my corel portfolio :-)
            </h3>
          </section>
          {/* //? ------------- youtube ----------- */}
          <section className={`${activeButton.youtube ? "block" : "hidden"}  `}>
            <h3 className="text-white text-lg md:text-center md:w-[60%] md:mx-auto">
              I&apos;ve been managing my YouTube channel for the past 8 months,
              where I&apos;ve gained extensive experience in video editing
              techniques such as layering, transitions, color grading, and
              special effects.
            </h3>
            <h4 className="text-white text-lg mt-3 md:text-center md:w-[60%] md:mx-auto">
              With my expertise in video editing, we have cultivated a community
              of over 1k loyal followers on our YouTube channel.
            </h4>
            <h4 className="mt-3 md:text-center md:w-[60%] md:mx-auto">
              For better understanding of my skills, Here&apos;s a link to my
              YouTube channel: <br className="sm:hidden" />{" "}
              <a
                href="https://www.youtube.com/@myVillagevlog0440"
                className="text-blue-500 underline"
              >
                My Village Vlogs
              </a>{" "}
            </h4>
          </section>
        </section>
      </section>
      {/* //! ------------------------------------ modal ----------------------- */}
      <section
        className={`${
          modalStatus ? "translate-y-0" : "translate-y-full"
        } fixed inset-0 duration-300  z-50 grid grid-rows-3 lg:grid-rows-7 `}
      >
        {/* empty section to close */}
        <section
          onClick={() => setModalStatus(false)}
          className="bg-transparent  row-span-1 lg:row-span-2"
        ></section>
        {/* content box */}
        <section className=" grid place-items-center row-span-2 bg-[#000000e3]  rounded-t-3xl lg:row-span-5">
          {/* Left button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleLeftButton()}
            className="w-10 fill-[#FFBD38] hover:fill-stone-600 duration-300 md:left-5 left-2 top-[63%] lg:left-[20%] fixed z-20"
            viewBox="0 0 24 24"
          >
            <path d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"></path>
          </svg>
          {/* Image */}
          {modalImageSrc && (
            <Image
              src={modalImageSrc}
              width={400}
              height={400}
              alt="modal Image"
              className=" w-64 md:w-96 z-10 "
            />
          )}
          {/* right button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 fill-[#FFBD38] hover:fill-stone-600 duration-300 rotate-180 lg:right-[20%] right-2 md:right-5 top-[63%] fixed z-20"
            onClick={() => handleRightButton()}
            viewBox="0 0 24 24"
          >
            <path d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"></path>
          </svg>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
