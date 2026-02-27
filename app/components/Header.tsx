"use client";

import Link from "next/link";
import { navItems } from "../data/data";
import { RiShoppingCart2Line, RiMenuLine, RiCloseLine } from "@remixicon/react";

import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathName = usePathname();

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="sticky top-0 border-b border-gray-200 w-full py-3 bg-white z-50 font-cunia">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <Link className="text-3xl font-semibold text-amber-600" href={"/"}>
          FurniHub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          {/* LIST */}
          <ul className="mx-auto flex items-center justify-center gap-9">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`hover:text-amber-600 focus:text-amber-600 transition-colors ${pathName === item.href ? "text-amber-600" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* BUTTONS */}
          <div className="flex items-center gap-3.5">
            {/* SHOPPING CART LINK */}
            <Link
              href={"/shopping-cart"}
              className={`size-10 relative flex items-center justify-center rounded-sm ${pathName === "/shopping-cart" ? "text-amber-600" : ""}`}
            >
              <RiShoppingCart2Line size={26} />
              <span className="absolute top-0 right-0 bg-amber-600 flex items-center size-5 rounded-full text-white justify-center text-xs">
                2
              </span>
            </Link>
            {/*LOG IN BTN  */}
            <Link href={"/login"} className="btn-primary">
              Log In
            </Link>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <nav className="relative lg:hidden">
          {/* BTNS */}
          <div className="flex items-center gap-2">
            {/* CART ICON */}
            <Link
              href={"/shopping-cart"}
              className="size-10 inline-flex items-center justify-center rounded-sm relative"
            >
              <RiShoppingCart2Line
                size={26}
                className={`hover:text-amber-600 focus:text-amber-600 transition-colors ${pathName === "/shopping-cart" ? "text-amber-600" : ""}`}
              />
              <span className="size-5 bg-amber-600 text-white flex items-center justify-center rounded-full text-xs absolute top-0 right-0">
                2
              </span>
            </Link>
            {/*MENU BTN  */}
            <button onClick={handleClick}>
              {openMenu ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
          </div>
          <div
            className={`absolute top-full right-0 bg-white p-3 min-w-50 w-full shadwo mt-2.5 rounded-lg space-y-2.5 transition ${openMenu ? "visible" : "hidden invisible"}`}
          >
            {/* LIST */}
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    onClick={handleClick}
                    href={item.href}
                    className={`block p-1.5 hover:text-amber-600 focus:text-amber-600 transition-colors ${pathName === item.href ? "text-amber-600" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Log in */}
            <Link
              href={"/login"}
              className="btn-primary w-full text-center block"
              onClick={handleClick}
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
