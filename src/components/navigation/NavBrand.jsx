import React from "react";
import {MDBNavbarBrand} from "mdb-react-ui-kit";
import {NavLink} from "react-router-dom";


const NavBrand = props => {
    const title = "Om Masala"

    const Image = () => {
        return <img className="navImage pe-2 p-0 m-0 pb-1" height='30' alt='' loading='lazy'
                   src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png'/>
    }

    return <MDBNavbarBrand>
        {
            props.path[1] ? <NavLink className="text-warning p-0 m-0" to="/"><Image/></NavLink> : <div><Image/></div>
        }

        <h4 className="titleNav mt-auto p-0 m-0 font-weight-bold text-warning text-capitalize pb-1">
            {
                props.path[1] ? <NavLink className="text-warning p-0 m-0" to="/">{ title }</NavLink> : title
            }
        </h4>
    </MDBNavbarBrand>
}

export default NavBrand