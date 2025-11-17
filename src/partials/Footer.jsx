import React from "react";
import { Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import AptechLogo from "../assets/images/aptech-logo.png";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-1 pb-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <span className="mx-auto block w-fit lg:ml-0">
              <img
                src={AptechLogo}
                alt="Aptech Logo"
                className="pointer-events-none h-14"
              />
            </span>

            <p className="mt-4 text-center text-white lg:w-5/6 lg:text-left lg:text-md">
              IT is required in every industry. Today, the world is moving
              towards automation of skills, an area in which IT is urgently
              required. Enroll and get your skills now !!!
            </p>

            <div className="mt-6 flex justify-center gap-4 text-gray-300 lg:justify-start">
              {/* footer */}
              <a
                className="transition hover:text-aptechOrange"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> X </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
            {/* whatsapp */}
              <a
                className="transition hover:text-aptechOrange"
                href="https://wa.me/message"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> WhatsApp </span>

                <ImWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-jost text-md font-semibold uppercase tracking-wide text-aptechOrange">
                More Info
              </strong>

              <nav className="mt-4 flex flex-col space-y-2 text-md text-gray-300">
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/"
                  reloadDocument
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/about"
                  reloadDocument
                >
                  {" "}
                  About{" "}
                </Link>
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/courses"
                  reloadDocument
                >
                  Courses
                </Link>
                <Link
                  className="transition hover:text-white hover:underline hover:underline-offset-2"
                  to="/contact"
                  reloadDocument
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <strong className="font-jost text-md font-semibold uppercase tracking-wide text-aptechOrange">
                Follow Us
              </strong>

              <nav className="mt-4 flex flex-col space-y-2 text-md text-gray-300">
                <p className="transition">
                  {" "}
                    No. 15 A, Murtala Mohammed Highway, Calabar.
                </p>
              </nav>
            </div>

            <div>
              <strong className="font-jost text-md font-semibold uppercase tracking-wide text-aptechOrange">
                Contact
              </strong>

              <nav className="mt-4 flex flex-col space-y-1 text-sm text-gray-300">
                <a className="transition" href="mailto:aptechcalabar2022@gmail.com">
                  {" "}
                  <span className="font-bold">
                    Email:
                  </span> aptechcalabar2022@gmail.com{" "}
                </a>
                <div>
                  <span className="font-bold">Telephone:</span> <br />
                  <a className="transition" href="tel:+234 9162180037">
                    +234 9162180037 <br />  
                  </a>
                  <a className="transition" href="tel:+2347080220301">
                    +234 7080220301{" "}
                  </a>
                </div>
                <div className="transition">
                  {" "}
                  <span className="font-bold">Office Hours:</span> <br /> Mon -
                  Sat | 9:00am - 5:00pm GMT +1
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-3">
          <p className="text-center text-xs leading-relaxed text-gray-300">
            ©Aptech Calabar <span>{currentYear}</span>. All rights reserved.
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
