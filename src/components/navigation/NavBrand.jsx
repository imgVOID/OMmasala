import {MDBNavbarBrand} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";
import React from "react";


const NavBrand = props => {
    return <MDBNavbarBrand className="p-2" href='#'>
        <img className="navImage pe-2" height='30' alt='' loading='lazy'
             src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png' />
        <NavLink className="titleNav text-warning text-capitalize p-0 m-0" onClick={props.onClick} to="/">
            <h4 className="mt-auto p-0 m-0 font-weight-bold">Om Masala</h4>
        </NavLink>
    </MDBNavbarBrand>
}

export default NavBrand