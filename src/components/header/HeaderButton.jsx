import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";

const HeaderButton = props => {
    const disabled = props.path[2] === props.name ? "headerBtnDisabled" : ""

    const handleClickHistory = path => {
        props.history.replace(path)
    }

    if (props.dNone !== true){
            return <MDBBtn outline size={props.size} style={props.style}
                           onClick={() => handleClickHistory(props.name)} color={props.landing ? "warning" : "light"}
                    className={`${props.bold ? "font-weight-bold" : ""} m-2 text-light text-uppercase ` + disabled}>
                {props.text}
            </MDBBtn>
    } else {
        return null
    }
}
export default HeaderButton;