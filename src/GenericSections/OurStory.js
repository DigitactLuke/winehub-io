import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import GenericSignature from "../Assets/images/generic_signature.png";

export default () => {
  const cur = Strings[Language].OurStory;
  const OurStoryHeader = cur["OurStoryHeader"];
  const OurStorySubheader = cur["OurStorySubheader"];
  const OurStoryLeftText = cur["OurStoryLeftText"];
  const OurStoryRightText = cur["OurStoryRightText"];
  const OurStoryLearnMore = cur["OurStoryLearnMore"];
  const OurStoryFounder = cur["OurStoryFounder"];

  return (
    <Row className="vineyard-background p-5">
      <Row className="m-3">
        <Col md={5}>
          <h2 className="branding-dark">{OurStoryHeader}</h2>
          <p>
            <b>{OurStorySubheader}</b>
          </p>
        </Col>
      </Row>

      <Row className="m-3">
        <Col md={6} className="pe-4">
          <p>{OurStoryLeftText}</p>
        </Col>
        <Col md={6} className="ps-4">
          <p>{OurStoryRightText}</p>
        </Col>
      </Row>

      <Row className="m-3">
        <Col md={8}>
          <a className="float-left standard-link">{OurStoryLearnMore}</a>
        </Col>
        <Col>
          <Stack>
            <p className="float-right text-right">
              <b>Ben Gibson</b>
            </p>
            <p className="float-right text-right">
              <b>{OurStoryFounder}</b>
            </p>
            <img src={GenericSignature} width={170} />
          </Stack>
        </Col>
      </Row>
    </Row>
  );
};
