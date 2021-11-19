import {MDBIcon, MDBNavbarToggler} from "mdb-react-ui-kit";
import React from "react";


const NavToggler = props => {
    return <MDBNavbarToggler class="custom-toggler navbar-toggler p-0 m-0" onClick={props.handleNavCollapse}
                      type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                      aria-expanded={!props.isNavCollapsed} aria-label="Toggle navigation">
        <MDBIcon icon={!props.isNavCollapsed ? 'window-close' : 'bars'} style={{"color": "#d1c8c2"}} fas size="sm"
                 className={props.path[1] === "catalog" ? "" : ""}/>
    </MDBNavbarToggler>
}

export default NavToggler