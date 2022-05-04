import React from 'react'
import {Modal, ModalHeader, ModalBody, Container, Row, Col, Stack, Button} from 'react-bootstrap'

export default ({closeModal, showModal, replaceWineSlot, selectedSlot, typeCounts, typeLimits, stock}) => {

    return(
        <Modal show={showModal} onHide={closeModal}>
            <ModalHeader closeButton>
                <h3>Order rules</h3>
                <Row className='ps-3'>
                    <Col>
                        <p style={{fontSize:'14px'}}>Reds:</p>
                        <p style={{fontSize:'14px'}}>
                            {typeCounts['red'].count}/{typeLimits['red'].limit}
                        </p>
                    </Col>

                    <Col>
                        <p style={{fontSize:'14px'}}>Whites:</p>
                        <p style={{fontSize:'14px'}}>
                            {typeCounts['white'].count}/{typeLimits['white'].limit}
                        </p>
                    </Col>

                    <Col>
                        <p style={{fontSize:'14px'}}>Fortifieds:</p>
                        <p style={{fontSize:'14px'}}>
                            {typeCounts['fortified'].count}/{typeLimits['fortified'].limit}
                        </p>
                    </Col>
                </Row>
            </ModalHeader>

            <ModalBody>
                <Container className='wine-group'>
                    <Row>
                    {selectedSlot && selectedSlot.name !== null && <p><b>Current selection: {selectedSlot.name}</b></p> }

                        {stock.map((o, i) => {
                            return(
                                <Col>
                                <Stack>
                                    <p>{o.name}</p>
                                    <p>{o.type}</p>
                                    <img src={o.image} width={160} height={160}/>
                                    <Button className='float-left standard-button' onClick = {e => replaceWineSlot(e, o)}>
                                        Select
                                    </Button>
                                    </Stack>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </ModalBody>
        </Modal>
    )
}

