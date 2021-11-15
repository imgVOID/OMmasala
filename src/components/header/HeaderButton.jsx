import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const HeaderButton = (props) => {
    if (props.dNone !== true){
        return <Link to={`/catalog/${props.name}`}>
            <MDBBtn outline size="lg" className="m-2 text-light"
                    color={props.path[2] === props.name ? "warning" : "light"}>
                {props.text}
            </MDBBtn>
        </Link>
    } else {
        return null
    }
}
export default HeaderButton;