import React from "react";
import Header from "../GenericSections/Header";
import RFIDHeader from "./RFIDHeader";
import FeaturesCarousel from "../GenericSections/FeaturesCarousel";
import Signup from "../GenericSections/Signup";
import SupplyChainBody from "./SupplyChainBody";
import RFIDInfoBody from "./RFIDInfoBody";

export default () => {
  return (
    <div className="p-0 m-0">
      <Header />

      <RFIDHeader />

      <SupplyChainBody />

        <RFIDInfoBody />

      <FeaturesCarousel />

      <Signup />
    </div>
  );
};
