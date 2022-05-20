import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CasePickerSummary from "./CasePickerSummary";
import WineTop from "../Assets/images/winebottle_top.png";
import Tick from "../Assets/icons/tick.png";

//TODO: Get the user's case size
export default ({
  width,
  height,
  wineSelection,
  selectedSlot,
  typeCounts,
  onWineSwapped,
  onSelectedSlot,
  caseType = "sixSlots",
}) => {
  const Iso = ({ x, y, w, h }) => {
    const hw = w / 2;
    const hh = h / 2;
    return (
      <svg stroke="black" strokeWidth={2} width={w} height={h}>
        <line x1={x - hw} y1={y} x2={x} y2={y - hh} />
        <line x1={x} y1={y - hh} x2={x + hw} y2={y} />
        <line x1={x + hw} y1={y} x2={x} y2={y + hh} />
        <line x1={x} y1={y + hh} x2={x - hw} y2={y} />
      </svg>
    );
  };

  const BoxFrame = ({ x_scale, y_scale }) => {
    return (
      <svg stroke="#04734b" strokeWidth="2" width={x_scale} height={y_scale}>
        <line
          x1={0.0 * x_scale}
          y1={0.2 * y_scale}
          x2={0.0 * x_scale}
          y2={0.8 * y_scale}
        />
        <line
          x1={0.3 * x_scale}
          y1={0.4 * y_scale}
          x2={0.3 * x_scale}
          y2={1.0 * y_scale}
        />
        <line
          x1={1.0 * x_scale}
          y1={0.2 * y_scale}
          x2={1.0 * x_scale}
          y2={0.8 * y_scale}
        />

        <line x1={0} y1={0.8 * y_scale} x2={0.3 * x_scale} y2={1.0 * y_scale} />
        <line
          x1={0.3 * x_scale}
          y1={1.0 * y_scale}
          x2={1.0 * x_scale}
          y2={0.8 * y_scale}
        />

        <line
          x1={0.0 * x_scale}
          y1={0.2 * y_scale}
          x2={0.3 * x_scale}
          y2={0.4 * y_scale}
        />
        <line
          x1={0.3 * x_scale}
          y1={0.4 * y_scale}
          x2={1.0 * x_scale}
          y2={0.2 * y_scale}
        />
        <line
          x1={0.0 * x_scale}
          y1={0.2 * y_scale}
          x2={0.7 * x_scale}
          y2={0.0 * y_scale}
        />
        <line
          x1={0.7 * x_scale}
          y1={0.0 * y_scale}
          x2={1.0 * x_scale}
          y2={0.2 * y_scale}
        />
      </svg>
    );
  };

  const TwelveCase = ({ x_origin = 0, y_origin = 100, x_scale, y_scale }) => {
    let squares = [];
    const x_step = x_scale / 4;
    const y_step = y_scale / 3;
    const h_x_step = x_step / 2;
    const h_y_step = y_step / 2;

    for (let x = 0; x < 4; x++) {
      const x_pos = x_step * x + x_origin + h_x_step;

      for (let y = 0; y < 3; y++) {
        const y_pos = y_step * y + y_origin + h_y_step;

        squares.push(Iso(x_pos, y_pos, x_step, y_step));
      }
    }

    return (
      <svg stroke="#04734b" strokeWidth="2" width={x_scale} height={y_scale}>
        <BoxFrame x_scale={x_scale} y_scale={y_scale} />

        {squares}
      </svg>
    );
  };

  const SixCase = ({ wineSelection, onSelected, x_scale, y_scale }) => {
    //polygon bounds
    const b = [
      { x: 0.0 * x_scale, y: 0.2 * y_scale },
      { x: 0.25 * x_scale, y: 0.13 * y_scale },
      { x: 0.4 * x_scale, y: 0.23 * y_scale },
      { x: 0.15 * x_scale, y: 0.3 * y_scale },

      { x: 0.25 * x_scale, y: 0.13 * y_scale },
      { x: 0.5 * x_scale, y: 0.06 * y_scale },
      { x: 0.65 * x_scale, y: 0.16 * y_scale },
      { x: 0.4 * x_scale, y: 0.23 * y_scale },

      { x: 0.5 * x_scale, y: 0.06 * y_scale },
      { x: 0.7 * x_scale, y: 0.0 * y_scale },
      { x: 0.85 * x_scale, y: 0.1 * y_scale },
      { x: 0.65 * x_scale, y: 0.16 * y_scale },

      { x: 0.15 * x_scale, y: 0.3 * y_scale },
      { x: 0.4 * x_scale, y: 0.23 * y_scale },
      { x: 0.55 * x_scale, y: 0.33 * y_scale },
      { x: 0.3 * x_scale, y: 0.4 * y_scale },

      { x: 0.65 * x_scale, y: 0.16 * y_scale },
      { x: 0.4 * x_scale, y: 0.23 * y_scale },
      { x: 0.55 * x_scale, y: 0.33 * y_scale },
      { x: 0.8 * x_scale, y: 0.26 * y_scale },

      { x: 0.65 * x_scale, y: 0.16 * y_scale },
      { x: 0.85 * x_scale, y: 0.1 * y_scale },
      { x: 1.0 * x_scale, y: 0.2 * y_scale },
      { x: 0.8 * x_scale, y: 0.26 * y_scale },
    ];

    //divider lines
    const p = [
      { x: 0.15 * x_scale, y: 0.3 * y_scale },
      { x: 0.85 * x_scale, y: 0.1 * y_scale },
      { x: 0.25 * x_scale, y: 0.13 * y_scale },
      { x: 0.55 * x_scale, y: 0.33 * y_scale },
      { x: 0.5 * x_scale, y: 0.06 * y_scale },
      { x: 0.8 * x_scale, y: 0.26 * y_scale },
    ];

    let ps = "";
    let count = 0;

    return (
      <svg stroke="#04734b" strokeWidth="2" width={x_scale} height={y_scale}>
        <TwelveCase x_scale={x_scale} y_scale={y_scale} />

        <BoxFrame x_scale={x_scale} y_scale={y_scale} />

        {b.map((o, i) => {
          ps = ps + `${o.x},${o.y} `;

          if ((i + 1) % 4 === 0) {
            count++;
            const s = ps;
            let index = count - 1;
            ps = "";
            const colour = wineSelection && wineSelection[index] && wineSelection[index].wineObject  ? '#770d88' : "#ffffff";
            // wineSelection && wineSelection[index]
            //   ? wineSelection[index].wineObject.colour
            //   : "#ffffff";

            return (
              <>
                {wineSelection &&
                wineSelection[count - 1] &&
                wineSelection[count - 1].wineObject &&
                wineSelection[count - 1].wineObject.shopify_id ? (
                  <polygon
                    points={s}
                    style={{ fill: colour }}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectedSlot(e, wineSelection[index]);
                    }}
                  />
                ) : (
                  <polygon
                    points={s}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectedSlot(e, wineSelection[index]);
                    }}
                  />
                )}
              </>
            );
          }
        })}

        <line
          strokeWidth="1"
          stroke="#04734b"
          x1={p[0].x}
          y1={p[0].y}
          x2={p[1].x}
          y2={p[1].y}
        />
        <line
          strokeWidth="1"
          stroke="#04734b"
          x1={p[2].x}
          y1={p[2].y}
          x2={p[3].x}
          y2={p[3].y}
        />
        <line
          strokeWidth="1"
          stroke="#04734b"
          x1={p[4].x}
          y1={p[4].y}
          x2={p[5].x}
          y2={p[5].y}
        />
      </svg>
    );
  };

  let CaseDiagram = null;

  if (caseType === "sixSlots") CaseDiagram = SixCase;
  else if (caseType === "twelveSlots") CaseDiagram = TwelveCase;

  return (
    <Container>
      <Row>
        <p>Hover over a case slot to pick a wine</p>
      </Row>
      <Row>
        <Col md={8}>
          {CaseDiagram && (
            <CaseDiagram
              wineSelection={wineSelection}
              onSelectedSlot={onSelectedSlot}
              x_scale={width}
              y_scale={height}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
