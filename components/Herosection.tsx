import Link from 'next/link'
import React from 'react'

const Herosection = () => {
  return (
    <section
    className="text-center bg-fixed text-white bg-home_hero h-[100svh] bg-center bg-cover bg-blend-multiply bg-[#1b1a1acf] grid place-items-center "
    id="home"
  >
    <section className="mb-10">
      <h1 className="  text-2xl md:text-4xl  text-blue-400">
        Hello, World
      </h1>
      <h1 className="text-[2.50rem] sm:text-5xl md:text-7xl lg:text-8xl  leading-10 font-medium mt-1 sm:mt-2 lg:mt-3">
        I am <span className="">Smit Parmar</span>{" "}
      </h1>
      {/* typewriter effect */}
      <div className="typewriter text-red-400 mt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl  font-light ">
        <h1 className="lg:pb-1">Graphic Designer</h1>
      </div>
      <section className="grid place-items-center mt-7 sm:mt-9 md:mt-16 lg:mt-20">
        <Link
          href={"#about"}
          className="  hover:outline-none hover:bg-gradient-to-r lg:font-medium from-blue-400  to-red-400 duration-300 rounded-sm outline lg:py-3 outline-2 pl-6 pr-5 py-2 group grid grid-flow-col items-end justify-center"
        >
          More about Me{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white w-5 -rotate-180 group-hover:-rotate-0 duration-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"></path>
          </svg>{" "}
        </Link>
      </section>
    </section>
  </section>
  )
}

export default Herosection