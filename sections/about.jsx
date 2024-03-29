"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserCheck, FaBriefcase } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=' shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <FaUserCheck /> About Me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          {/* Person Image */}
          <Image
            alt='about image'
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src='/images/shif_images/Shifra_Italy.jpeg'
            width={350}
          />
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#0c11ab] dark:text-[#0c11ab]'>
              Shifra Isaacs
            </p>
            {/* Profil Name */}
            <p className='text-center md:text-left text-black-600 mt-1'>
              Data Scientist | Data Analyst | Technical Writer | Educator
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-5'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#0c11ab] dark:text-[#0c11ab]'>
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-black'>
                  San Francisco Bay Area, USA{" "}
                </p>
              </div>

              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#0c11ab] dark:text-[#0c11ab]'>
                    Experience
                  </p>
                  <p>
                    <FaBriefcase />
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-black'>
                  3+ Years{" "}
                </p>
              </div>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-black-600 dark:text-black-300'>
              I'm a data professional looking to make a positive impact via data science, data analytics, and education.
              My work experience includes client-facing data science at Annalect and JPMorgan Chase, technical writing at Crash Course and DataLemur, and analytics reporting at Prose.
              </p>
              <br></br>
              <p>
              When I'm not programming, you'll find me going to shows, writing, cooking, spending time with friends, or planning my next trip. Check out my projects and writing to learn more about my work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
