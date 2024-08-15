export function Claimer() {
  return (
    <form className=" flex my-10 justify-center">
      <div className=" border rounded-[12px] overflow-hidden flex">
        <input placeholder="username" className=" bg-transparent p-4" spellCheck={false} name="username"></input>
        <p className="md:px-4 bg-neutral-400 bg-opacity-30 backdrop-blur-3xl font-manrope text-neutral-400 p-4">.xprofile.me</p>
      </div>
      <button className="ml-5 p-5 bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] rounded-[12px]">CLAIM NOW✨</button>
    </form>
  );
}
