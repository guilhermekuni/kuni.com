const Nav = ({
  href,
  children,
}: {
  href: string;
} & React.PropsWithChildren) => (
  <a href={href} className="btn btn-ghost text-xl">
    {children}
  </a>
);

export const Header = () => {
  return (
    <div className="navbar bg-base-100 flex flex-row justify-center">
      <main className="flex flex-1 justify-between max-w-2xl">
        <section className="flex">
          <Nav href="/">@kuni</Nav>
        </section>
        <section>
          <Nav href="/about">about</Nav>
          <Nav href="/blog">blog</Nav>
        </section>
      </main>
    </div>
  );
};
