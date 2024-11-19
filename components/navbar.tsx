import Link from "next/link";

interface NavbarProps {
  items: { label: string; link: string }[];
}

const Navbar = (props: NavbarProps) => {
  return (
    <header className="flex flex-row justify-center bg-transparent w-screen z-50 py-5">
      <div className="lg:w-1/4 sm:w-full border border-solid border-zinc-700 rounded-full p-2 flex flex-row items-center justify-center text-sm gap-9 bg-transparent mt-5 -mb-5 z-50 text-white">
        {props.items.map((navItem, key) => (
          <Link
            href={navItem.link}
            key={key}
            className="hover:text-[--main-color-hover] transition-all flex flex-row items-center gap-2 cursor-pointer select-none z-50"
          >
            {navItem.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
