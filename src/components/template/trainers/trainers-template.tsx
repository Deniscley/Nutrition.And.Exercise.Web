import React from "react";
import "./trainers-template.css";
import { trainers } from "../../../state/constants/constants";
import Card from "@/components/ui/card/card";

export default function TrainersTemplate() {
  return (
    <>
      <div className="trainers">
        <h1 className="trainers trainers__h1">Sobre Mim</h1>
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Card className="trainer" key={id}>
                <div className="trainer__img">
                  <img
                    src={`/images/trainers/${image}.jpg`}
                    alt={name}
                    width={600}
                    height={600}
                  />
                </div>
                <h3>{name}</h3>
                <p>{job}</p>
                <div className="trainer__socials">
                  {socials.map(({ icon, link }, index) => {
                    return (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noreffer noopener"
                      >
                        {icon}
                      </a>
                    );
                  })}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  ab accusantium autem, itaque est adipisci dolores corrupti
                  sequi tempore velit molestias reprehenderit ducimus quisquam
                  excepturi vel laudantium fugiat eaque. Quasi?
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
