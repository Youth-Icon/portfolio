import { Logo } from "../Logo";
import { NavLink } from "./NavLink";

export function Nav() {
  return (
    <nav className=" flex justify-between items-center w-screen py-5 px-10">
      <div>
        <Logo />
      </div>
      <div className=" flex justify-between lg:w-1/5">
        <NavLink href="/#" text="About Us" />
        <NavLink
          href="/#"
          text="Get Started"
          className="bg-white !text-black hover:bg-primary/90"
        />
      </div>
    </nav>
  );
}
