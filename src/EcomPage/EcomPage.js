import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CasePickerHeader from './CasePickerHeader'
import CasePickerBody from './CasePickerBody'
import Header from '../GenericSections/Header'
import EcomHeader from './EcomHeader'
import ReachBody from './ReachBody'
import FeaturesCarousel from '../GenericSections/FeaturesCarousel'
import Signup from '../GenericSections/Signup'

export default () => {

    return(
        <Container className='p-0 m-0'>
            <Header/>

            <EcomHeader/>

            <ReachBody/>

            <FeaturesCarousel/>
            
            <CasePickerBody/>

            <Signup/>

        </Container>
    )
}