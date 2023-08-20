import React from "react";
import SectionHead from "@/components/ui/sectionHead/sectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../../../state/constants/constants";
import FAQ from "../../ui/faq/faq";
import "./faqs.css";

export default function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
}
