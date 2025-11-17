import React from "react";
import Rosa from "react-on-scroll-animation";
import { Link } from "react-router-dom";

const PastEvents = ({ events }) => {
  return (
    <section class="mx-auto max-w-[85vw] space-y-10 py-12 md:py-24 lg:py-20">
      <Rosa animation={"fade-up"} once>
        <div class="space-y-2 text-center">
          <h2 class="text-3xl font-medium md:text-4xl ">Past Events</h2>
          <p class="text-gray-600 ">A quick overview of our past events</p>
        </div>
      </Rosa>

      <div class="mx-auto max-w-[75vw]">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {events.map((event) => (
            <Rosa
              animation={event.animation}
              delay={event.delay}
              once={"false"}
            >
              <div
                key={event.id}
                class="bg-card text-card-foreground rounded-2xl border shadow-sm"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-xl underline">{event.title}</h3>
                </div>
                <div class="p-6">
                  <div class="col-span-2 grid grid-cols-6 gap-2 ">
                    <div class=" col-span-3 max-h-[14rem] overflow-hidden rounded-xl">
                      <img
                        class="h-full w-full object-cover "
                        src={event.images[0]}
                        alt=""
                      />
                    </div>
                    <div class=" col-span-3 max-h-[14rem] overflow-hidden rounded-xl">
                      <img
                        class="h-full w-full object-cover  "
                        src={event.images[1]}
                        alt=""
                      />
                    </div>
                    <div class=" col-span-2 max-h-[10rem] overflow-hidden rounded-xl">
                      <img
                        class="h-full w-full object-cover "
                        src={event.images[2]}
                        alt=""
                      />
                    </div>
                    <div class=" col-span-2 max-h-[10rem] overflow-hidden rounded-xl">
                      <img
                        class="h-full w-full object-cover "
                        src={event.images[3]}
                        alt=""
                      />
                    </div>
                    <Link
                      to="/gallery"
                      reloadDocument
                      class="relative col-span-2 max-h-[10rem] overflow-hidden rounded-xl"
                    >
                      <div class="absolute inset-0 flex items-center justify-center  bg-black/60 text-xl font-medium text-white">
                        + {event.extraImages}
                      </div>
                      <img
                        class="h-full w-full object-cover "
                        src={event.images[0]}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Rosa>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
