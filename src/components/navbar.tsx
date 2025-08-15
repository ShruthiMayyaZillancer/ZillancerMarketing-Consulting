import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

function NavItem({ children, href, isExternal = false }: NavItemProps) {
  if (isExternal) {
    return (
      <li>
        <Typography
          as="a"
          href={href || "#"}
          target="_blank"
          variant="paragraph"
          className="flex items-center gap-2 font-medium"
        >
          {children}
        </Typography>
      </li>
    );
  }

  return (
    <li>
      <Link href={href || "#"}>
        <Typography
          as="span"
          variant="paragraph"
          className="flex items-center gap-2 font-medium cursor-pointer"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Services",
    icon: RectangleStackIcon,
    href: "/services",
  },
  {
    name: "Industries",
    icon: UserCircleIcon,
    href: "/industries",
  },
  {
    name: "Why Us",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
    isExternal: true,
  },
  {
    name: "Contact Us",
    icon: UserCircleIcon,
    href: "/contact-us",
  }
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={
                isScrolling
                  ? "/logos/Zillancer Logo_Horizontal lockup_Black text.png" // Dark logo for white background
                  : "/logos/Zillancer Logo_Horizontal lockup_White text.png" // White logo for transparent background
              }
              alt="Zillancer Logo"
              width={180}
              height={30}
              className="h-10 transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href, isExternal }) => (
            <NavItem key={name} href={href} isExternal={isExternal}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">         
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "#fc5b00" : "white"}>Request Demo</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href, isExternal }) => (
              <NavItem key={name} href={href} isExternal={isExternal}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">Request Demo</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;