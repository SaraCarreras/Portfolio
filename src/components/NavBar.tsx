export function NavBar() {
  return (
    <nav className="flex justify-center items-center w-[1120px] py-5 mx-auto">
      <ul className="flex flex-row gap-x-10 self-end">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
