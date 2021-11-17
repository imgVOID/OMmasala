import {MDBIcon, MDBNavbarToggler} from "mdb-react-ui-kit";
import React from "react";


const NavToggler = props => {
    return <MDBNavbarToggler class="custom-toggler navbar-toggler" onClick={props.handleNavCollapse}
                      type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                      aria-expanded={!props.isNavCollapsed} aria-label="Toggle navigation">
        <MDBIcon icon={!props.isNavCollapsed ? 'window-close' : 'bars'} style={{"color": "#d1c8c2"}} fas size="sm"
        className="pb-2 pb-md-0 pb-lg-0"/>
    </MDBNavbarToggler>
}

export default NavToggler