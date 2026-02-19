import Link from "next/link";
import { navItems } from "../data/data";
import { RiShoppingCart2Line, RiMenuLine } from "@remixicon/react";

const Header = () => {
  return (
    <header className="sticky top-0 border-b border-gray-200 w-full py-3 bg-white z-50 font-cunia">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <Link className="text-3xl font-semibold text-amber-600" href={"/"}>
          FurniHub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden">
          {/* LIST */}
          <ul className="">
            {navItems.map((item) => (
              <li className="" key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          {/* BUTTONS */}
          <div className="">
            {/* SHOPPING CART LINK */}
            <Link href={"/shopping-cart"}>
              <RiShoppingCart2Line />
              <span>2</span>
            </Link>
            {/*LOG IN BTN  */}
            <button className="btn-primary">Log In</button>
          </div>
        </nav>

        {/* DESKTOP MENU */}
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
                className="hover:text-amber-600 focus:text-amber-600 transition-colors"
              />
              <span className="size-5 bg-amber-600 text-white flex items-center justify-center rounded-full text-xs absolute top-0 right-0">
                2
              </span>
            </Link>
            {/*MENU BTN  */}
            <button className="">
              <RiMenuLine />
            </button>
          </div>
          <div>
            {/* LIST */}
            <ul className="">
              {navItems.map((item) => (
                <li className="" key={item.id}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            {/* Log in */}
            <button className="btn-primary">Log In</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
