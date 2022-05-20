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
  maxSlots,
}) => {
  return (
    <>
      {items.map((o, i) => {
        const [lq, setLq] = useState(0);
        const [buttonDisabled, setButtonDisabled] = useState(true);

        const incrementLocalQuantity = (e, o, i, q) => {
          e.preventDefault();
          if (o !== null) {
            //const type = o.type;
            //const max = typeLimits[type].limit - typeCounts[type].count;

            if (/*q < max &&*/ currentSlots + q + 1 <= maxSlots && q < o.max) {
              let z = q;
              z++;
              setLq(z);
              setButtonDisabled(false);
            }

            //if you're right at the limit, you should still be able to choose qty 1 to replace another slot
            if (currentSlots === maxSlots) {
              setLq(1);
              setButtonDisabled(false);
            }
          }
        };

        const decrementLocalQuantity = (e, o, i, q) => {
          e.preventDefault();

          if (q > 0 && q > o.min) {
            let z = q;
            z--;
            setLq(z);
            if (z === 0) {
              setButtonDisabled(true);
            }
          }
        };

        return (
          <Col className="w-50 p-3">
            <Row className="w-100">
              <Col md={6}>
                <p className="text-start">{o.title}</p>
                <p className="text-start">
                  Min. of {o.min}, Limit of {o.max}
                </p>
              </Col>
              <Col md={6}>
                <p className="text-end">{o.vintage}</p>
              </Col>
              <img
                src={o.image}
                height={140}
                className="px-5"
                style={{ objectFit: "contain" }}
              />
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
                  disabled={buttonDisabled}
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
