import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";

const HeaderButton = props => {
    const className = `m-2 text-light text-uppercase ${props.bold ? "font-weight-bold" : ""} ${
        !props.linkLocal[2] && !props.path[2] ? "headerBtnDisabled" :
            props.path[2] === props.linkLocal ? "headerBtnDisabled" : ""
    }`

    const handleClickHistory = path => {
        props.history.push(path)
    }

    return !props.dNone
        ? <MDBBtn outline size={props.size} style={props.style} className={className}
                  onClick={() => handleClickHistory("/catalog/" + props.linkLocal)}
                  color={props.landing ? "warning" : "light"}>
            <span className={props.landing ? "text-warning" : ""}>{props.text}</span>
    </MDBBtn>
        : null
}

export default HeaderButton;