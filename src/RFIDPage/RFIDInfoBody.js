import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import RFIDDiagram from "../Assets/images/rfiddiagram.png";

export default () => {
  const cur = Strings[Language].RFIDInfo;

  const HeaderPre = cur["RFIDHeaderPre"];
  const HeaderEmphasis = cur["RFIDEmphasis"];
  const HeaderPost = cur["RFIDHeaderPost"];
  const Details = cur["RFIDBody"];

  return (
    <Row className="background m-0">
      <Row className="ps-5 pt-5 pb-5">
        <Col md={6}>
          <img src={RFIDDiagram} />
        </Col>
        <Col md={6} className="subheader">
          <div className="mb-3">
            <h2 className="d-inline">
              {" "}
              {HeaderPre}{" "}
              <h2 className="d-inline emphasis"> {HeaderEmphasis} </h2>{" "}
              {HeaderPost}{" "}
            </h2>
          </div>
          <p>{Details}</p>
        </Col>
      </Row>
    </Row>
  );
};
