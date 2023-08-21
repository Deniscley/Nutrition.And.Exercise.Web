import { SectionHeadModel } from "../../../core/models/homePageModel";
import "./sectionHead.css";

const SectionHead = ({ title, icon, className }: SectionHeadModel) => {
  return (
    <div className={`section__head ${className}`}>
      <span style={{ marginBottom: "0.5rem" }}>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHead;
