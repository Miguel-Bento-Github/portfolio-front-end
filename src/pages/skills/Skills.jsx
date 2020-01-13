import React, { memo } from "react";
import IconsList from "./iconsList/IconsList";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills secondBg section blur">
      <h1 className="section-header skills-title">Skills</h1>
      <IconsList />
    </section>
  );
};
export default memo(Skills);
