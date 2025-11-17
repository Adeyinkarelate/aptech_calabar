import React, { useState } from "react";
import { CourseBanner } from "../pageBanners";
import ADSEImg from "../../assets/images/adse.jpg";
import { TbZoomIn } from "react-icons/tb";
import {
  AdseModal1,
  AdseModal2,
  AdseModal3,
  AdseModal4,
  AdseModal5,
  AdseModal6,
  AdseModal7,
  AdseModal8,
  AdseModal9,
  AdseModal10,
  AdseModal11,
} from "../modals/AdseModals";
import Rosa from "react-on-scroll-animation";
import FullBrochureImg from "../../assets/images/adse-courses/full-brochure-adse.jpg";

import Sem1Img from "../../assets/images/adse-courses/sem1.jpg";
import Sem2Img from "../../assets/images/adse-courses/sem2.jpg";
import Sem3aImg from "../../assets/images/adse-courses/sem3a.jpg";
import Sem3bImg from "../../assets/images/adse-courses/sem3b.jpg";
import Sem4aImg from "../../assets/images/adse-courses/sem4a.jpg";
import Sem4bImg from "../../assets/images/adse-courses/sem4b.jpg";
import Sem4cImg from "../../assets/images/adse-courses/sem4c.jpg";
import Sem4dImg from "../../assets/images/adse-courses/sem4d.jpg";
import Sem4eImg from "../../assets/images/adse-courses/sem4e.jpg";
import Sem4fImg from "../../assets/images/adse-courses/sem4f.jpg";
import Sem4gImg from "../../assets/images/adse-courses/sem4g.jpg";

