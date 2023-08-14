import React from "react";
import Link from "next/link";
import Image from "next/image";
import Routes from "@/state/routes/routes";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
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
        <Routes />
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
