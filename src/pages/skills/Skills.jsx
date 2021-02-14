import React, { memo } from "react";
import IconsList from "./iconsList/IconsList";
import "./skills.scss";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Skills() {
  useDocumentTitle("Skills");

  return (
    <>
      <div className="second-bg"></div>
      <section id="section" className="skills section page">
        <h1 className="section-header skills-title">Skills</h1>
        <IconsList />
      </section>
    </>
  );
}
export default memo(Skills);
