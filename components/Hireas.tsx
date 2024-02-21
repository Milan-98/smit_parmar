import React from 'react'

const Hireas = () => {
  return (
    <section className="px-3 sm:px-6 md:px-8 lg:px-12 md:py-14 py-10">
    <h2
      className="text-3xl lg:text-5xl md:text-4xl font-semibold text-white pt-24 -mt-24 "
      id="ready"
    >
      Ready to hire as
    </h2>
    <p className="mt-2 md:mt-3">
    With the skills and expertise I possess, I am confident in my ability to meet the demands of the job described below.
    </p>
    {/* container of all positions */}
    <section className="grid gap-6 grid-cols mt-8 px-2 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
      {/* 1 graphic designer */}
      <section className="grid place-items-center gap-3 bg-[#1a1a1a]  p-5 rounded-sm group hover:bg-[#FFBD38] duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14  stroke-[#FFBD38] duration-300 group-hover:stroke-white"
          viewBox="0 0 48 48"
        >
          <g fill="none" strokeLinejoin="round" strokeWidth="4">
            <path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"></path>
            <path d="M44 18H18v26h26z"></path>
          </g>
        </svg>
        <div className="font-light text-white group-hover:text-black duration-300 text-center">
          {" "}
          Graphic Designer
          <hr className="border-[.1px] border-[#FFBD38] duration-300 group-hover:border-white mx-4 mt-2" />
        </div>
      </section>
      {/* 2 video editor */}
      <section className="grid place-items-center gap-3 bg-[#1a1a1a]  p-5 rounded-sm group hover:bg-[#FFBD38] duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14  fill-[#FFBD38] duration-300 group-hover:fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z"></path>
        </svg>
        <div className="font-light text-white group-hover:text-black duration-300">
          {" "}
          Video Editor
          <hr className="border-[.1px] border-[#FFBD38] duration-300 group-hover:border-white mx-4 mt-2" />
        </div>
      </section>
      {/* Photo Editor */}
      <section className="grid place-items-center gap-3 bg-[#1a1a1a]  p-5 rounded-sm group hover:bg-[#FFBD38] duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14  fill-[#FFBD38] duration-300 group-hover:fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M5 21v-2H1V4h22v15h-4v2zm-2-4h18V6H3zm2-2h14l-4.5-6l-3.5 4.5l-2.5-3zm-2 2V6z"></path>
        </svg>
        <div className="font-light text-white group-hover:text-black duration-300">
          {" "}
          Photo Editor
          <hr className="border-[.1px] border-[#FFBD38] duration-300 group-hover:border-white mx-4 mt-2" />
        </div>
      </section>
      {/* illustrator */}
      <section className="grid place-items-center gap-3 bg-[#1a1a1a]  p-5 rounded-sm group hover:bg-[#FFBD38] duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14  fill-[#FFBD38] duration-300 group-hover:fill-white"
          viewBox="0 0 24 24"
        >
          <path d="m10.401 10.55l-.572 1.826h1.903l-.583-1.826c-.116-.365-.217-.766-.31-1.133a60.256 60.256 0 0 0-.064-.253h-.022c-.038.147-.075.304-.114.465c-.074.31-.151.632-.238.921"></path>
          <path
            fillRule="evenodd"
            d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082m9.162 7.061V15.5h-1.364v-5.357zm-1.44-1.496c0-.418.307-.737.758-.737c.463 0 .749.319.76.737c0 .407-.298.726-.77.726c-.451 0-.748-.319-.748-.726M12.634 15.5l-.671-2.101H9.609L8.971 15.5H7.574L9.95 8.086h1.727l2.409 7.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="font-light text-white group-hover:text-black duration-300">
          {" "}
          Illustrator
          <hr className="border-[.1px] border-[#FFBD38] duration-300 group-hover:border-white mx-4 mt-2" />
        </div>
      </section>
      {/* Sketch artist */}
      <section className="grid place-items-center gap-3 bg-[#1a1a1a]  p-5 rounded-sm group hover:bg-[#FFBD38] duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10  fill-[#FFBD38] duration-300 group-hover:fill-white"
          viewBox="0 0 482 512"
        >
          <path d="m55.387 305.8l59.033 180.103l-13.105 3.738l4.33 15.18l13.695-3.906l3.631 11.08l15.001-4.918l-3.44-10.495l281.663-80.336l-1.014 8.166l15.665 1.946l1.84-14.816l16.706-4.765l-4.33-15.18l-10.262 2.927l30.343-244.288l6.865 5.345l9.698-12.456l-14.297-11.132l2.337-18.817l-15.665-1.946l-1.176 9.47L332.11 26.646l4.128-.518l-1.965-15.663l-19.76 2.48L297.88-.005l-9.698 12.455l4.203 3.272L27.523 48.964l-2.975-17.41l-15.562 2.659l2.857 16.719L0 52.418l1.966 15.663l12.539-1.573zM273.5 81.534l-20.72 3.092l-12.38-12.259l-11.108 11.217l3.99 3.952l-157.756 23.541l-9.945-21.422L299.956 56.65l104.698 80.645l-83.182 15.352l-54.684-54.151l9.043-1.35zM58.633 74.69l-6.019-12.965l232.997-29.243l-6.342 8.234l3.19 2.457zM321.83 53.57l5.455-.768l-1.567-11.128L440.12 130.75l-14.594 2.694zm-1.108-15.786l-16.39 2.308l-11.119-8.565l16.77-2.104zM40.35 63.264l-3.642 1.69l5.587 12.036l-9.75 1.373l-2.362-13.823zm377.96 335.964L129.613 481.57L70.756 301.982L35.206 93.93l14.037-1.977l10.006 21.551l-16.737 2.498l2.33 15.614l21.337-3.184l6.189 13.33l14.319-6.647l-4.23-9.112l164.833-24.598l55.27 54.732l-13.98 2.58l2.866 15.524l24.78-4.573l10.753 10.648l11.108-11.217l-2.95-2.92l86.33-15.933l13.562 10.447l9.635-12.507l-2.326-1.792l6.835-1.261l-1.58-8.564l3.046 2.372zM335.321 228.81l-16.885 3.608l-51.247-61.527l9.368-1.718l-2.846-15.528l-18.119 3.323l-10.696-12.842l-12.13 10.103l5.004 6.007l-149.74 27.457l-6.627-15.786l-14.556 6.11l5.285 12.591L55.27 193.7l2.847 15.528l20.27-3.717l11.993 28.57l-17.602 3.667l3.22 15.454l20.606-4.293l6.026 14.355l14.556-6.11l-4.838-11.525l74.303-15.48l16.626 26.872l-14.507 3.1l3.298 15.437l20.03-4.28l9.233 14.922l13.425-8.306l-6.26-10.119l83.914-17.927l9.55 11.466l12.13-10.103l-4.239-5.09l8.77-1.873zm-115.647 24.71l-16.579-26.794l11.825-2.464l-3.22-15.454l-17.443 3.633l-8.176-13.215l-13.425 8.307l5.157 8.334l-71.69 14.936l-11.838-28.205l155.082-28.437l51.628 61.985zm21.624 82.16l-14.697 3.652l-17.884-31.273l13.31-3.43l-3.94-15.287l-17.495 4.51l-6.895-12.058l-13.704 7.838l4.749 8.304l-65.694 16.932l-5.397-14.753l-14.826 5.425l4.861 13.287l-18.598 4.793l3.939 15.287l20.11-5.183l11.668 31.893l-15.948 3.962l3.807 15.32l17.596-4.372l4.138 11.313l14.826-5.425l-3.555-9.716l77.152-19.169l6.723 11.756l13.704-7.838l-4.503-7.874l10.36-2.574zm-105.084 26.108l-11.716-32.023l68.369-17.62l17.81 31.143z"></path>
        </svg>
        <div className="font-light text-white group-hover:text-black duration-300">
          {" "}
          Sketch artist
          <hr className="border-[.1px] border-[#FFBD38] duration-300 group-hover:border-white mx-4 mt-2" />
        </div>
      </section>
      {/* Craft Designer */}
      <section className="grid place-items-center gap-3 bg-[#1a1a1a]  p-5 rounded-sm group hover:bg-[#FFBD38] duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14  stroke-[#FFBD38] duration-300 group-hover:stroke-white"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0-8-8a8 8 0 0 0 8-8M4 12h8m0-8v16"
          ></path>
        </svg>
        <div className="font-light text-white group-hover:text-black duration-300">
          {" "}
          Craft Designer
          <hr className="border-[.1px] border-[#FFBD38] duration-300 group-hover:border-white mx-4 mt-2" />
        </div>
      </section>
    </section>
  </section>
  )
}

export default Hireas