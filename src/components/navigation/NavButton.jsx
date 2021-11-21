import React from "react";
import {useHistory} from "react-router-dom"
import {MDBBtn, MDBNavbarItem} from "mdb-react-ui-kit";

const NavButton = props => {
    const history = useHistory();

    const handleClickHistory = path => {
        history.push(path)
        props.toggleCollapse()
    }

    return !props.dNone
        ? <MDBNavbarItem className="text-center">
            <MDBBtn className="navLink shadow-0 font-weight-bold w-100 h-100 border-0 py-4 py-lg-0" outline
                    onClick={() => handleClickHistory(props.linkLocal)}>
                {props.text}
            </MDBBtn>
        </MDBNavbarItem>
        : null
}
export default NavButton;