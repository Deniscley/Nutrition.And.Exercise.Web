import SectionHead from "@/components/ui/sectionHead/section-head";
import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { programs } from "../../../state/constants/constants";
import Card from "@/components/ui/card/card";
import Link from "next/link";
import "./program.css";

export default function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead title="Programas" icon={<FaCrown />} className="" />
        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link href={path} className="btn sm">
                  Saiba mais <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
