"use client";

import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
} & React.PropsWithChildren) => {
  const currentRoute = usePathname();
  const textClass =
    currentRoute === href ? "text-primary" : "text-content-base";
  const linkClass = `btn btn-ghost text-xl ${textClass}`;

  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
};
