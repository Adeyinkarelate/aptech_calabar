import React from "react";
import { CgArrowLongRightC } from "react-icons/cg";
import { Link } from "react-router-dom";

export const IntroBanner = ({ bannerTitle, bannerTitleYellow, bannerText }) => {
  return (
    <div className="intro-banner grid h-[75vh] content-center bg-gray-100 bg-center text-center text-white md:bg-right-top">
      <h1 className="animate__animated animate__fadeInUp text-3xl font-medium sm:text-4xl">
        {bannerTitle}{" "}
        <span className="font-jost font-medium text-aptechOrange">
          {bannerTitleYellow}
        </span>
      </h1>
      <p className="mx-auto w-5/6 text-lg text-gray-200">{bannerText}</p>
    </div>
  );
};

export const CourseBanner = ({ courseAcronym, courseName }) => {
  return (
    <div className="intro-banner grid h-[75vh] content-center bg-gray-100 bg-center text-center text-white md:bg-right-top">
      <h1 className="text-3xl font-medium sm:text-4xl ">
        <Link
          to="/courses"
          className="font-jost hover:underline hover:underline-offset-2"
        >
          Our Courses
        </Link>{" "}
        <CgArrowLongRightC className="inline text-white" />{" "}
        <span className="font-jost font-medium text-aptechOrange">
          {courseAcronym}
        </span>
      </h1>
      <p className="mx-auto w-5/6 text-lg text-gray-200">{courseName}</p>
    </div>
  );
};
