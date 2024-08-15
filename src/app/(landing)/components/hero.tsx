export function Hero() {
  return (
    <section className="w-screen h-screen relative">
      <div className="absolute -z-20 top-0 left-0 w-full h-[96vh] bg-hero-pattern"></div>
      <div className="hidden md:block absolute top-[420px] -left-56 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF5400] blur-[150px] rounded-full"></div>
      <div className="absolute top-48 -right-56 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#FF0054] blur-[150px] rounded-full"></div>
    </section>
  );
}
