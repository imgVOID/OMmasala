import React from "react";
import {MDBBtn, MDBNavbarItem} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";

const NavButton = props => {
    if (props.dNone !== true){
        return <MDBNavbarItem className="text-center py-lg-0">
            <NavLink to={props.link}>
                <MDBBtn outline color="dark" className="text-warning font-weight-bold w-100 h-100 py-3 py-lg-0" onClick={props.onClick}>
                    {props.text}
                </MDBBtn>
            </NavLink>
        </MDBNavbarItem>
    } else {
        return null
    }
}
export default NavButton;