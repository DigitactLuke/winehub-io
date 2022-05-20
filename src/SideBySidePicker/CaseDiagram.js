import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SixFrameBackground from '../Assets/images/SixFrameBackground.png'
import SixFrameForeground from '../Assets/images/SixFrameForeground.png'
import GenericRed from '../Assets/images/GenericRed.png'
import GenericWhite from '../Assets/images/GenericWhite.png'
import GenericRose from '../Assets/images/GenericRose.png'
import GenericChampagne from '../Assets/images/GenericChampagne.png'

//TODO: Colour code the bottles!

export default({caseSize, caseItems}) => {
    let validItems = []
    for(let i = 0; i < caseSize; i++) {
        if(caseItems.length > i) {
            if(caseItems[i].title) {
                validItems.push(true)
            }
            else {
                validItems.push(false)
            }
        }
        else {
            validItems.push(false)
        }
    }
    
    return(
        <Row className='case-diagram'>
            {caseSize === 6 ? (<>
                <img className='case-background' src={SixFrameBackground}/>
                
                {validItems[0] && <img className='bottle-six-back' src={GenericRed}/>}
                {validItems[1] && <img className='bottle-six-midbackleft' src={GenericRed}/>}
                {validItems[2] && <img className='bottle-six-midbackright' src={GenericRed}/>}
                {validItems[3] && <img className='bottle-six-midleft' src={GenericRed}/>}
                {validItems[4] && <img className='bottle-six-midright' src={GenericRed}/>}
                {validItems[5] && <img className='bottle-six-front' src={GenericRed}/>}

                <img className='case-foreground' src={SixFrameForeground}/> 
            </>) : (<></>)}
        </Row>
    )
}