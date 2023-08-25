import Link from "next/link";
import React from "react";
import "./main-header.css";

export default function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Saúde e Qualidade de Vida</h4>
          <h1>Junte-se a nós em uma jornada mais saudável e fitness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            recusandae ipsa commodi dolore quis officiis!
          </p>
          <Link href="/planos" className="btn lg">
            Iniciar
          </Link>
        </div>
        <div className="container main__header-right">
          <div className="main__header-background-image"></div>
          <div className="main__header-image">
            <img
              src="/morgan-petroski.png"
              alt="Main Header Image"
              width={550}
              height={750}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
