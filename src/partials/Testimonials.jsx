import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import student1Img from "../assets/images/students/student1.jpeg";
import student2Img from "../assets/images/students/student2.jpeg";
import student3Img from "../assets/images/students/student3.jpg";
import student4Img from "../assets/images/students/student4.jpeg";
import student5Img from "../assets/images/students/student5.jpeg";
import student6Img from "../assets/images/students/student6.jpeg";

const Testimonials = () => {
  const students = [
    {
      id: 1,
      name: "Abu Godswill",
      quote:
        "Being here at aptech has been so sweet and educative. Aptech is one of the best I.T firm you can ever think of. I have learnt a lot for the past weeks, i enjoy every class.",
      image: student1Img,
      course: "Web App with Python",
    },
    {
      id: 2,
      name: "Bukola",
      quote:
        "Since I started this program, I have been able to take in new things and it has helped me become a better version of myself",
      image: student2Img,
      course: "Resp. Web",
    },
    {
      id: 3,
      name: "Adejonwo Ayomide",
      quote:
        "Being an adse student at aptech ota has helped me improve my innovation in many fields, and acquainted me with job related skills.",
      image: student3Img,
      course: "ADSE",
    },
    {
      id: 4,
      name: "Akinoso Israel",
      quote:
        "Being trained by a team of experts at aptech ota has helped me to grasp the latest technonologies in the I.T industry and as well make me job ready for the I.T. industry.",
      image: student4Img,
      course: "ADSE",
    },
    {
      id: 5,
      name: "Oguntolu Esther",
      quote:
        "Aptech Ota gave me good a foundation I.T knowlege in programming, web development, database management that prepares me for any industrial work.",
      image: student5Img,
      course: "Resp. Web",
    },
    {
      id: 6,
      name: "Anthonio Amirat",
      quote:
        "To be better at something, you need the right people and information-based environment. This and more are the reason why I choose Aptech ota.",
      image: student6Img,
      course: "Resp. Web",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      loop={true}
      slidesPerView={"auto"}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      scrollbar={{ draggable: true }}
      className="grid grid-cols-1 gap-1 md:w-10/12 md:grid-cols-2 lg:grid-cols-3"
    >
      {students.map((student) => (
        <SwiperSlide key={student.id}>
          <div className="mx-3 h-full md:mx-4">
            <div className="h-full rounded-lg bg-gray-50 p-6 sm:p-8">
              <div className="flex items-center justify-center sm:justify-start">
                <img
                  src={student.image}
                  alt="Student Profile"
                  className="pointer-events-none h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                />

                <div className="ml-4">
                  <p className="font-jost text-lg font-medium">
                    {student.name}
                  </p>
                  <small className="font-bold text-aptechRed">
                    {student.course}
                  </small>
                </div>
              </div>

              <p className="relative mt-4 text-center  text-gray-600 sm:text-start">
                <span className="text-xl text-aptechOrange">&ldquo;</span>{" "}
                {student.quote}
                <span className="text-xl text-aptechOrange">&rdquo;</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="py-3 sm:py-5"></div>
      <div className="swiper-pagination text-white "></div>
    </Swiper>
  );
};

export default Testimonials;
