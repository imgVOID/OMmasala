import {MDBBtnGroup, MDBBtn} from "mdb-react-ui-kit";
import React from "react";

const CardPrice = props => {
    return <MDBBtnGroup shadow="0" className="mb-2">
        <MDBBtn href='#' color="warning" size="sm" style={{"font-family": "'Arial', serif"}}
                className="shadow text-lowercase">
            10
        </MDBBtn>
        <MDBBtn href='#' size="sm" color="warning" outline className="font-weight-bold"
                style={{"color": "#4e4e4e", "font-family": "'Arial', serif"}}>
            {props.price} ₴
        </MDBBtn>
    </MDBBtnGroup>
}

export default CardPrice