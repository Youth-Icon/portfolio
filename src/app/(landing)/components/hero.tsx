import Image from "next/image";
import { Claimer } from "./claimer";

export function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern"></div>
      <div className="hidden md:block absolute top-[420px] -left-56 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full"></div>
      <div className="absolute top-48 -right-56 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full"></div>
      <section>
        <div className="text-center flex flex-col text-4xl xs:text-6xl lg:text-[76px]">
          <h1>One Link with</h1>
          <h1 className="bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text font-bold font-manrope ">
            Superpowers
          </h1>
        </div>
        <p className="text-center max-w-3xl text-stone-400  text-[14px] xs:text-base px-4 sm:text-lg lg:text-[24px] mt-4 sm:mt-6 lg:mt-12 font-medium font-manrope leading-snug">
          XProfile is an open-source app that provides a one-link portfolio for
          showcasing your projects, skills, social links, and more.
        </p>
        <Claimer />

        <div className="max-w-screen-md mx-5 rounded-3xl border p-2 md:p-4 flex-shrink-0 bg-neutral-500/10 text-stone-400 bg-opacity-30 backdrop-blur-3xl border-t border-b border-l">
          <div className="flex md:flex-row gap-2 md:gap-4 mb-2 px-1">
            <svg
              className="w-7 h-8 md:w-10 md:h-12"
              viewBox="0 0 55 53"
              fill="none"
              stroke-width="2.75"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.35587"
                y="2.08487"
                width="52.0653"
                height="48.8112"
                stroke="currentColor"
                stroke-width="2.71173"
              ></rect>
              <path
                stroke="currentColor"
                fill="currentColor"
                stroke-width="1"
                d="M34.7813 39.1532H28.464L22.8063 30.0938L17.2527 39.1532H11.8032L20.151 26.4146L12.0635 14.0577H18.3287L23.3443 22.1799L28.3078 14.0577H33.6879L25.9476 25.7551L34.7813 39.1532ZM37.4469 39.1532V33.6343H43.0006V39.1532H37.4469Z"
              ></path>
            </svg>
            <span className="place-self-end self-end font-medium text-sm md:text-xl">
              XProfile
            </span>
          </div>
          <div className="w-full">
            <Image
              alt="Image"
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="drop-shadow-lg w-full h-full"
              src="/main.svg"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
