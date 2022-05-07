import React, { useState } from "react";
import {
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  Stack,
  Button,
  ModalHeader,
} from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import CasePickerModal from "../CasePicker/CasePickerModal";
import CasePickerDemo from "../CasePicker/CasePickerDemo";
import CasePickerSummary from "../CasePicker/CasePickerSummary";
import allocations from "../Assets/icons/allocations.png";
import customisation from "../Assets/icons/customisation.png";
import loyalty from "../Assets/icons/loyalty.png";
import GenericRed from "../Assets/images/generic_red.png";
import GenericWhite from "../Assets/images/generic_white.png";
import GenericFortified from "../Assets/images/generic_fortified.png";

export default () => {
  const cur = Strings[Language].CasePickerBody;
  const SubheadingText = cur["SubheadingText"];
  const SubheadingEmphasis = cur["SubheadingEmphasis"];
  const AllocationEmphasis = cur["AllocationEmphasis"];
  const AllocationDetail = cur["AllocationDetail"];
  const ShipmentEmphasis = cur["ShipmentEmphasis"];
  const ShipmentDetail = cur["ShipmentDetail"];
  const ReferralDetail = cur["ReferralDetail"];
  const ReferralEmphasis = cur["ReferralEmphasis"];
  const TryNowEmphasis = cur["TryNowEmphasis"];

  const red = "#770d88";
  const white = "#e2faab";
  const fort = "#951f03";
  const champ = "#fcffc3";

  //this is selected slots
  const Wines = [
    {
      key: 0,
      selected: false,
      name: null,
      price: 0.0,
      type: null,
      image: null,
      colour: "#ffffff",
      labelLimit: 0,
    },
    {
      key: 1,
      selected: false,
      name: null,
      price: 0.0,
      type: null,
      image: null,
      colour: "#ffffff",
      labelLimit: 0,
    },
    {
      key: 2,
      selected: false,
      name: null,
      price: 0.0,
      type: null,
      image: null,
      colour: "#ffffff",
      labelLimit: 0,
    },
    {
      key: 3,
      selected: false,
      name: null,
      price: 0.0,
      type: null,
      image: null,
      colour: "#ffffff",
      labelLimit: 0,
    },
    {
      key: 4,
      selected: false,
      name: null,
      price: 0.0,
      type: null,
      image: null,
      colour: "#ffffff",
      labelLimit: 0,
    },
    {
      key: 5,
      selected: false,
      name: null,
      price: 0.0,
      type: null,
      image: null,
      colour: "#ffffff",
      labelLimit: 0,
    },
  ];

  const TypeCounts = {
    red: {
      key: "red",
      count: 0,
    },
    white: {
      key: "white",
      count: 0,
    },
    fortified: {
      key: "fortified",
      count: 0,
    },
  };

  const TypeLimits = {
    red: {
      key: "red",
      limit: 4,
    },
    white: {
      key: "white",
      limit: 3,
    },
    fortified: {
      key: "fortified",
      limit: 1,
    },
  };

  const Stock = [
    {
      key: 0,
      selected: false,
      name: "2012 Shiraz",
      price: 22.0,
      image: GenericRed,
      type: "red",
      colour: red,
      labelLimit: 2,
    },
    {
      key: 1,
      selected: false,
      name: "2019 Temperanillo",
      price: 18.0,
      image: GenericRed,
      type: "red",
      colour: red,
      labelLimit: 2,
    },
    {
      key: 2,
      selected: false,
      name: "2017 Syrah",
      price: 17.0,
      image: GenericWhite,
      type: "white",
      colour: white,
      labelLimit: 1,
    },
    {
      key: 3,
      selected: false,
      name: "2020 Shiraz",
      price: 20.0,
      image: GenericRed,
      type: "red",
      colour: red,
      labelLimit: 3,
    },
    {
      key: 4,
      selected: false,
      name: "2021 Verdelho",
      price: 19.0,
      image: GenericWhite,
      type: "white",
      colour: white,
      labelLimit: 2,
    },
    {
      key: 5,
      selected: false,
      name: "2018 Fortified",
      price: 24.0,
      image: GenericFortified,
      type: "fortified",
      colour: fort,
      labelLimit: 1,
    },
  ];

  const [typeCounts, setTypeCounts] = useState(TypeCounts);
  const [showModal, setShowModal] = useState(false);
  const [wines, setWines] = useState(Wines);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentSlots, setCurrentSlots] = useState(0);

  const maxSlots = 6;
  const caseType = "sixSlots";

  const selectWineSlot = (e, clicked) => {
    e.preventDefault();
    if (selectedSlot !== null) selectedSlot.selected = false;
    clicked.selected = true;
    setShowModal(true);
    setSelectedSlot(clicked);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const replaceWineSlot = (e, replacement, quantity = 1) => {
    e.preventDefault();
    if (selectedSlot !== null) {
      //TODO: iterate for quantity
      //TODO: after the first slot, just take whatever is next available

      let t = { ...typeCounts };

      if (selectedSlot.type !== null) t[selectedSlot.type].count--;
      if (replacement.type !== null) t[replacement.type].count++;
      setTypeCounts(t);

      let temp = { ...selectedSlot };
      temp.name = replacement.name;
      temp.type = replacement.type;
      temp.colour = replacement.colour;
      temp.image = replacement.image;
      temp.price = replacement.price;
      temp.labelLimit = replacement.labelLimit;

      let tempwines = wines;
      tempwines[selectedSlot.key].name = replacement.name;
      tempwines[selectedSlot.key].type = replacement.type;
      tempwines[selectedSlot.key].colour = replacement.colour;
      tempwines[selectedSlot.key].image = replacement.image;
      tempwines[selectedSlot.key].price = replacement.price;
      tempwines[selectedSlot.key].labelLimit = replacement.labelLimit;
      setWines(tempwines);
      setSelectedSlot(temp);
    }

    setCurrentSlots(wines.count);

    closeModal();
  };

  return (
    <Row className="background m-0">
      <Row className="ps-5 pt-5 pb-5">
        <Col md={12} className="subheader">
          <h2 className="emphasis"> {SubheadingEmphasis} </h2>
          <h2>{SubheadingText}</h2>
        </Col>

        <Row className="text-left">
          <CasePickerModal
            showModal={showModal}
            closeModal={closeModal}
            replaceWineSlot={replaceWineSlot}
            selectedSlot={selectedSlot}
            currentSlots={currentSlots}
            maxSlots={maxSlots}
            typeCounts={typeCounts}
            typeLimits={TypeLimits}
            stock={Stock}
            recommendations={Stock}
          />

          <Col md={5} className="m-2">
            <Stack>
              <img align="left" src={allocations} width={40} height={40} />
              <h4 className="emphasis py-3"> {AllocationEmphasis} </h4>
              <p className="pb-3"> {AllocationDetail} </p>

              <img align="left" src={customisation} width={40} height={40} />
              <h4 className="emphasis py-3"> {ShipmentEmphasis} </h4>
              <p className="pb-3"> {ShipmentDetail} </p>
            </Stack>
          </Col>
          <Col md={5} className="m-2">
            <Stack>
              <img align="left" src={loyalty} width={40} height={40} />
              <h4 className="emphasis py-3"> {ReferralEmphasis} </h4>
              <p className="pb-3"> {ReferralDetail} </p>

              <h3 className="emphasis py-3">{TryNowEmphasis}</h3>

              <Col md={8}>
                <CasePickerDemo
                  width={300}
                  height={250}
                  caseType={caseType}
                  selectedSlot={selectedSlot}
                  onWineSwapped={replaceWineSlot}
                  onSelectedSlot={selectWineSlot}
                  wineSelection={wines}
                  typeCounts={typeCounts}
                />
              </Col>

              <Col md={4}>
                <CasePickerSummary wineSelection={wines} />
              </Col>
            </Stack>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};
