import React from "react";
import { IntroBanner } from "../partials/pageBanners";
import Rosa from "react-on-scroll-animation";
import SchoolsBanner from "../assets/images/schools-banner.png";

const About = () => {
  return (
    <div>
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="About"
        bannerTitleYellow="Us"
        bannerText="All About Aptech Computer Education Calabar"
      />

      {/* Feature 1 */}
      <div className="mx-auto px-4 py-16 sm:max-w-xl  md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div>
            <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-aptechRed">
              Aptech Calabar
            </p>
          </div>
          <h2 className="font-sans mb-6 max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Prepare</span>
            </span>{" "}
            for your career with digital skills training at Aptech Calabar.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Aptech Computer Education Calabar, came into being when Hansfelz
            Technology Limited acquired the ICT Educational franchise from
            Aptech Computer Education, Mumbai India.
          </p>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="h-64 w-full  animate-pulse rounded object-cover shadow-lg md:h-80 lg:h-96"
               src="https://res.cloudinary.com/madflows/image/upload/v1651157237/apcalabar_ibikwf.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ========= */}

      {/* Feature 2 */}
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                src="https://res.cloudinary.com/madflows/image/upload/v1651142871/WhatsApp_Image_2022-04-28_at_10.18.04_AM_1_rk3c9t.jpg"
                alt="Business Team"
              />
            </div>

            <div className="lg:py-16">
              <Rosa animation={"fade-down"} once>
                <h2 className="text-2xl font-semibold capitalize text-aptechRed sm:text-3xl">
                  Aptech Computer Education
                </h2>
              </Rosa>
              <p className="mt-2 text-justify text-gray-700">
                Established in 1986, Aptech is a global leader in education,
                having trained over 7 million students in 40 countries across 5
                continents. With an updated curriculum, certified faculty and
                world-class infrastructure, Aptech has consistently offered
                industry-relevant training and education for over 35 years.
                Aptech has played an integral role in enhancing minds and
                building careers of students across the world. A number of
                international accolades and awards are a testament to this
                excellence in education. .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}

      {/* Feature 3 */}
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-0 relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                className="pointer-events-none absolute inset-0 h-full w-full  object-cover"
                src="https://res.cloudinary.com/madflows/image/upload/v1651142870/WhatsApp_Image_2022-04-28_at_11.08.52_AM_uwbqmh.jpg"
                alt="Students"
              />
            </div>

            <div className="lg:py-12">
              <Rosa animation={"fade-down"} once>
                <h2 className="text-2xl font-semibold text-aptechRed sm:text-3xl">
                  Our Alliances
                </h2>
              </Rosa>
              <p className="mt-2 text-justify text-gray-700">
                <span className="text-justify font-bold">
                  Hensfelz inculcates strict adherence to policies, procedures
                  and high standards on every task whose overall effect will
                  result to quality and guarantee job satisfaction at final
                  delivery point.
                </span>
                Our students are trained to compete with other Aptech Centers
                (about 1,400 centers worldwide) as well as International
                students/graduates from other elite Universities.
              </p>
              <p className="mt-2 text-justify text-gray-700">
                Aptech Computer Education, Calabar have alliance with Middlesex
                University as well as Portsmouth University, London, United
                Kingdom. To expatiate further, our students after 24 months
                programme in Advanced Diploma in Software Engineering (ADSE)
                will merit a full credit transfer to either Middlesex or
                Portsmouth Universities in the UK to start in the final year and
                after 12 months, graduates in Software engineering with a
                Bachelor of Science (BSC).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      <div className=" mt-20">
        <h6 className="text-center text-3xl font-medium">
          In Collaboration with{" "}
        </h6>
        <img
          src={SchoolsBanner}
          alt="Schools Banner"
          className="pointer-events-none mx-auto w-fit"
        />
      </div>
    </div>
  );
};

export default About;
