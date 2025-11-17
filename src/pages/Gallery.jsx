import React from "react";
import { IntroBanner } from "../partials/pageBanners";
import Rosa from "react-on-scroll-animation";
import { events } from "./Home";

const Gallery = () => {
  return (
    <div>
      {/* Intro Banner */}
      <IntroBanner
        bannerTitle="Our"
        bannerTitleYellow="Gallery"
        bannerText="A quick view of the events at Aptech Ota. Click to expand."
      />

      <section className="mx-auto mt-20 max-w-[85vw] py-12 md:py-24 lg:py-20">
        <Rosa animation={"fade-up"} once>
          <div class="space-y-2 text-center">
            <h2 class="text-3xl font-medium md:text-4xl">{events[0].title}</h2>
          </div>
        </Rosa>

        <Rosa animation={"fade-up"} once>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-16">
            <div
              class="spotlight-group -m-1 flex flex-wrap md:-m-2"
              data-animation="slide,fade,scale"
            >
              <div class="flex w-1/2 flex-wrap">
                <a
                  href={events[0].images[0]}
                  class="spotlight w-1/2 p-1 md:p-2"
                >
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={events[0].images[0]}
                  />
                </a>
                <a
                  href={events[0].images[1]}
                  class="spotlight w-1/2 p-1 md:p-2"
                >
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={events[0].images[1]}
                  />
                </a>
                <a
                  href={events[0].images[2]}
                  class="spotlight w-full p-1 md:p-2"
                >
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={events[0].images[2]}
                  />
                </a>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <a
                  href={events[0].images[3]}
                  class="spotlight w-full p-1 md:p-2"
                >
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={events[0].images[3]}
                  />
                </a>
                <a
                  href={events[0].images[4]}
                  class="spotlight w-1/2 p-1 md:p-2"
                >
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={events[0].images[4]}
                  />
                </a>
                <a
                  href={events[0].images[5]}
                  class="spotlight w-1/2 p-1 md:p-2"
                >
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={events[0].images[5]}
                  />
                </a>
              </div>
            </div>
          </div>
        </Rosa>
      </section>

      <section className="mx-auto mt-20 max-w-[85vw] py-12 md:py-24 lg:py-20">
        <Rosa animation={"fade-up"} once>
          <div class="space-y-2 text-center">
            <h2 class="text-3xl font-medium md:text-4xl">{events[1].title}</h2>
          </div>
        </Rosa>

        <Rosa animation={"fade-up"} once>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-16">
            <div
              class="spotlight-group grid gap-4 "
              data-animation="slide,fade,scale"
            >
              <a href={events[1].images[0]} className="spotlight">
                <img
                  class="mx-auto h-auto max-w-full rounded-lg"
                  src={events[1].images[0]}
                  alt=""
                />
              </a>
              <div class="grid grid-cols-5 gap-4">
                <a href={events[1].images[1]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[1]}
                    alt=""
                  />
                </a>
                <a href={events[1].images[2]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[2]}
                    alt=""
                  />
                </a>
                <a href={events[1].images[3]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[3]}
                    alt=""
                  />
                </a>
                <a href={events[1].images[4]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[4]}
                    alt=""
                  />
                </a>
                <a href={events[1].images[5]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[5]}
                    alt=""
                  />
                </a>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <a href={events[1].images[6]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[6]}
                    alt=""
                  />
                </a>
                <a href={events[1].images[7]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[7]}
                    alt=""
                  />
                </a>
                <a href={events[1].images[8]} className="spotlight">
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={events[1].images[8]}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Rosa>
      </section>
    </div>
  );
};

export default Gallery;
