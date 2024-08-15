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
      </section>
    </section>
  );
}
