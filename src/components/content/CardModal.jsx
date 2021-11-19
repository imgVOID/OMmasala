import React from "react";
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
} from 'mdb-react-ui-kit';
import CardModalBody from "./CardModalBody";
import CardModalHeader from "./CardModalHeader";
import CardModalFooter from "./CardModalFooter";

const CardModal = props => {
    return (
        <MDBModal show={props.basicModal} getOpenState={(e) => props.setBasicModal(e)} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent className="bg-dark mt-lg-5">
                    <CardModalHeader card={props.card}/>

                    <CardModalBody vendors={props.vendors} card={props.card}/>

                    <CardModalFooter path={props.path} card={props.card}/>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default CardModal;


