import React from "react";
import { IntroBanner } from "../partials/pageBanners";
import { Link } from "react-router-dom";

import coursesAcnsImg from "../assets/images/course-acns.jpg";
import coursesAdseImg from "../assets/images/course-adse.jpg";
import coursesSmartProImg from "../assets/images/course-smartpro.jpg";
import FullShortTimeBrochureImg from "../assets/images/full-brochure-short-time.jpeg";
import Rosa from "react-on-scroll-animation";
// Short Time Course Images
import MSOfficeImg from "../assets/images/short-time/short-time-ms-office.png";
import AdvancedExcelImg from "../assets/images/short-time/short-time-excel.jpg";
import ResponsiveWebImg from "../assets/images/short-time/short-time-resp-web.jpg";
import PythonProgImg from "../assets/images/short-time/short-time-python-prog.jpg";
import OrcaleDbImg from "../assets/images/short-time/short-time-oracle-db.jpg";
import AutoCADImg from "../assets/images/short-time/short-time-autocad.png";
import GraphicsImg from "../assets/images/short-time/short-time-graphics.jpg";
import DigitalMarkImg from "../assets/images/short-time/short-time-digital-m.jpg";
import LinuxImg from "../assets/images/short-time/short-time-linux.jpg";
import C_ProgrammingImg from "../assets/images/short-time/short-time-c-sharp.jpg";
import JavaProgImg from "../assets/images/short-time/short-time-java.jpg";
import AndroidAppDevImg from "../assets/images/short-time/short-time-android.jpg";

const Courses = () => {
  const popularCourses = [
    {
      id: 1,
      title: "aptech ACNS career courses",
      img: coursesAcnsImg,
      delay: 100,
      animation: "fade-up",
      link: "acns",
    },
    {
      id: 2,
      title: "advanced diploma in software engineering (ADSE)",
      img: coursesAdseImg,
      delay: 400,
      animation: "fade-up",
      link: "adse",
    },
    {
      id: 3,
      title: "aptech smart professional courses",
      img: coursesSmartProImg,
      delay: 800,
      animation: "fade-up",
      link: "smart-pro",
    },
  ];
  const shortTimeCourses = [
    {
      id: 1,
      title: "MS Office 2019 Office Automation",
      img: MSOfficeImg,
      duration: "1 Month",
      order: "last",
      animation: "fade-right",
    },
    {
      id: 2,
      title: "Advanced Excel 2019",
      img: AdvancedExcelImg,
      duration: "1 Month",
      order: "0",
      animation: "fade-left",
    },
    {
      id: 3,
      title: "Responsive Web Development",
      img: ResponsiveWebImg,
      duration: "4 Months",
      order: "last",
      animation: "fade-right",
    },
    {
      id: 4,
      title: "Python Programming",
      img: PythonProgImg,
      duration: "3 Months",
      order: "0",
      animation: "fade-left",
    },
    {
      id: 5,
      title: "Oracle Database 11g, 12c (OCA), (OCP)",
      img: OrcaleDbImg,
      duration: "2/2 Months",
      order: "last",
      animation: "fade-right",
    },
    {
      id: 6,
      title: "AUTOCAD (Autodesk)",
      img: AutoCADImg,
      duration: "1 Month",
      order: "0",
      animation: "fade-left",
    },
    {
      id: 7,
      title: "Graphics Design",
      img: GraphicsImg,
      duration: "2 Months",
      order: "last",
      animation: "fade-right",
    },
    {
      id: 8,
      title: "Digital Marketing",
      img: DigitalMarkImg,
      duration: "2 Months",
      order: "0",
      animation: "fade-left",
    },
    {
      id: 9,
      title: "Linux",
      img: LinuxImg,
      duration: "1 Month",
      order: "last",
      animation: "fade-right",
    },
    {
      id: 10,
      title: "Programming in C++/C#",
      img: C_ProgrammingImg,
      duration: "2 Months",
      order: "0",
      animation: "fade-left",
    },
    {
      id: 11,
      title: "Java Application Development (EE)",
      img: JavaProgImg,
      duration: "2 Months",
      order: "last",
      animation: "fade-right",
    },
    {
      id: 12,
      title: "Android App Development",
      img: AndroidAppDevImg,
      duration: "2 Months",
      order: "0",
      animation: "fade-left",
    },
  ];
  return (
    <div>
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="Our "
        bannerTitleYellow="Courses"
        bannerText="Check out the courses and programs we offer and select the one best suited for you..."
      />

      {/* Popular Courses */}
      <section className="mt-16 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <Rosa animation={"fade-down"} once>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-medium capitalize sm:text-4xl">
                most chosen courses
              </h2>

              <p className="mt-1 text-gray-600">
                A few of our most popular courses
              </p>
            </div>
          </Rosa>
          <div className="container mx-auto mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <Rosa
                animation={course.animation}
                delay={course.delay}
                once={"false"}
              >
                <div
                  key={course.id}
                  className="relative block h-[45vh] overflow-hidden rounded-md bg-cover bg-center bg-no-repeat md:h-[60vh] lg:h-[40vh]"
                  style={{
                    backgroundImage: `linear-gradient(62deg,rgba(0, 0, 0, 0.2) 50%,rgba(0, 0, 0, 0.2) 50%),url(${course.img})`,
                  }}
                >
                  <Link
                    reloadDocument
                    to={`/courses/${course.link}`}
                    className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1.5 h-4 w-4 font-bold text-aptechOrange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>

                  <div className="relative h-full bg-black bg-opacity-40 p-8 pt-40 text-center text-white">
                    <h5 className="text-2xl font-semibold capitalize">
                      {course.title}
                    </h5>
                    {/* <p className="text-sm">Italy</p> */}
                  </div>
                </div>
              </Rosa>
            ))}
          </div>
        </div>
      </section>
      {/* Short Time Courses */}
      <section className=" text-gray-900">
        <div className="mx-auto mt-20 max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <Rosa animation={"fade-down"} once>
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-medium capitalize sm:text-4xl">
                short time courses
              </h2>

              <p className="mt-1 text-gray-600">
                Aptech Short Time Career Courses
              </p>
            </div>
          </Rosa>
        </div>

        <div className="container mx-auto p-4">
          {shortTimeCourses.map((course) => (
            <Rosa animation={course.animation} delay={100} once>
              <div
                key={course.id}
                className="mx-auto my-10 rounded-lg bg-gray-50 px-4 py-6 sm:px-6 lg:px-8"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
                  <div
                    className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-${course.order} lg:h-full`}
                  >
                    <img
                      className="pointer-events-none absolute inset-0 h-full w-full object-contain"
                      src={course.img}
                      alt="Man using a computer"
                    />
                  </div>

                  <div className="sm:col-span-2  lg:py-12">
                    <h2 className="text-2xl font-medium sm:text-3xl">
                      {course.title}
                    </h2>

                    <p className=" mt-4 text-gray-600">
                      <span className="font-jost font-semibold">Duration:</span>
                      {course.duration}
                    </p>
                  </div>
                </div>
              </div>
            </Rosa>
          ))}
        </div>
      </section>

      <p className="text-center text-lg">And many more courses ....</p>

      {/* Download Course Brochure */}
      <div className="mt-4 text-center">
        <a
          className="download-btn mt-5 inline-flex items-center rounded bg-green-700 px-6 py-3 text-white hover:shadow-md"
          href={FullShortTimeBrochureImg}
          target="_blank"
          rel="noopener noreferrer"
          download="Full_Short_Time_Brochure"
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

      <div className="mt-2 text-center">
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
    </div>
  );
};

export default Courses;
