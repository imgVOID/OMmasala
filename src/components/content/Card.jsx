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
                    <MDBCardTitle className="text-uppercase">
                        {props.category}
                        <b> {props.name}</b>
                    </MDBCardTitle>
                    <MDBCardText className="cardDescription text-lowercase px-2">
                        <h4 className="d-none d-md-block d-lg-block">{props.description}</h4>
                        <h2 className="d-md-none d-lg-none">{props.description}</h2>
                    </MDBCardText>
                    <MDBBtnGroup shadow="0" className="mb-4 mt-1">
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