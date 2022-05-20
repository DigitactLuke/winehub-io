import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Language, Strings } from "../Assets/Strings";
import allocations from "../Assets/icons/allocations.png";
import loyalty from "../Assets/icons/loyalty.png";

export default () => {
  const cur = Strings[Language].OurVision;

  const Emphasis = cur["VisionEmphasis"];
  const Header = cur["VisionHeader"];
  const Subheader = cur["VisionSubheader"];
  const Detail = cur["VisionDetail"];

  return (
    <Row className="m-0">
      <Row className="ps-5 pt-5 pb-5">
        <Col md={7}>
          <h2 className="d-inline py-5">
            {" "}
            <h2 className="d-inline emphasis"> {Emphasis} </h2> {Header}
          </h2>
          <h4 className="py-5">{Subheader}</h4>
          <p>{Detail}</p>
        </Col>

        <Col md={5}></Col>
      </Row>
    </Row>
  );
};
