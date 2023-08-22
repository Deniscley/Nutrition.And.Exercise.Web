import React from "react";
import Imagge from "../../../assets/images/pexels-breakingpic-3301.jpg";
import SectionHead from "@/components/ui/sectionHead/sectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../../state/constants/constants";
import Card from "../../ui/card/card";
import Image from "next/image";
import "./values.css";

export default function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <Image src={Imagge} alt="Values Image" width={560} height={725} />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Valores" className="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime
            veniam, quibusdam aspernatur, in culpa architecto, illo eligendi
            obcaecati blanditiis laboriosam? Aspernatur, tempore perferendis!
            Asperiores dolor quod ab corrupti atque.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
