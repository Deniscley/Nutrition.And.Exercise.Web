import React from "react";
import { CardModel } from "../../../core/models/homePageModel";
import "./card.css";

const Card = ({ className, children }: CardModel) => {
  return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
