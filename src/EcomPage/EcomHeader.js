import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {Strings} from '../Assets/Strings'

const lang='en'

export default() => {
    const cur = Strings[lang].EcomHeader
    const HeaderText = cur['EcomHeaderText']
    const Detail = cur['EcomHeaderDetail']
    const CTA = cur['EcomHeaderCTA']

    return(
        <Row className='bottles-background ps-5 m-0'>
            <Row>
            <Col md={7} className='header-main'>
                <h1 className='text-light pb-2'>
                    {HeaderText}
                </h1>
            </Col>
            </Row>
            <Row>
            <Col md={5}>
                <p className='text-lightish'>
                    {Detail}
                </p>

                <Button className='float-left standard-button'>{CTA}</Button>
            </Col>
            </Row>
        </Row>
    )
}