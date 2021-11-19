import React from "react";
import {
    MDBModalHeader,
    MDBModalTitle,
} from 'mdb-react-ui-kit';

const CardModalHeader = props => {
    return <MDBModalHeader className="justify-content-center pt-4 pb-3">
        <MDBModalTitle className="text-center">
            <h2 className="modalItemTitle text-center
                            d-block m-0 pb-lg-1 text-warning font-weight-normal">
                Om Masala
            </h2>
            <h2 className="modalItemTitle fontCursive text-center text-capitalize
                            d-block m-0 pb-lg-1 text-light font-weight-normal">
                {props.card.category + " " + props.card.name}
            </h2>
        </MDBModalTitle>
    </MDBModalHeader>
}

export default CardModalHeader;