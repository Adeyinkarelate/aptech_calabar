import React from "react";
import Rosa from "react-on-scroll-animation";

const NewsBanner = () => {
  return (
    <Rosa animation={"fade-up"} once>
      <div className="mt-28">
        <div class="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div class="bg-card text-card-foreground w-full max-w-4xl rounded-lg border shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-medium leading-6 text-black">
                  Latest News
                </h2>
                <span class="inline-flex items-center gap-x-1.5 rounded-full bg-gray-800 py-1 px-3 text-xs font-semibold text-white dark:bg-white dark:text-gray-800">
                  New
                </span>
              </div>
            </div>
            <div class="space-y-4 p-6">
              <img
                src="https://guardian.ng/wp-content/uploads/2023/12/IMG-20231202-WA0005-1-748x598.jpg"
                alt="News banner"
                className="h-72 w-full rounded-lg object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
                // style="aspect-ratio: 300 / 200; object-fit: cover;"
              />
              <h3 class="text-2xl font-semibold leading-7 text-gray-900">
                Aptech Ota Students Shines at the 4th Edition of Global IT
                Competition
              </h3>
              <p class="text-base font-medium leading-6 text-gray-500 line-clamp-2">
                Aptech successfully concluded the 4th Edition of TechWiz,
                one-of-its-kind global IT competition offering a platform where
                student skillsets are put to the test. Around 3200 participants
                made 680 teams and over 580 projects were submitted for this
                competition. Industry experts reviewed the entries, and winners
                shared prizes from a total prize pool of USD 43,200.
              </p>

              <a
                className="feature-btn mt-5 inline-flex items-center rounded bg-white py-2 text-black"
                href="https://guardian.ng/news/nigerian-students-shines-at-the-4th-edition-of-global-it-competition-aptech-techwiz/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-sm font-medium"> Read More </span>
                <svg
                  className="ml-2 h-4 w-4"
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
        </div>
      </div>
    </Rosa>
  );
};

export default NewsBanner;
