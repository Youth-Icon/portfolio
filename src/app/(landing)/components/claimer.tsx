export function Claimer() {
  return (
    <form className=" lg:flex my-10 lg:w-4/5 lg:ml-[10%] justify-center lg:space-y-0 space-y-5">
      <div className=" border rounded-[12px] overflow-hidden flex w-full">
        <input placeholder="username" className=" bg-transparent p-4 w-full" spellCheck={false} name="username"></input>
        <p className="md:px-4 bg-neutral-400 bg-opacity-30 backdrop-blur-3xl font-manrope text-neutral-400 p-4">.xprofile.me</p>
      </div>
      <button className="lg:ml-5 w-full p-5 bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] rounded-[12px]">CLAIM NOW✨</button>
    </form>
  );
}
