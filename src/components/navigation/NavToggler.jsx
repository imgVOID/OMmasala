import {MDBIcon, MDBNavbarToggler} from "mdb-react-ui-kit";
import React from "react";


const NavToggler = props => {
    return <MDBNavbarToggler onClick={props.handleNavCollapse} data-target="#navbar" aria-controls="navbar"
                             type="button" data-toggle="collapse" aria-label="Toggle navigation"
                             class="custom-toggler navbar-toggler p-0 m-0">
        <MDBIcon icon={!props.isNavCollapsed ? 'window-close' : 'bars'} style={{"color": "#d1c8c2"}} fas size="sm"
                 className={props.path[1] === "catalog" ? "" : ""}/>
    </MDBNavbarToggler>
}

export default NavToggler