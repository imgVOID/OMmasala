import React from "react";
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalFooter,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit';
import CardModalBody from "./CardModalBody";

const CardModal = props => {
    return (
        <MDBModal show={props.basicModal} getOpenState={(e) => props.setBasicModal(e)} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent className="bg-dark mt-lg-5">
                    <MDBModalHeader className="justify-content-center pt-4 pb-3">
                        <MDBModalTitle className="text-center">
                            <h2 className="modalItemTitle text-center
                            d-block m-0 pb-lg-1 text-warning font-weight-normal">
                                Om Masala
                            </h2>
                            <h2 className="modalItemTitle fontCursive text-center
                            d-block m-0 pb-lg-1 text-light font-weight-normal">
                                {props.card.category + " " +  props.card.name}
                            </h2>
                        </MDBModalTitle>
                    </MDBModalHeader>

                    <MDBModalBody className="bg-light">
                    <CardModalBody vendors={props.vendors} card={props.card}/>
                    </MDBModalBody>

                    <MDBModalFooter className="text-center justify-content-center
                     text-dark bg-light">
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


