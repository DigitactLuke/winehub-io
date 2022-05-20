import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";

export default ({ wineSelection }) => {
  const cur = Strings[Language].CasePickerSummary;
  const SummaryHeader = cur["SummaryHeader"];

  return (
    <Row>
      <h3 className="emphasis">{SummaryHeader}</h3>

      {wineSelection.map((o) => {
        return (
          o.wineObject &&
          o.wineObject.shopify_id && (
            <Row>
              <Col>
                {/** TODO: put an IMAGE here??? */}
                <p>
                  <b>{o.wineObject.title}</b>
                </p>
              </Col>
              <Col>
                <p>£{o.wineObject.price_adjustment}</p>
              </Col>
            </Row>
          )
        );
      })}
    </Row>
  );
};
