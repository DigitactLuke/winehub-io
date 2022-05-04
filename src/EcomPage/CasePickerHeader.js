import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {Strings} from '../Assets/Strings'

const lang='en'

export default() => {
    const cur = Strings[lang].CasePickerHeader
    const HeaderText = cur['CasePickerHeaderText']
    const Emphasis = cur['CasePickerHeaderEmphasis']
    const Detail = cur['CasePickerHeaderDetail']
    const CTA = cur['CasePickerHeaderCTA']

    return(
        <Row className='alt-background ps-5 pt-5 pb-5 m-0'>
            <Col md={7} className='header-main'>
                <h1 className='emphasis'>
                    {Emphasis}
                </h1>
                <h1>
                    {HeaderText}
                </h1>
                <p>
                    {Detail}
                </p>

                <Button className='float-left standard-button'>{CTA}</Button>
            </Col>
        </Row>
    )
}