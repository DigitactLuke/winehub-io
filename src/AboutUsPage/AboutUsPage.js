import React from "react";
import Header from "../GenericSections/Header";

import OurStory from "../GenericSections/OurStory";
import OurVisionBody from "./OurVisionBody";

export default () => {
  return (
    <div className="tan-background p-0 m-0">
      <Header />
      <div className="mt-5 pt-5" style={{ backgroundColor: "#fff9ea" }} />
      <OurStory />
      <OurVisionBody />
    </div>
  );
};
