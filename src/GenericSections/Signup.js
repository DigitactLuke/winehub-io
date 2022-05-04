import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import {Language, Strings} from '../Assets/Strings'
import Cheers from '../Assets/images/cheers.png'

export default() => {
    const cur = Strings[Language].Signup
    const Header = cur['SignupHeader']
    const EmailPrompt = cur['SignupEmailPrompt']
    const ButtonText = cur['SignupCTA']

    return(
        <Row className='m-5'>
            <Col md={5}>
                <h3 className='p-3'>{Header}</h3>
                <input className='float-left signup-input p-2 ms-3' placeholder={EmailPrompt}/>
                <Button className='standard-button input-button float-right'>{ButtonText}</Button>
            </Col>

            <Col md={6}>
                <img className='float-right w-75' src={Cheers}/>
            </Col>
        </Row>
    )
}
