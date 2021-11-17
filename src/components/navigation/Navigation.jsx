import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn
} from 'mdb-react-ui-kit';
import NavButton from "./NavButton";
import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";

const Navigation = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }

    const closeNav = () => {
        if (!isNavCollapsed) {
            setIsNavCollapsed(!isNavCollapsed);
        }
    }

    return (
        <MDBNavbar class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixedTop my-0 py-0 p-1">
            <MDBContainer className="my-0 py-0">

                <NavBrand/>
                <NavToggler handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed}/>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar">
                    <div className="closeMenuArea d-lg-none" onClick={handleNavCollapse}/>
                    <MDBNavbarNav right fullWidth={false} className='pb-3 pb-lg-0 mt-4 mt-lg-0'>
                        <NavButton text="Каталог" link="/catalog/all" dNone={props.path[1] === "catalog"}
                                   onClick={closeNav}/>
                        <NavButton text="О Нас" link="/signup" onClick={closeNav}/>
                        <NavButton text="Новости" link="/signup" onClick={closeNav}/>
                        <NavButton text="Доставка" link="/signup" onClick={closeNav}/>

                        <MDBNavbarItem className="text-center mt-4 mb-5 my-lg-2 ms-2">
                            <NavLink to="/signup" className="me-2" onClick={closeNav}>
                                <MDBBtn outline floating color="warning" size="sm" className="shadow">
                                    <MDBIcon className="text-danger" icon='instagram' fab size='md'/></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup" className="me-2" onClick={closeNav}>
                                <MDBBtn outline floating color="warning" size="sm" className="shadow">
                                    <MDBIcon className="text-info" icon='envelope' fas size='md'/></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup" onClick={closeNav}>
                                <MDBBtn outline floating color="warning" size="sm" className="shadow">
                                    <MDBIcon className="text-success" icon='phone' fas size='md'/></MDBBtn>
                            </NavLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Navigation;