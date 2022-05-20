import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Language, Strings } from "../Assets/Strings";
import allocations from "../Assets/icons/allocations.png";
import loyalty from "../Assets/icons/loyalty.png";

export default () => {
  const cur = Strings[Language].SupplyChain;

  const SupplyChainEmphasis = cur["SupplyChainEmphasis"];
  const SupplyChainHeader = cur["SupplyChainHeader"];
  const SupplyChainDetail = cur["SupplyChainDetail"];
  const SupplyChainCTA = cur["SupplyChainCTA"];
  const SpeedDetail = cur["SpeedDetail"];
  const TimeDetail = cur["TimeDetail"];
  const CostDetail = cur["CostDetail"];

  return (
    <Row className="background m-0">
      <Row className="ps-5 pt-5 pb-5">
        <Col md={7} className="subheader">
          <h2 className="emphasis"> {SupplyChainEmphasis} </h2>
          <h2>{SupplyChainHeader}</h2>
          <p>{SupplyChainDetail}</p>
        </Col>
        <Col md={5}>
          <Button className="standard-button">{SupplyChainCTA}</Button>
        </Col>

        <Row className="text-left">
          <Col md={3} className="m-2 p-2">
            <Stack>
              <img align="left" src={allocations} width={40} height={40} />
              <h4 className="mx-2 py-3"> {SpeedDetail} </h4>
            </Stack>
          </Col>
          <Col md={3} className="m-2 p-2">
            <Stack>
              <img align="left" src={loyalty} width={40} height={40} />
              <h4 className="mx-2 py-3"> {TimeDetail} </h4>
            </Stack>
          </Col>
          <Col md={3} className="m-2 p-2">
            <Stack>
              <img align="left" src={loyalty} width={40} height={40} />
              <h4 className="mx-2 py-3"> {CostDetail} </h4>
            </Stack>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};
