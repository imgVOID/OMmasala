import React from "react";
import {MDBBtn, MDBIcon, MDBNavbarItem} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";

const NavSocial = props => {
    return <MDBNavbarItem className="d-block text-center pt-4 pb-5 py-lg-2">
        <NavLink to="/signup" className="mx-1" onClick={props.onClick}>
            <MDBBtn outline floating color="warning" size="sm" className="shadow">
                <MDBIcon className="text-danger" icon='instagram' fab size='md'/></MDBBtn>
        </NavLink>
        <NavLink to="/signup" className="mx-1" onClick={props.onClick}>
            <MDBBtn outline floating color="warning" size="sm" className="shadow">
                <MDBIcon className="text-info" icon='envelope' fas size='md'/></MDBBtn>
        </NavLink>
        <NavLink to="/signup" onClick={props.onClick} className="ms-1">
            <MDBBtn outline floating color="warning" size="sm" className="shadow">
                <MDBIcon className="text-success" icon='phone' fas size='md'/></MDBBtn>
        </NavLink>
    </MDBNavbarItem>
}
export default NavSocial;