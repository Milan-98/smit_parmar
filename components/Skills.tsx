import React from 'react'

const Skills = () => {
  return (
    <section className="px-3 sm:px-6 md:px-8 lg:px-12 md:py-14 py-10">
          <h2
            id="skill"
            className="text-3xl lg:text-5xl md:text-4xl font-semibold text-white pt-24 -mt-24 "
          >
            Skills
          </h2>
          <p className="mt-2 md:mt-3">
          Embark on a journey through my skills and expertise, elegantly displayed here, unveiling my capabilities and adaptability across a spectrum of disciplines.
          </p>
          {/* //?----- container of all skills */}
          <section className="grid gap-6 mt-8 sm:mt-5 sm:grid-cols-2 md:mt-7 md:gap-8 ">
            {/*---------------- (1) adobe illustrator */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div>Adobe Illustrator</div>
                <div>90%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[90%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* --------------- (2) adobe photo shop */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">Adobe Photoshop</div>
                <div>85%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[85%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* -------------- (3) Corel Draw */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">CorelDraw</div>
                <div>60%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[60%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* -------------- (4) Kine master */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">Kine Master</div>
                <div>92%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[92%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* -------------- (5) Blender */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">Blender</div>
                <div>40%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[40%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* -------------- (6) Premier Pro  */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">Premier Pro</div>
                <div>55%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[55%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* -------------- (7) Sketching */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">Sketching</div>
                <div>80%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[80%] h-2 rounded-full"></div>
              </div>
            </div>
            {/* -------------- (8) Typography  */}
            <div className="grid gap-1 lg:gap-2">
              {/* name and persentage */}
              <div className="grid grid-flow-col justify-between">
                <div className="font-medium">Typography</div>
                <div>70%</div>
              </div>
              {/* skill line */}
              <div className="bg-slate-100 rounded-full h-2  shadow-inner">
                <div className="bg-gradient-to-r from-blue-400 to-red-400 w-[70%] h-2 rounded-full"></div>
              </div>
            </div>
          </section>
          <h3 className="mt-5 sm:mt-8 md:mt-6">
            In future i Would Like to expand my Portfolio with{" "}
            <span className="font-medium text-red-400">Adobe InDesign</span>,{" "}
            <span className="font-medium text-red-400">After Effect</span>,{" "}
            <span className="font-medium text-red-400">Dimensions.</span>
          </h3>
        </section>
  )
}

export default Skills