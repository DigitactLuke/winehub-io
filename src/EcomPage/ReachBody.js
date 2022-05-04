import React from 'react'
import {Stack, Row, Col, Button} from 'react-bootstrap'
import {Language, Strings} from '../Assets/Strings'
import allocations from '../Assets/icons/allocations.png'
import customisation from '../Assets/icons/customisation.png'
import loyalty from '../Assets/icons/loyalty.png'
import WineiPad from '../Assets/images/wine_ipad.png'

export default() => {
    const cur = Strings[Language].ReachBody
    const SubheadingEmphasis = cur['SubheadingEmphasis']
    const SubheadingText = cur['SubheadingText']
    const CompatEmphasis = cur['CompatEmphasis']
    const CompatDetail = cur ['CompatDetail']
    const OptiEmphasis = cur['OptiEmphasis']
    const OptiDetail = cur['OptiDetail']
    const OtherEmphasis = cur['OtherEmphasis']
    const OtherDetail = cur['OtherDetail']
    const MultiEmphasis = cur['MultiEmphasis']
    const MultiDetail = cur['MultiDetail']
    
    return(
        <Row className='background m-0'>
            <Row className='ps-5 pt-5 pb-5'>
            <Col md={12} className='subheader'>
                <h2 className='emphasis'> {SubheadingEmphasis} </h2>
                <h2>{SubheadingText}</h2>
            </Col>

            <Row className='text-left'>
                <Col md={5} className='m-2'>
                    <Stack>
                    <img align='left' src={allocations} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {CompatEmphasis} </h4>
                    <p className='pb-3'> {CompatDetail} </p>

                    <img align='left' src={customisation} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {OptiEmphasis} </h4>
                    <p className='pb-3'> {OptiDetail} </p>
                    </Stack>
                </Col>

                <Col md={5} className='m-2'>
                    <Stack>
                    <img align='left' src={allocations} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {OtherEmphasis} </h4>
                    <p className='pb-3'> {OtherDetail} </p>

                    <img align='left' src={customisation} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {MultiEmphasis} </h4>
                    <p className='pb-3'> {MultiDetail} </p>
                    </Stack>
                </Col>
            </Row>
          </Row>
        </Row>
    )
}