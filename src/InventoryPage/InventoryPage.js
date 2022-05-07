import React from "react";
import Header from "../GenericSections/Header";
import InventoryHeader from "./InventoryHeader";
import FeaturesCarousel from "../GenericSections/FeaturesCarousel";
import Signup from "../GenericSections/Signup";
import WineEcosystemBody from "./WineEcosystemBody";

export default () => {
  return (
    <div className="p-0 m-0">
      <Header />

      <InventoryHeader />

      <WineEcosystemBody />

      <FeaturesCarousel />

      <Signup />
    </div>
  );
};
