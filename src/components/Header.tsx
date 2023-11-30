import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NavLink } from "@/components/NavLink";

export const Header = () => {
  return (
    <div className="navbar flex flex-row justify-center bg-base-300 text-base-content">
      <div className="flex flex-1 justify-between max-w-2xl">
        <section className="flex">
          <NavLink href="/">home</NavLink>
        </section>
        <section className="flex items-center">
          <NavLink href="/about">about</NavLink>
          <NavLink href="/blog">blog</NavLink>
          <ThemeSwitcher />
        </section>
      </div>
    </div>
  );
};
