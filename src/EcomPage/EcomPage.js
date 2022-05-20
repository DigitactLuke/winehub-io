import React from "react";
import CasePickerHeader from "./CasePickerHeader";
import CasePickerBody from "./CasePickerBody";
import Header from "../GenericSections/Header";
import EcomHeader from "./EcomHeader";
import ReachBody from "./ReachBody";
import FeaturesCarousel from "../GenericSections/FeaturesCarousel";
import Signup from "../GenericSections/Signup";
import SideBySideDisplay from '../SideBySidePicker/SideBySideDisplay';

export default () => {
  return (
    <div className="p-0 m-0">
      <Header />

      <EcomHeader />

      <CasePickerBody />

      <SideBySideDisplay />

      <FeaturesCarousel />

      <Signup />
    </div>
  );
};
