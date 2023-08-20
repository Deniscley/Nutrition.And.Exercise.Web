import { SectionHeadModel } from "../../../core/models/homePageModel";
import "./sectionHead.css";

const SectionHead = ({ title, icon }: SectionHeadModel) => {
  return (
    <div className="section__head">
      <span style={{ marginBottom: "0.5rem" }}>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHead;
