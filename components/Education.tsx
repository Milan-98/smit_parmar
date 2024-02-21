import React from 'react'

const Education = () => {
  return (
    <section className="px-3 sm:px-6 md:px-8 lg:px-12 md:py-14 py-10">
          <h2
            className="text-3xl lg:text-5xl md:text-4xl font-semibold text-white pt-24 -mt-24 "
            id="education"
          >
            Education
          </h2>
          <p className="mt-2 md:mt-3">
          Step into my academic journey where you&apos;ll find my qualifications and areas of expertise laid out on this dedicated education section, just for you.
          </p>
          {/* conatainer of  all education */}
          <section className="mt-8 sm:w-[90%] lg:w-[80%] sm:mx-auto lg:mt-14 ">
            {/*  1 */}
            <section className="grid  grid-cols-5 lg:grid-cols-4 ">
              <h3 className="font-medium place-self-center col-span-1 lg:place-self-end lg:my-auto">
                {" "}
                2023 to Now
              </h3>
              <div className="grid  place-items-center col-span-1">
                <div className="h-20 bg-white w-[1px] rounded-full"></div>
                <div className="w-5 grid place-items-center text-2xl">•</div>
                <div className="h-20 bg-white w-[1px] rounded-full"></div>
              </div>
              <section className="grid gap-1 auto-rows-min place-self-center sm:place-self-start  sm:my-auto col-span-3 lg:col-span-2">
                <h3 className="text-lg font-semibold">
                  Axis School Of Animation
                </h3>
                <h4 className="font-light">Advance Graphic Design</h4>
                <h5 className="font-light">Ahmedabad,Gujarat</h5>
              </section>
            </section>
            {/* 2 */}
            <section className="grid grid-cols-5 lg:grid-cols-4">
              <h3 className="font-medium place-self-center col-span-1 lg:place-self-end lg:my-auto ">
                {" "}
                2020 to 2023
              </h3>
              <div className="grid  place-items-center col-span-1">
                <div className="h-20 bg-white w-[1px] rounded-full"></div>
                <div className="w-5 grid place-items-center text-2xl">•</div>
                <div className="h-20 bg-white w-[1px] rounded-full"></div>
              </div>
              <section className="grid gap-1 auto-rows-min place-self-center col-span-3 lg:col-span-2 sm:place-self-start  sm:my-auto">
                <h3 className="text-lg font-semibold">
                  Bhakta Kavi Narsinh Mehta University
                </h3>
                <h4 className="font-light">BA in Rural Studies</h4>
                <h5 className="font-light">Gir Somnath, Gujarat</h5>
              </section>
            </section>
            {/* 3 */}
            <section className="grid grid-cols-5 lg:grid-cols-4">
              <h3 className="font-medium place-self-center col-span-1 lg:place-self-end lg:my-auto">
                {" "}
                2019 to 2020
              </h3>
              <div className="grid  place-items-center col-span-1">
                <div className="h-20 bg-white w-[1px] rounded-full"></div>
                <div className="w-5 grid place-items-center text-2xl">•</div>
                <div className="h-20 bg-white w-[1px] rounded-full"></div>
              </div>
              <section className="grid gap-1 auto-rows-min place-self-center lg:col-span-2 col-span-3 sm:place-self-start  sm:my-auto">
                <h3 className="text-lg font-semibold">Vinoba Vidhya Mandir</h3>
                <h4 className="font-light">Higher Secondary</h4>
                <h5 className="font-light">Gir Somnath, Gujarat</h5>
              </section>
            </section>
          </section>
        </section>
  )
}

export default Education