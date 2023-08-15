import Link from "next/link";
import React from "react";
import Image from "next/image";
import headerImage from "../../../assets/images/morgan-petroski.png";

export default function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            recusandae ipsa commodi dolore quis officiis!
          </p>
          <Link href="/planos" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="container main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <Image
              src={headerImage}
              alt="Main Header Image"
              // priority={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