const courseAcronym = "ADSE";
const courseName = "Advanced Diploma in Software Engineering";
const Adse = () => {
  // Modal 1
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  // Modal 2
  const [isOpen2, setIsOpen2] = useState(false);
  const showModal2 = () => {
    setIsOpen2(true);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };
  // Modal 3
  const [isOpen3, setIsOpen3] = useState(false);
  const showModal3 = () => {
    setIsOpen3(true);
  };
  const closeModal3 = () => {
    setIsOpen3(false);
  };
  // Modal 4
  const [isOpen4, setIsOpen4] = useState(false);
  const showModal4 = () => {
    setIsOpen4(true);
  };
  const closeModal4 = () => {
    setIsOpen4(false);
  };
  // Modal 5
  const [isOpen5, setIsOpen5] = useState(false);
  const showModal5 = () => {
    setIsOpen5(true);
  };
  const closeModal5 = () => {
    setIsOpen5(false);
  };
  // Modal 6
  const [isOpen6, setIsOpen6] = useState(false);
  const showModal6 = () => {
    setIsOpen6(true);
  };
  const closeModal6 = () => {
    setIsOpen6(false);
  };
  // Modal 7
  const [isOpen7, setIsOpen7] = useState(false);
  const showModal7 = () => {
    setIsOpen7(true);
  };
  const closeModal7 = () => {
    setIsOpen7(false);
  };
  // Modal 8
  const [isOpen8, setIsOpen8] = useState(false);
  const showModal8 = () => {
    setIsOpen8(true);
  };
  const closeModal8 = () => {
    setIsOpen8(false);
  };
  // Modal 9
  const [isOpen9, setIsOpen9] = useState(false);
  const showModal9 = () => {
    setIsOpen9(true);
  };
  const closeModal9 = () => {
    setIsOpen9(false);
  };
  // Modal 10
  const [isOpen10, setIsOpen10] = useState(false);
  const showModal10 = () => {
    setIsOpen10(true);
  };
  const closeModal10 = () => {
    setIsOpen10(false);
  };
  // Modal 11
  const [isOpen11, setIsOpen11] = useState(false);
  const showModal11 = () => {
    setIsOpen11(true);
  };
  const closeModal11 = () => {
    setIsOpen11(false);
  };

  const courses = [
    {
      id: 1,
      courseImg: Sem1Img,
    },
    {
      id: 2,
      courseImg: Sem2Img,
    },
    {
      id: 3,
      courseImg: Sem3aImg,
    },
    {
      id: 4,
      courseImg: Sem3bImg,
    },
    {
      id: 5,
      courseImg: Sem4aImg,
    },
    {
      id: 6,
      courseImg: Sem4bImg,
    },
    {
      id: 7,
      courseImg: Sem4cImg,
    },
    {
      id: 8,
      courseImg: Sem4dImg,
    },
    {
      id: 9,
      courseImg: Sem4eImg,
    },
    {
      id: 10,
      courseImg: Sem4fImg,
    },
    {
      id: 11,
      courseImg: Sem4gImg,
    },
  ];

  return (
    <div>
      {/* Course Banner */}
      <CourseBanner courseAcronym={courseAcronym} courseName={courseName} />

      {/* About ADSE */}
      <section className="mt-28">
        <div className="mx-auto px-4 py-12 sm:px-6 md:w-11/12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={ADSEImg}
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-16">
              <Rosa animation={"fade-down"} once>
                <h2 className="text-3xl font-semibold capitalize sm:text-4xl">
                  About ADSE
                </h2>
              </Rosa>
              <p className="mt-2 text-justify text-gray-600 md:text-start">
                ADSE is a two year Diploma Programmer designed to make you an
                industry ready professional in software engineering field. ADSE
                gives you the professional edge to start your career in the
                global IT industry. You get to study abroad with our prestigious
                educational alliances. Make the most out of this opportunity.
              </p>

              <p className=" mt-6 text-gray-600">
                <span className="font-jost font-semibold">Job Profile:</span>{" "}
                Software Engineer
              </p>
            </div>
          </div>
        </div>

        <div className="mt-1 text-center">
          <a
            className="feature-btn mt-5 inline-flex items-center rounded bg-aptechRed px-6 py-3 text-white hover:shadow-md"
            href="/contact"
          >
            <span className="text-sm font-semibold">Enroll Now</span>

            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Course Structure */}
      <section className="mt-12 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <Rosa animation={"fade-up"} once>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-medium capitalize sm:text-3xl">
                course structure
              </h2>

              <p className="mt-1 text-gray-600">
                A preview of what you'll gain
              </p>
            </div>
          </Rosa>
        </div>

        <div className="mx-auto max-w-screen-lg p-5">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* First */}
            <Rosa animation={"fade-up"} delay={0} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 1).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Second */}
            <Rosa animation={"fade-up"} delay={100} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 1).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal2}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Third */}
            <Rosa animation={"fade-up"} delay={200} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 3).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal3}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Fourth */}
            <Rosa animation={"fade-up"} delay={300} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 4).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal4}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Fivth */}
            <Rosa animation={"fade-up"} delay={400} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 5).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal5}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Sixth */}
            <Rosa animation={"fade-up"} delay={500} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 6).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal6}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Seventh */}
            <Rosa animation={"fade-up"} delay={600} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 7).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal7}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Eigth */}
            <Rosa animation={"fade-up"} delay={700} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 8).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal8}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Ninth */}
            <Rosa animation={"fade-up"} delay={800} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 9).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal9}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Tenth */}
            <Rosa animation={"fade-up"} delay={900} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 10).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal10}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>

            {/* Eleventh */}
            <Rosa animation={"fade-up"} delay={1000} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 11).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-10">
                      <div className="transform opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                        <p
                          className="cursor-pointer text-sm text-white"
                          onClick={showModal11}
                        >
                          <TbZoomIn className="h-8 w-8" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rosa>
          </div>
        </div>
      </section>

      {/* Download Course Brochure */}
      <div className="mt-4 text-center">
        <a
          className="download-btn mt-5 inline-flex items-center rounded bg-green-700 px-6 py-3 text-white hover:shadow-md"
          href={FullBrochureImg}
          target="_blank"
          rel="noopener noreferrer"
          download="Full_ADSE_Brochure"
        >
          <span className="text-sm font-semibold">Download Full Brochure</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
      <br />

      {/* Modals */}
      <AdseModal1
        isOpen={isOpen}
        closeModal={closeModal}
        modalImg={courses.find((course) => course.id === 1).courseImg}
      />

      <AdseModal2
        isOpen2={isOpen2}
        closeModal2={closeModal2}
        modalImg={courses.find((course) => course.id === 2).courseImg}
      />

      <AdseModal3
        isOpen3={isOpen3}
        closeModal3={closeModal3}
        modalImg={courses.find((course) => course.id === 3).courseImg}
      />

      <AdseModal4
        isOpen4={isOpen4}
        closeModal4={closeModal4}
        modalImg={courses.find((course) => course.id === 4).courseImg}
      />

      <AdseModal5
        isOpen5={isOpen5}
        closeModal5={closeModal5}
        modalImg={courses.find((course) => course.id === 5).courseImg}
      />

      <AdseModal6
        isOpen6={isOpen6}
        closeModal6={closeModal6}
        modalImg={courses.find((course) => course.id === 6).courseImg}
      />

      <AdseModal7
        isOpen7={isOpen7}
        closeModal7={closeModal7}
        modalImg={courses.find((course) => course.id === 7).courseImg}
      />

      <AdseModal8
        isOpen8={isOpen8}
        closeModal8={closeModal8}
        modalImg={courses.find((course) => course.id === 8).courseImg}
      />

      <AdseModal9
        isOpen9={isOpen9}
        closeModal9={closeModal9}
        modalImg={courses.find((course) => course.id === 9).courseImg}
      />

      <AdseModal10
        isOpen10={isOpen10}
        closeModal10={closeModal10}
        modalImg={courses.find((course) => course.id === 10).courseImg}
      />

      <AdseModal11
        isOpen11={isOpen11}
        closeModal11={closeModal11}
        modalImg={courses.find((course) => course.id === 11).courseImg}
      />
    </div>
  );
};

export default Adse;
