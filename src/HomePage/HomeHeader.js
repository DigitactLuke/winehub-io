import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";

export default () => {
  const cur = Strings[Language].HomeHeader;
  const HeaderText = cur["HomeHeaderText"];
  const Detail = cur["HomeHeaderDetail"];
  const CTA = cur["HomeHeaderCTA"];

  return (
    <Row className="bottles-background ps-5 m-0">
      <Row>
        <Col md={7} className="header-main">
          <h1 className="text-light pb-2">{HeaderText}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <p className="text-lightish">{Detail}</p>

          <Button className="float-left standard-button">{CTA}</Button>
        </Col>
      </Row>
    </Row>
  );
};
