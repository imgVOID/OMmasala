import {MDBIcon, MDBNavbarToggler} from "mdb-react-ui-kit";
import React from "react";


const NavToggler = props => {
    return <MDBNavbarToggler class="custom-toggler navbar-toggler" onClick={props.handleNavCollapse}
                      type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                      aria-expanded={!props.isNavCollapsed} aria-label="Toggle navigation">
        <MDBIcon icon={!props.isNavCollapsed ? 'window-close' : 'bars'} color="light" fas/>
    </MDBNavbarToggler>
}

export default NavToggler