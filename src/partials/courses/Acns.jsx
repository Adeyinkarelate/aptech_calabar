import React, { useState } from "react";
import { CourseBanner } from "../pageBanners";
import ACNSImg from "../../assets/images/acns.jpg";
import { TbZoomIn } from "react-icons/tb";
import { AcnsModal1, AcnsModal2 } from "../modals/AcnsModals";
import Rosa from "react-on-scroll-animation";
import FullBrochureImg from "../../assets/images/full-brochure-acns.jpeg";

const courseAcronym = "ACNS";
const courseName = "Aptech Certified Network Specialist";

const Acns = () => {
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
  const courses = [
    {
      id: 1,
      courseImg:
        "https://res.cloudinary.com/aptechota2022/image/upload/v1654879221/aptech/images/Screenshot_183_l5u3x4.png",
    },
    {
      id: 2,
      courseImg:
        "https://res.cloudinary.com/aptechota2022/image/upload/v1654879177/aptech/images/Screenshot_175_wwdh8k.png",
    },
  ];
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner courseAcronym={courseAcronym} courseName={courseName} />

      {/* About ACNS */}
      <section className="mt-28">
        <div className="mx-auto px-4 py-12 sm:px-6 md:w-11/12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src={ACNSImg}
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-20">
              <Rosa animation={"fade-down"} once>
                <h2 className="text-3xl font-semibold capitalize sm:text-4xl">
                  About ACNS
                </h2>
              </Rosa>
              <p className="mt-2 text-justify text-gray-600 md:text-start">
                ACNS is the leading Networking Career Course from Aptech. It is
                an hardware, networking system administrator and a database
                course. In other terms, it has all the current IT technologies
                except programming and application development. This course
                offers the <b>FASTEST</b> and the <b>MOST ECONOMICAL</b> pathway
                for a degree from a U.K. Institution.
              </p>

              <p className=" mt-6 text-gray-600">
                <span className="font-jost font-semibold">Job Profile:</span>{" "}
                Network Specialist
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

        <div className="mx-auto p-5 sm:container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* First */}
            <Rosa animation={"fade-up"} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 1).courseImg}
                    alt="Course"
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-28">
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
            <Rosa animation={"fade-up"} delay={300} once>
              <div className="">
                <div className="group relative block bg-black ">
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80  transition-opacity group-hover:opacity-50"
                    src={courses.find((course) => course.id === 2).courseImg}
                    alt=""
                  />
                  <div className="grid place-content-center p-4">
                    <div className="my-28">
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
          download="Full_ACNS_Brochure"
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

      {/* Modals */}
      <AcnsModal1
        isOpen={isOpen}
        closeModal={closeModal}
        modalImg={courses.find((course) => course.id === 1).courseImg}
      />

      <AcnsModal2
        isOpen2={isOpen2}
        closeModal2={closeModal2}
        modalImg={courses.find((course) => course.id === 2).courseImg}
      />
    </div>
  );
};

export default Acns;
