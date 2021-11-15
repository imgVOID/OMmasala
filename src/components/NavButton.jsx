import React from "react";
import {MDBBtn, MDBNavbarItem} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
    if (props.dNone !== true){
        return <MDBNavbarItem className="text-center mt-3 mt-lg-0">
            <NavLink to={props.link}>
                <MDBBtn outline color="dark" className="text-warning font-weight-bold">
                    {props.text}
                </MDBBtn>
            </NavLink>
        </MDBNavbarItem>
    } else {
        return null
    }
}
export default NavButton;