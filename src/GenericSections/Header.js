import React from 'react'
import {Row, Navbar, Nav} from 'react-bootstrap'
import { Language, Strings } from '../Assets/Strings'

export default() => {
    const cur = Strings[Language].Menu
    const Home = cur['Home']
    const eCommerce = cur['eCommerce']
    const Inventory = cur['Inventory']
    const Contact = cur['Contact']

    return (
        <div>
            <Navbar className='p-3 bg-dark' fixed="top">
                <Navbar.Brand href="#home">
                   <img/>  {/** wine hub logo */}
                    <p className='ps-5 branding'>WineHub</p>
                    </Navbar.Brand>

                    <Nav className='ms-auto pe-5'>
                        <Nav.Link href="#home" className='text-light m-2'>{Home}</Nav.Link>
                        <Nav.Link href="#ecom" className='text-light m-2'>{eCommerce}</Nav.Link>
                        <Nav.Link href="#inventory" className='text-light m-2'>{Inventory}</Nav.Link>
                        <Nav.Link href="#contact" className='text-light m-2'>{Contact}</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}
