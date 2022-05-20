import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Language, Strings } from "../Assets/Strings";
import CasePickerExample from '../Assets/images/CasePickerExample.png'

export default() => {
    const cur = Strings[Language].CasePickerBody;
    const SubheadingText = cur["SubheadingText"];
    const SubheadingEmphasis = cur["SubheadingEmphasis"];
    const AllocationEmphasis = cur["AllocationEmphasis"];
    const AllocationDetail = cur["AllocationDetail"];
    const ShipmentEmphasis = cur["ShipmentEmphasis"];
    const ShipmentDetail = cur["ShipmentDetail"];
    const ReferralDetail = cur["ReferralDetail"];
    const ReferralEmphasis = cur["ReferralEmphasis"];

    return (
        <div>
            <Row>
                <Col md={12}>
                <h2 className='d-inline text-center'><h2 className='d-inline text-center emphasis'>{SubheadingEmphasis}</h2> {SubheadingText}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <img src={CasePickerExample} className='w-100'/>
                </Col>
                <Col md={6}>
                    <h4>{AllocationEmphasis}</h4>
                    <p>{AllocationDetail}</p>

                    <h4>{ReferralEmphasis}</h4>
                    <p>{ReferralDetail}</p>

                    <h4>{ShipmentEmphasis}</h4>
                    <p>{ShipmentDetail}</p>
                </Col>
            </Row>
        </div>
    )
}