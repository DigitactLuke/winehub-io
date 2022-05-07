import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";
import allocations from "../Assets/icons/allocations.png";
import customisation from "../Assets/icons/customisation.png";
import loyalty from "../Assets/icons/loyalty.png";
import world from '../Assets/images/world.png'

export default () => {
  const cur = Strings[Language].WineEcosystem;
  const EcosystemEmphasis = cur["EcosystemEmphasis"];
  const EcosystemHeader = cur["EcosystemHeader"];
  const SalesSubheader = cur["SalesSubheader"];
  const SalesDetail = cur["SalesDetail"];
  const CollabSubheader = cur["CollabSubheader"];
  const CollabDetail = cur["CollabDetail"];
  const NicheSubheader = cur["NicheSubheader"];
  const NicheDetail = cur["NicheDetail"];

  return (
    <Row className="background m-0">
      <Row className="ps-5 pt-5 pb-5">
        <Col md={12} className="subheader">
          <h2 className="emphasis"> {EcosystemEmphasis} </h2>
          <h2>{EcosystemHeader}</h2>
        </Col>

        <Row className="text-left">
          <Col md={5} className="m-2">
            <Stack>
              <img align="left" src={allocations} width={40} height={40} />
              <h4 className="emphasis py-3"> {SalesSubheader} </h4>
              <p className="pb-3"> {SalesDetail} </p>

              <img align="left" src={customisation} width={40} height={40} />
              <h4 className="emphasis py-3"> {CollabSubheader} </h4>
              <p className="pb-3"> {CollabDetail} </p>
            </Stack>
          </Col>
          <Col md={5} className="m-2">
            <Stack>
              <img align="left" src={loyalty} width={40} height={40} />
              <h4 className="emphasis py-3"> {NicheSubheader} </h4>
              <p className="pb-3"> {NicheDetail} </p>

              <img src={world} className='w-100' />
            </Stack>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};
