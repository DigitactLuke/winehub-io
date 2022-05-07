import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default ({
  items,
  replaceWineSlot,
  typeLimits,
  typeCounts,
  currentSlots,
  maxSlots
}) => {

  return (
    <>
      {items.map((o, i) => {


      const [lq, setLq] = useState(0)

      const incrementLocalQuantity = (e, o, i, q) => {
        e.preventDefault();
        if (o !== null) {
          const type = o.type;
          const max = typeLimits[type].limit - typeCounts[type].count;

          if (
            q < max &&
            currentSlots + 1 < maxSlots &&
            q < o.labelLimit
          ) {
            let z = q;
            z++;
            setLq(z);
          }
        }
      };

      const decrementLocalQuantity = (e, o, i, q) => {
        e.preventDefault();
        
        if (q > 0) {
          let z = q;
          z--;  
          setLq(z);
        }
      };

        return (
          <Col className="w-50 p-3">
            <Row className="w-100">
              <Col md={6}>
                <p className="text-start">{o.name}</p>
                <p className="text-start">Limit of {o.labelLimit}</p>
              </Col>
              <Col md={6}>
                <p className="text-end">{o.type}</p>
              </Col>
              <img src={o.image} className="w-100 px-5" />
            </Row>

            <Col>
              <Row className="m-auto">
                <Col md={3} className="p-0">
                  <Button
                    className="circle-button"
                    onClick={(e) => decrementLocalQuantity(e, o, i, lq)}
                  >
                    <b>-</b>
                  </Button>
                </Col>
                <Col>
                  <p className="text-center">Qty: {lq}</p>
                </Col>
                <Col md={3} className="p-0">
                  <Button
                    className="circle-button"
                    onClick={(e) => incrementLocalQuantity(e, o, i, lq)}
                  >
                    <b>+</b>
                  </Button>
                </Col>

                <Button
                  className="standard-button"
                  onClick={(e) => replaceWineSlot(e, o, lq)}
                >
                  Select
                </Button>
              </Row>
            </Col>
          </Col>
        );
      })}
    </>
  );
};
