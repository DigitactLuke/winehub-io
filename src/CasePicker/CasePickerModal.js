import React, { useState } from "react";
import CaseItemsList from "./CaseItemsList";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  Stack,
  Button,
} from "react-bootstrap";
import { Language, Strings } from "../Assets/Strings";

export default ({
  closeModal,
  showModal,
  replaceWineSlot,
  selectedSlot,
  currentSlots,
  maxSlots,
  typeCounts,
  typeLimits,
  stock,
  recommendations,
}) => {
  const cur = Strings[Language].CasePickerModal;
  const OrderRules = cur["OrderRules"];
  const Reds = cur["Reds"];
  const Whites = cur["Whites"];
  const Fortifieds = cur["Fortifieds"];

  return (
    <Modal show={showModal} onHide={closeModal}>
      <ModalHeader closeButton>
        <h3>{OrderRules}</h3>
        <Row className="ps-3">
          <Col>
            <p style={{ fontSize: "14px" }}>{Reds}:</p>
            <p style={{ fontSize: "14px" }}>
              {typeCounts["red"].count}/{typeLimits["red"].limit}
            </p>
          </Col>

          <Col>
            <p style={{ fontSize: "14px" }}>{Whites}:</p>
            <p style={{ fontSize: "14px" }}>
              {typeCounts["white"].count}/{typeLimits["white"].limit}
            </p>
          </Col>

          <Col>
            <p style={{ fontSize: "14px" }}>{Fortifieds}:</p>
            <p style={{ fontSize: "14px" }}>
              {typeCounts["fortified"].count}/{typeLimits["fortified"].limit}
            </p>
          </Col>
        </Row>
      </ModalHeader>

      <ModalBody>
        <Container className="wine-group">
          <Row>
            {selectedSlot && selectedSlot.name !== null && (
              <p>
                <b>Current selection: {selectedSlot.name}</b>
              </p>
            )}

            <CaseItemsList
              items={stock}
              replaceWineSlot={replaceWineSlot}
              typeLimits={typeLimits}
              typeCounts={typeCounts}
              currentSlots={currentSlots}
              maxSlots={maxSlots}              
            />
          </Row>

          <h3>Our suggestions based on your tastes:</h3>
          <Row>
            <CaseItemsList
              items={recommendations}
              replaceWineSlot={replaceWineSlot}
              typeLimits={typeLimits}
              typeCounts={typeCounts}
              currentSlots={currentSlots}
              maxSlots={maxSlots}
            />
          </Row>
        </Container>
      </ModalBody>
    </Modal>
  );
};
