import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
    MDBBtn,
    MDBBtnGroup
} from 'mdb-react-ui-kit';

const Card = props => {
        return (
            <MDBCard className="m-3">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={props.image} fluid alt='...' position='top' />
                    <a>
                        <div className='mask' style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}/>
                    </a>
                </MDBRipple>
                <MDBCardBody className="text-center">
                    <MDBCardTitle className="text-uppercase mb-1">
                        {props.category}
                        <br className={props.category === "Mandir" ? "" : "d-none"}/>
                        <b> {props.name}</b>
                    </MDBCardTitle>
                    <MDBCardText className="text-lowercase px-2">
                        <i>{props.description}</i>
                    </MDBCardText>
                    <MDBBtnGroup shadow="0" className="mb-3">
                        <MDBBtn href='#' color="warning" size="sm"
                                className="shadow text-lowercase">
                            x10
                        </MDBBtn>
                        <MDBBtn href='#' size="sm" color="warning" outline
                                className="font-weight-bold" style={{"color": "#4e4e4e"}}>
                            50 ₴
                        </MDBBtn>
                    </MDBBtnGroup>
                </MDBCardBody>
            </MDBCard>
        );
}

export default Card;