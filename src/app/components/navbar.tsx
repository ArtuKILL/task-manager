import { link } from "fs";
import Link from "next/link";
import AppLogo from "./logo";



interface NavbarTextParams {
  children: string;
}

interface NavbarLink {
  name: string;
  path: string;
}

function NavbarText({ children }: NavbarTextParams) {
  return (<>
    <p className="hover:font-bold underline hover:underline-offset-4">
      {children}
    </p>
  </>);
}

export default function Navbar() {

  const links: NavbarLink[] = [
    {
      name: "home",
      path: "/"
    },
    {
      name: "new task",
      path: "/new"
    },

  ];

  const linkElements = links.map(
    (link, index) => (
      <li key={index} className="mx-4">
        <Link href={link.path}>
          <NavbarText>
            {link.name}
          </NavbarText>
        </Link>
      </li>
    )
  )


  return (
    <div className="bg-white w-full px-10 py-2">
      <nav>
        <ul className="grid grid-cols-3">
          <li>
            <AppLogo/>
          </li>
          <div className="flex items-center justify-center">
            {linkElements}
          </div>
          <div className="invisible">
            spacer
          </div>
        </ul>
      </nav>
    </div>
  );
}
