import React, {useState} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import WineTop from '../Assets/images/winebottle_top.png'

//TODO: Get the user's case size
export default ({width, height, wineSelection, selectedSlot, typeCounts, onWineSwapped, onSelectedSlot, caseType='sixSlots'}) => {

    const BoxFrame = ({x_scale, y_scale}) => {
        return (
            <svg stroke="#04734b" strokeWidth="2" width={x_scale} height={y_scale}>  
                <line x1={0.0*x_scale} y1={0.2*y_scale} x2={0.0*x_scale} y2={0.8*y_scale}/>
                <line x1={0.3*x_scale} y1={0.4*y_scale} x2={0.3*x_scale} y2={1.0*y_scale}/>
                <line x1={1.0*x_scale} y1={0.2*y_scale} x2={1.0*x_scale} y2={0.8*y_scale}/>

                <line x1={0} y1={0.8*y_scale} x2={0.3*x_scale} y2={1.0*y_scale}/>
                <line x1={0.3*x_scale} y1={1.0*y_scale} x2={1.0*x_scale} y2={0.8*y_scale} />

                <line x1={0.0*x_scale} y1={0.2*y_scale} x2={0.3*x_scale} y2={0.4*y_scale}/>
                <line x1={0.3*x_scale} y1={0.4*y_scale} x2={1.0*x_scale} y2={0.2*y_scale} />
                <line x1={0.0*x_scale} y1={0.2*y_scale} x2={0.7*x_scale} y2={0.0*y_scale} />
                <line x1={0.7*x_scale} y1={0.0*y_scale} x2={1.0*x_scale} y2={0.2*y_scale} />
            </svg>
        )        
    }

    const TwelveCase = ({x_scale, y_scale}) => {

        const points = [
            {x: 0.0, y:0.0},
            {x: 0.0, y:0.8},
        ]

        return (
            <svg stroke="#04734b" strokeWidth="2" width={x_scale} height={y_scale}>  

                <BoxFrame x_scale={x_scale} y_scale={y_scale}/>

            </svg>
        )
    }

    const SixCase = ({wineSelection, onSelected, x_scale, y_scale}) => {

        const y_pad = 100

        const onClick = (e, index) => {
            
        }

        //polygon bounds
        const b = [
            {x: 0.00*x_scale, y:0.20*y_scale},
            {x: 0.25*x_scale, y:0.13*y_scale},
            {x: 0.40*x_scale, y:0.23*y_scale},
            {x: 0.15*x_scale, y:0.30*y_scale}, 
            
            {x: 0.25*x_scale, y:0.13*y_scale},
            {x: 0.50*x_scale, y:0.06*y_scale},
            {x: 0.65*x_scale, y:0.16*y_scale},
            {x: 0.40*x_scale, y:0.23*y_scale},
        
            {x: 0.50*x_scale, y:0.06*y_scale},
            {x: 0.70*x_scale, y:0.00*y_scale},
            {x: 0.85*x_scale, y:0.10*y_scale},
            {x: 0.65*x_scale, y:0.16*y_scale},        

            {x: 0.15*x_scale, y:0.30*y_scale}, 
            {x: 0.40*x_scale, y:0.23*y_scale},
            {x: 0.55*x_scale, y:0.33*y_scale},
            {x: 0.30*x_scale, y:0.40*y_scale},
            
            {x: 0.65*x_scale, y:0.16*y_scale},       
            {x: 0.40*x_scale, y:0.23*y_scale},
            {x: 0.55*x_scale, y:0.33*y_scale},
            {x: 0.80*x_scale, y:0.26*y_scale},

            {x: 0.65*x_scale, y:0.16*y_scale},
            {x: 0.85*x_scale, y:0.10*y_scale},
            {x: 1.00*x_scale, y:0.20*y_scale},
            {x: 0.80*x_scale, y:0.26*y_scale},
        ]


        //divider lines
        const p = [
            {x: 0.15*x_scale, y:0.30*y_scale},
            {x: 0.85*x_scale, y:0.10*y_scale},
            {x: 0.25*x_scale, y:0.13*y_scale},
            {x: 0.55*x_scale, y:0.33*y_scale},
            {x: 0.50*x_scale, y:0.06*y_scale},
            {x: 0.80*x_scale, y:0.26*y_scale}
        ]

        let ps = ''
        let count = 0

        return (
            <svg stroke="#04734b" strokeWidth="2" width={x_scale} height={y_scale+y_pad}>  

                <BoxFrame x_scale={x_scale} y_scale={y_scale}/>

                <line x1={p[0].x} y1={p[0].y} x2={p[1].x} y2={p[1].y}/>
                <line x1={p[2].x} y1={p[2].y} x2={p[3].x} y2={p[3].y} />
                <line x1={p[4].x} y1={p[4].y} x2={p[5].x} y2={p[5].y} />

                {b.map((o, i) => {
                    ps = ps + `${o.x},${o.y} `

                    if((i+1) % 4 === 0) {
                        count++
                        const s = ps
                        let index = count-1
                        ps = ''
                        return (
                        <>
                            {wineSelection[count-1].name !== null ? <image href={WineTop} style={{zIndex:0}} x={b[i-3].x-(10)} y={b[i-3].y - (y_scale/2)}/> : null}
                            <polygon points={s} onClick={ e => {
                                e.preventDefault()
                                onSelectedSlot(e, wineSelection[index])
                            }}/>
                        </>)
                    }
                })}

                

            </svg>
        )
    }
    
    let CaseDiagram = null;

    if(caseType === 'sixSlots')
        CaseDiagram = SixCase;
    else if(caseType==='twelveSlots')
        CaseDiagram = TwelveCase;
    

    return (
        <Container>
            <Row>
                <p>Hover over a case slot to pick a wine</p>
            </Row>
            <Row>
                {CaseDiagram && <CaseDiagram wineSelection={wineSelection} onSelectedSlot={onSelectedSlot} x_scale={width} y_scale={width}/> }
            </Row>
        </Container>
    )
}