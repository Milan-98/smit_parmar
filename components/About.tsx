
import React from 'react'
import ProjectCounter from './ProjectCounter'
import Image from 'next/image'

const About = () => {
  return (
    <section className=" px-3 sm:px-6 md:px-8 lg:px-12 pt-14 md:pb-14 pb-10">
    <section>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl pt-24 -mt-24 font-semibold text-white "
        id="about"
      >
        About Me
      </h2>
      <p className="mt-2 md:mt-3">
      I&apos;m a passionate graphic designer, dedicated to turning ideas into captivating visuals. With a knack for creativity and an eye for detail, I bring concepts to life, ensuring every design tells a unique story.
      </p>
    </section>
    <section className="sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:mt-6 sm:gap-5 md:mt-10 md:gap-8 lg:gap-0">
      <section className="sm:order-2 sm:col-span-2 lg:col-span-3 lg:my-auto">
        <ul className="grid grid-cols-2 my-10 sm:my-0  gap-y-3 text-lg">
          <li className="text-white font-medium ">Name :</li>
          <li>Smit Parmar</li>
          <li className="text-white font-medium ">Date Of Birth :</li>
          <li>August 12, 2003</li>
          <li className="text-white font-medium ">Address :</li>
          <li>Ahmedabad, Gujarat, India</li>
          <li className="text-white font-medium ">Email :</li>
          <li>
            {" "}
            <a href="mailto:parmarsmit505@gmail.com">
              parmarsmit505@gmail.com
            </a>
          </li>
          <li className="text-white font-medium ">Phone :</li>
          <li>
            <a href="tel:91 6354127241">+91 63541 27241</a>
          </li>
        </ul>
        {/* //?------------ counter ---- */}
        <ProjectCounter/>
      </section>
      <Image
        src={"/smit.webp"}
        height={300}
        width={400}
        alt="smit parmar photo"
        className="mt-10 sm:mt-0 sm:order-1 rounded-sm sm:col-span-1 lg:col-span-2"
      />
    </section>
  </section>
  )
}

export default About