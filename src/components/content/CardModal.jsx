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
                            <h3 className="modalItemTitle text-uppercase font-weight-bold
                            d-block m-0 pt-4 pb-0 px-3 text-warning">
                                {props.card.category + " " +  props.card.name}
                            </h3>
                        </MDBModalTitle>
                    </MDBModalHeader>

                    <CardModalBody vendors={props.vendors} card={props.card}/>

                    <MDBModalFooter className="text-center justify-content-center
                     text-warning bg-dark px-2 border-0 mb-3 pt-2">
                        <h3 className={props.path[2] === "holders" ? "d-none" : "fontCursive"}>
                            Пыльцовые аромапалочки "Om Masala"
                            <br/>
                            10 за {props.card.price} гривен
                        </h3>
                        <h3 className={props.path[2] !== "holders" ? "d-none" : "fontCursive"}>
                            Подставка для благовоний за {props.card.price} грн
                        </h3>
                    </MDBModalFooter>

                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default CardModal;


