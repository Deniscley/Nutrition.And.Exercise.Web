import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";

export default function Navbar() {
  const isActive = usePathname();
  const activeNav = "active-nav";

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            width={222}
            height={58}
            alt="Logo"
            priority={true}
          />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          <li>
            <Link href="/" className={isActive === "/" ? activeNav : ""}>
              Página inicial
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={isActive === "/sobre" ? activeNav : ""}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/galeria"
              className={isActive === "/galeria" ? activeNav : ""}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              href="/planos"
              className={isActive === "/planos" ? activeNav : ""}
            >
              Planos
            </Link>
          </li>
          <li>
            <Link
              href="/treinos"
              className={isActive === "/treinos" ? activeNav : ""}
            >
              Treinos
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={isActive === "/contato" ? activeNav : ""}
            >
              Contato
            </Link>
          </li>
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
