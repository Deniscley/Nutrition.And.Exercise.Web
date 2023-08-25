"use client";
import React, { useState } from "react";
import SectionHead from "@/components/ui/sectionHead/section-head";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../../ui/card/card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../../../state/constants/constants";
import Image from "next/image";
import "./testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testemunhos"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <Image src={avatar} alt={name} width={65} height={70} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}
