import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";
import { links } from "../../../state/routes/routes";

export default function Navbar() {
  const isActive = usePathname();
  const activeNav = "active-nav";

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link href="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src="/logoNavBar.png" width={240} height={57} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <Link
                  href={path}
                  className={isActive === path ? activeNav : ""}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  <div>{name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
