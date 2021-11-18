import React from "react";
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalFooter,
    MDBModalTitle,
} from 'mdb-react-ui-kit';
import CardModalBody from "./CardModalBody";

const CardModal = props => {
    return (
        <MDBModal show={props.basicModal} getOpenState={(e) => props.setBasicModal(e)} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent className="bg-dark px-2">
                    <MDBModalHeader className="justify-content-center border-0">
                        <MDBModalTitle className="text-center">
                            <h2 className="modalItemTitle text-uppercase font-weight-bold
                            d-block m-0 pt-4 pb-0 px-3 text-warning font-weight-normal">
                                {props.card.category + " " +  props.card.name}
                            </h2>
                        </MDBModalTitle>
                    </MDBModalHeader>

                    <CardModalBody vendors={props.vendors} card={props.card}/>

                    <MDBModalFooter className="text-center justify-content-center
                     text-warning bg-dark border-0 mb-3 pt-2">
                        <h3 className={props.path[2] === "holders" ? "d-none" : "fontCursive"}>
                            10 аромапалочек "Om Masala" за {props.card.price}₴
                        </h3>
                        <h3 className={props.path[2] !== "holders" ? "d-none" : "fontCursive"}>
                            Подставка для благовоний за {props.card.price}&nbsp;₴
                        </h3>
                    </MDBModalFooter>

                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default CardModal;


