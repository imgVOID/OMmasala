import React from "react";
import {MDBBtn, MDBNavbarItem} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";

const NavButton = props => {
    if (props.dNone !== true) {
        return <MDBNavbarItem className="text-center px-2">
            <NavLink to={props.link} className="text-warning d-inline-block w-100 h-100"
                     onClick={props.onClick}>
                <MDBBtn className="navLink text-warning py-3 py-lg-0 shadow-0 font-weight-bold w-100 h-100"
                        outline color="dark">
                    {props.text}
                </MDBBtn>
            </NavLink>
        </MDBNavbarItem>
    } else {
        return null
    }
}
export default NavButton;