import React, { memo } from "react";
import IconsList from "./iconsList/IconsList";
import "./skills.scss";
import { isDesktopWidth } from "../../helpers/isMobile";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Skills = () => {
  useDocumentTitle("Skills");

  const className = isDesktopWidth()
    ? "skills section blur"
    : "skills section blur second-bg";

  return (
    <>
      {isDesktopWidth() && <div className="second-bg"></div>}
      <section className={className}>
        <h1 className="section-header skills-title">Skills</h1>
        <IconsList />
      </section>
    </>
  );
};
export default memo(Skills);
