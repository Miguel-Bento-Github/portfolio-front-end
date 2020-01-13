import React, { memo } from "react";

const Letters = ({ letter }) => (
  <span className="showcase-header--pulse">{letter}</span>
);

export default memo(Letters);
