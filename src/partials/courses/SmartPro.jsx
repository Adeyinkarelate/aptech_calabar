import React from "react";
import { CourseBanner } from "../pageBanners";
import { BsDash } from "react-icons/bs";
import Rosa from "react-on-scroll-animation";

import FlutterImg from "../../assets/images/smart-pro-flutter.png";
import EthicalHackingImg from "../../assets/images/smart-pro-ethical-hacking.jpg";
import WebWithPythonImg from "../../assets/images/smart-pro-django.jpg";
import WebWithPhpImg from "../../assets/images/smart-pro-php.png";
import DataScienceImg from "../../assets/images/smart-pro-data-science.jpg";

const courseAcronym = "Smart Pro";
const courseName = "Aptech Smart Professional Courses";

const SmartPro = () => {
  const courses = [
    {
      id: 1,
      name: "Flutter",
      image: FlutterImg,
      description:
        "Flutter is defined as a Google developer tool for building beautiful, natively compiled applications for mobile (Android, iOS ) desktop (Linux, Mac, Windows, Google Fuchsia) and the web from a single codebase.",
      job_profile: "(Android, iOS, Desktop) application developer",
      order: "last",
    },
    {
      id: 2,
      name: "Ethical Hacking",
      image: EthicalHackingImg,
      description:
        "This course provides a comprehensive ethical hacking and offensive network security-training program to meet the standards of highly skilled security professionals.",
      job_profile: "Ethical Hacker",
      order: "0",
    },
    {
      id: 3,
      name: "Web Application with Python",
      image: WebWithPythonImg,
      description:
        "This course provides you with the knowledge of both frontend skills and Django. Django is a widely-used Python web application framework with a 'batteries-included' philosophy. It is highly recommended as a starting place for new Python web developers",
      job_profile: "Fullstack Python Developer",
      order: "last",
    },
    {
      id: 4,
      name: "Web Application with PHP",
      image: WebWithPhpImg,
      description:
        "This course provides you with the knowledge of both frontend skills and PHP. A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
      job_profile: "Fullstack PHP Developer",
      order: "0",
    },
    {
      id: 5,
      name: "Data Science",
      image: DataScienceImg,
      description:
        "Data Science has developed at an astoning speed in just the past few years. We are increasingly overwhelmed by big data from everywhere in our lives. This course has been programmed by us to make you a job ready data scientist.",
      job_profile: "Data Scientist",
      order: "last",
    },
  ];
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner courseAcronym={courseAcronym} courseName={courseName} />

      <div className="py-10"></div>
      {/* Smart Pro Courses */}

      {courses.map((course) => (
        <section key={course.id} className="mt-16">
          <div className="mx-auto px-4 py-12 sm:px-6 md:w-11/12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div
                className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-${course.order} lg:h-full`}
              >
                <img
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover brightness-90"
                  src={course.image}
                  alt="Man using a computer"
                />
              </div>

              <div className="lg:py-16">
                <Rosa animation={"fade-up"} once>
                  <h2 className="text-2xl font-semibold capitalize sm:text-3xl">
                    Smart Professional
                    <BsDash className="mb-1 inline text-aptechRed" />
                    {course.name}
                  </h2>
                </Rosa>

                <p className="mt-2 text-justify text-gray-600 md:text-start">
                  {course.description}
                </p>

                <p className=" mt-4 text-gray-600">
                  <span className="font-jost font-semibold">Job Profile:</span>{" "}
                  {course.job_profile}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

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
    </div>
  );
};

export default SmartPro;
