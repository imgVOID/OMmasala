import React, {useState, useRef} from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBBadge
} from 'mdb-react-ui-kit';
import NavButton from "./NavButton";
import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";
import NavSocial from "./NavSocial";
import useClickOutside from "../useClickOutside"

const Navigation = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, setIsNavCollapsed);

    const toggleCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }

    return (
        <>
            <MDBNavbar fixed='top' bgColor="dark" light className='navbar-expand-lg my-0 px-4 py-0' id="navbar"
                       ref={wrapperRef}>
                <MDBContainer>
                    <NavBrand path={props.path}/>
                    <MDBBadge id="navbarSecondText" className={
                        `${props.path[1] !== "catalog" ? "d-none" : ""}`}>
                        <h4 className="p-lg-0 m-lg-0 m-md-0 p-md-1">10 аромапалочек за 80 гривен</h4>
                    </MDBBadge>
                    <NavToggler handleNavCollapse={toggleCollapse} isNavCollapsed={isNavCollapsed} path={props.path}/>
                    <div id="navbarCollapse" className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                        <MDBNavbarNav right fullWidth={false} className='navContent pb-3 pb-lg-0 mt-4 mt-lg-0'>
                            <NavButton text="Каталог" linkLocal="/catalog" toggleCollapse={toggleCollapse}
                                       dNone={props.path[1] === "catalog"}/>
                            <NavButton text="О Нас" linkLocal="/signup" toggleCollapse={toggleCollapse}/>
                            <NavButton text="Новости" linkLocal="/signup" toggleCollapse={toggleCollapse}/>
                            <NavButton text="Доставка" linkLocal="/signup" toggleCollapse={toggleCollapse}/>
                            <NavSocial />
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navigation;