import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
    MDBBtn} from 'mdb-react-ui-kit';

const Card = props => {
        return (
            <MDBCard className="m-3">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={props.image} fluid alt='...' position='top' />
                    <a>
                        <div className='mask' style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}/>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{props.name}</MDBCardTitle>
                    <MDBCardText>
                        {props.description}
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        );
}

export default Card;