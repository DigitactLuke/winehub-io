import React, {useState} from 'react'
import {Container, Modal, ModalBody, Row, Col, Stack, Button, ModalHeader} from 'react-bootstrap'
import {Language, Strings} from '../Assets/Strings'
import CasePickerModal from '../CasePicker/CasePickerModal'
import CasePickerDemo from './CasePickerDemo'
import allocations from '../Assets/icons/allocations.png'
import customisation from '../Assets/icons/customisation.png'
import loyalty from '../Assets/icons/loyalty.png'
import GenericRed from '../Assets/images/generic_red.png'
import GenericWhite from '../Assets/images/generic_white.png'
import GenericFortified from '../Assets/images/generic_fortified.png'

export default() => {
    const cur = Strings[Language].CasePickerBody
    const SubheadingText = cur['SubheadingText']
    const SubheadingEmphasis = cur['SubheadingEmphasis']
    const AllocationEmphasis = cur['AllocationEmphasis']
    const AllocationDetail = cur['AllocationDetail']
    const ShipmentEmphasis = cur['ShipmentEmphasis']
    const ShipmentDetail = cur['ShipmentDetail']
    const ReferralDetail = cur['ReferralDetail']
    const ReferralEmphasis = cur['ReferralEmphasis']
    const TryNowEmphasis = cur['TryNowEmphasis']

    const Wines = [
        {
            key: 0,
            selected:false,
            name:null,
            type:null
        },
        {
            key: 1,
            selected:false,
            name:null,
            type:null
        },
        {
            key: 2,
            selected:false,
            name:null,
            type:null
        },
        {
            key: 3,
            selected:false,
            name:null,
            type:null
        },
        {
            key: 4,
            selected:false,
            name:null,
            type:null
        },
        {
            key: 5,
            selected:false,
            name:null,
            type:null
        },
    ]
    
    const TypeCounts = {
        'red':{
            key:'red',
            count: 0
        },
        'white':{
            key:'white',
            count: 0
        },
        'fortified':{
            key:'fortified',
            count: 0
        }
    }

    const TypeLimits = {
        'red':{
            key:'red',
            limit: 4
        },
        'white':{
            key:'white',
            limit:3
        },
        'fortified':{
            key:'fortified',
            limit: 1
        }
    }

    const Stock = [
        {
            key: 0,
            selected:false,
            name:'2012 Shiraz',
            image:GenericRed,
            type:'red',
            labelLimit: 2
        },
        {
            key: 1,
            selected:false,
            name:'2019 Temperanillo',
            image:GenericRed,
            type:'red',
            labelLimit: 2
        },
        {
            key: 2,
            selected:false,
            name:'2017 Syrah',
            image:GenericWhite,
            type:'white',
            labelLimit: 1
        },
        {
            key: 3,
            selected:false,
            name:'2020 Shiraz',
            image:GenericRed,
            type:'red',
            labelLimit: 3
        },        
        {
            key: 4,
            selected:false,
            name:'2021 Verdelho',
            image:GenericWhite,
            type:'white',
            labelLimit: 2
        },
        {
            key: 5,
            selected: false,
            name:'2018 Fortified',
            image:GenericFortified,
            type:'fortified',
            labelLimit: 1
        }
    ]
    
    const [typeCounts, setTypeCounts] = useState(TypeCounts)
    const [showModal, setShowModal] = useState(false)
    const [wines, setWines] = useState(Wines)
    const [selectedSlot, setSelectedSlot] = useState(null)

    const selectWineSlot = (e, clicked) => {
        e.preventDefault()
        if(selectedSlot !== null) selectedSlot.selected = false
        clicked.selected = true
        setShowModal(true)
        setSelectedSlot(clicked)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const replaceWineSlot = (e, replacement) => {
        e.preventDefault()
        if(selectedSlot !== null) {
            let t = {...typeCounts}
            if(selectedSlot.type !== null) t[selectedSlot.type].count--
            if(replacement.type !== null) t[replacement.type].count++
            setTypeCounts(t)

            let temp = {...selectedSlot}
            temp.name = replacement.name
            temp.type = replacement.type
            wines[selectedSlot.key].name = replacement.name
            setSelectedSlot(temp)
        }
        closeModal()
    }

    return(
        <Row className='background m-0'>
            <Row className='ps-5 pt-5 pb-5'>
            <Col md={12} className='subheader'>
                <h2 className='emphasis'> {SubheadingEmphasis} </h2>
                <h2>{SubheadingText}</h2>
            </Col>

            <Row className='text-left'>
                
                <CasePickerModal showModal={showModal} closeModal={closeModal} replaceWineSlot={replaceWineSlot} selectedSlot={selectedSlot} typeCounts={typeCounts} typeLimits={TypeLimits} stock={Stock}/>

                <Col md={5} className='m-2'>
                    <Stack>
                    <img align='left' src={allocations} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {AllocationEmphasis} </h4>
                    <p className='pb-3'> {AllocationDetail} </p>

                    <img align='left' src={customisation} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {ShipmentEmphasis} </h4>
                    <p className='pb-3'> {ShipmentDetail} </p>
                    </Stack>
                </Col>
                <Col md={5} className='m-2'>
                    <Stack>
                    <img align='left' src={loyalty} width={40} height={40}/>
                    <h4 className='emphasis py-3'> {ReferralEmphasis} </h4>
                    <p className='pb-3'> {ReferralDetail} </p>

                    <h3 className='emphasis py-3'>{TryNowEmphasis}</h3>
                    <CasePickerDemo width={250} height={300} selectedSlot={selectedSlot} onWineSwapped={replaceWineSlot} onSelectedSlot={selectWineSlot} wineSelection={wines} typeCounts={typeCounts}/>
                    </Stack>
                </Col>
            </Row>
            </Row>
        </Row>
    )
}