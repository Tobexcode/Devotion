"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link as Linkk } from "react-scroll";
import Logo from "../../img/logo.svg";
import HeaderLogo from "../../img/header-logo.png";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-html-custom-tag": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function Header() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About Me", link: "/about" },
    { name: "Blog", link: "/blog" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-center  mt-[0px] h-[80px]    md:pb-0 lg:pb-0">
      <div
        onClick={() => setOpen(!open)}
        className="shadow-sm lg:shadow-none md:hidden md:shadow-none w-full fixed  z-50 top-0 left-0"
      >
        <div
          className={`lg:flex items-center justify-between  py-4 px-10 lg:px-16 md:px-16 px flex-row ${
            open ? "bg-white " : "backdrop-blur-lg bg-[#ffffff75]"
          }`}
        >
          {/* bg-[hsla(0,0%,100%,0)] */}
          <div className="flex">
            <Image
              className=""
              src={Logo}
              width={52}
              height={51}
              alt="ggg"
            ></Image>
          </div>

          <div className=""></div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute flex justify-center items-center right-8 top-6 cursor-pointer lg:hidden transition-all duration-500 ease-in"
          >
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden transition-all duration-500 ease-in"
            ></div>

            {/* {(!open) &&
       <XMarkIcon  className="h-8 w-8 text-black"/>
       }
       <Bars3Icon  className="h-8 w-8 text-black {`lg:flex md:mt-[54px] lg:mt-[54px] lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${!open ? 'dis'}`} "/>
       {open &&
       <XMarkIcon  className="h-8 w-8 text-black"/>
       } */}

            {/* <HeaderRow Icon={open ? 'XMarkIcon':'Bars3Icon'} />
       <HeaderRow Icon={XMarkIcon} /> */}
            <div className="">
              <Bars3Icon
                className={`h-8 w-8 text-black transition-all duration-500 ease-in ${
                  open ? "hidden " : "flex"
                }`}
              />

              <XMarkIcon
                className={`h-8 w-8 transition-all  duration-500 ease-in text-black ${
                  open ? "flex " : "hidden"
                }`}
              />
            </div>
          </div>

          <div className="">
            <ul
              className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:bg-transparent md:bg-transparent bg-white  sm:bg-white  lg:z-auto z-[10] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px] cursor-pointer "
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="lg:ml-8 text-[1rem] lg:my-0 my-7 cursor-pointer"
                >
                  <a
                    className="p hover:text-ta-purple duration-500"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden md:flex  h-full items-center">
        <div className="flex space-x-[46px] font-mazzardH font-[400] text-[20px] md:translate-y-2  cursor-pointer ">
          <Link
            href="/"
            className="hover:text-ta-purple group flex flex-col items-center"
          >
            Home
            <div className="h-1 w-1 rounded opacity-0 group-hover:opacity-100 bg-ta-purple "></div>
          </Link>
          <a
            href="/portfolio"
            className="hover:text-ta-purple group flex flex-col items-center"
          >
            Portfolio
            <div className="h-1 w-1 rounded opacity-0 group-hover:opacity-100 bg-ta-purple "></div>
          </a>
        </div>

        <Link className="flex h-full justify-center  items-center " href="/">
          <Image
            className="rounded-full mx-[72px] relative  cursor-pointer"
            src={HeaderLogo}
            width={70}
            height={70}
            alt="logo"
          />
        </Link>

        <div className="flex  space-x-[46px] font-mazzardH font-[400] text-[20px] md:translate-y-2  cursor-pointer">
          <Link
            href="/about"
            className="hover:text-ta-purple group flex flex-col items-center"
          >
            About Me
            <div className="h-1 w-1 rounded opacity-0 group-hover:opacity-100 bg-ta-purple "></div>
          </Link>
          <Link
            href="/blog"
            className="hover:text-ta-purple group flex flex-col items-center space-x-1"
          >
            Blog
            <div className="h-1 w-1 rounded opacity-0 group-hover:opacity-100 bg-ta-purple "></div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
