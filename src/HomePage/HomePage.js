import React from "react";
import { Container } from "react-bootstrap";
import FeaturesCarousel from "../GenericSections/FeaturesCarousel";
import Header from "../GenericSections/Header";
import OurStory from "../GenericSections/OurStory";
import HomeHeader from "./HomeHeader";
import Signup from "../GenericSections/Signup";
import IntegrationsBody from "./IntegrationsBody";

export default () => {
  return (
    <div className="p-0 m-0">
      <Header />

      <HomeHeader />

      <OurStory />

      <FeaturesCarousel />

      <IntegrationsBody />

      <FeaturesCarousel />

      <Signup />
    </div>
  );
};
