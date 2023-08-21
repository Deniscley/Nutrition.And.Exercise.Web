"use client";
import React, { useState } from "react";
import { FaqModel } from "../../../core/models/homePageModel";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./faq.css";

export default function FAQ({ question, answer }: FaqModel) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShowing((prev) => !prev)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
}
