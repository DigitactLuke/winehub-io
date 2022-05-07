import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import WineiPad from "../Assets/images/wine_ipad.png";

export default () => {
  const car = Strings[Language].CasePickerCarousel;
  const WarehouseHeaderText = car["WarehouseHeaderText"];
  const WarehouseDetailText = car["WarehouseDetailText"];
  const WarehouseCTA = car["WarehouseCTA"];
  const SyncHeaderText = car["SyncHeaderText"];
  const SyncDetailText = car["SyncDetailText"];
  const SyncCTA = car["SyncCTA"];
  const MoreHeaderText = car["MoreHeaderText"];
  const MoreDetailText = car["MoreDetailText"];
  const MoreCTA = car["MoreCTA"];

  return (
    <Row className="wine-background ps-3 pe-3 pb-5">
      <Row>
        <Col xs={0} md={2} />
        <Col>
          {" "}
          <img src={WineiPad} className="mt-5 mb-2 ms-1 me-1" />{" "}
        </Col>
        <Col xs={0} md={2} />
      </Row>

      <Row>
        <Col md={4}>
          <h3>{WarehouseHeaderText}</h3>
          <p>{WarehouseDetailText}</p>
          <Button className="float-left standard-button">{WarehouseCTA}</Button>
        </Col>
        <Col md={4}>
          <h3>{SyncHeaderText}</h3>
          <p>{SyncDetailText}</p>
          <Button className="float-left standard-button">{SyncCTA}</Button>
        </Col>
        <Col md={4}>
          <h3>{MoreHeaderText}</h3>
          <p>{MoreDetailText}</p>
          <Button className="float-left standard-button">{MoreCTA}</Button>
        </Col>
      </Row>
    </Row>
  );
};
