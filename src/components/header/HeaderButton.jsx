import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const HeaderButton = props => {
    let color
    if (props.color) {
        color = props.color
    } else {
        color = props.path[2] === props.name ? "warning" : "light"
    }
    if (props.header) {
        color = "warning"
    }

    if (props.dNone !== true){
        return <Link to={`/catalog/${props.name}`}>
            <MDBBtn outline size="lg" color={color}
                    className={`${props.bold ? "font-weight-bold" : ""} headerButton m-2 text-light text-uppercase`}>
                {props.text}
            </MDBBtn>
        </Link>
    } else {
        return null
    }
}
export default HeaderButton;