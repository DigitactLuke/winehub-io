import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import allocations from "../Assets/icons/allocations.png";
import customisation from "../Assets/icons/customisation.png";
import loyalty from "../Assets/icons/loyalty.png";

export default () => {
  const cur = Strings[Language].Integrations;
  const IntegrationsEmphasis = cur["IntegrationsEmphasis"];
  const IntegrationsHeader = cur["IntegrationsHeader"];
  const TimeSubheader = cur["TimeSubheader"];
  const TimeDetail = cur["TimeDetail"];
  const DataSubheader = cur["DataSubheader"];
  const DataDetail = cur["DataDetail"];
  const CloudSubheader = cur["CloudSubheader"];
  const CloudDetail = cur["CloudDetail"];

  return (
    <Row className="background m-0">
      <Row className="ps-5 pt-5 pb-5">
        <Col md={12} className="subheader">
          <h2 className="emphasis"> {IntegrationsEmphasis} </h2>
          <h2>{IntegrationsHeader}</h2>
        </Col>

        <Row className="text-left">
          <Col md={5} className="m-2">
            <Stack>
              <img align="left" src={allocations} width={40} height={40} />
              <h4 className="emphasis py-3"> {TimeSubheader} </h4>
              <p className="pb-3"> {TimeDetail} </p>

              <img align="left" src={customisation} width={40} height={40} />
              <h4 className="emphasis py-3"> {DataSubheader} </h4>
              <p className="pb-3"> {DataDetail} </p>
            </Stack>
          </Col>
          <Col md={5} className="m-2">
            <Stack>
              <img align="left" src={loyalty} width={40} height={40} />
              <h4 className="emphasis py-3"> {CloudSubheader} </h4>
              <p className="pb-3"> {CloudDetail} </p>
            </Stack>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};
