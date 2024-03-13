"use client";
import React, { useEffect, useRef, useState } from "react";

const ProjectCounter = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const valueRef = useRef(null);
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setAnimatedValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const valueObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(0, 60, 4000);
        }
      });
    });

    if (valueRef.current) {
      valueObserver.observe(valueRef.current);
    }

    return () => {
      if (valueRef.current) {
        valueObserver.unobserve(valueRef.current);
      }
    };
  }, []);
  return (
    <section className="grid gap-5 sm:grid-flow-col sm:mt-5 sm:justify-start md:mt-8 lg:mt-12 lg:gap-10">
      <div className="flex justify-center items-center gap-2  border-[.8px] rounded-sm sm:w-56  py-2  ">
        <div
          id="value"
          ref={valueRef}
          className=" text-xl text-red-400 font-semibold"
        >
          {animatedValue}+
        </div>
        <div>Projects Completed</div>
      </div>
      <a
        className=" border-[.8px]  hover:bg-blue-500 sm:w-44  hover:text-white hover:border-blue-500 font-medium duration-500 px-4 text-center rounded-sm py-2"
        href="/resume.pdf"
        download="Smit_Parmar's_Resume.pdf"
      >
        Download Resume
      </a>
    </section>
  );
};

export default ProjectCounter;
