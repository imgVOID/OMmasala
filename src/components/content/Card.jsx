import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
} from 'mdb-react-ui-kit';
import CardModal from "./CardModal";
import CardPrice from "./CardPrice";

const Card = props => {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <MDBCard className="m-3">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' onClick={toggleShow}>
                <MDBCardImage src={props.card.image} fluid alt='...' position='top'/>
                <a className="cardLink p-0 m-0">
                    <div className='mask' style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}/>
                </a>
            </MDBRipple>
            <MDBCardBody className="text-center">
                <MDBCardTitle className="text-uppercase m-0 p-0" onClick={toggleShow} style={{"cursor":"pointer"}}>
                    {props.card.category}
                    <b> {props.card.name}</b>
                </MDBCardTitle>
                <MDBCardText className="cardDescription text-lowercase px-2 pt-1">
                    <h4 className="d-none d-md-block d-lg-block">{props.card.description}</h4>
                    <h2 className="d-md-none d-lg-none">{props.card.description}</h2>
                </MDBCardText>
                {
                    props.card.category === "Подставка"
                        ? <CardPrice price={props.card.price}/> : ""
                }
            </MDBCardBody>
            <CardModal basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow}
                       card={props.card} links={props.links} vendors={props.vendors} path={props.path}/>
        </MDBCard>
    );
}

export default Card;