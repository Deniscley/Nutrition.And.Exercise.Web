import React from "react";
import { FaqModel } from "../../../core/models/homePageModel";
import { AiOutlinePlus } from "react-icons/ai";
import "./faq.css";

export default function FAQ({ question, answer }: FaqModel) {
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          <AiOutlinePlus />
        </button>
      </div>
      <p>{answer}</p>
    </article>
  );
}
