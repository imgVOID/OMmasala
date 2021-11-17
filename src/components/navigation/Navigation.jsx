import React, {useState} from 'react';
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
        <>
            <MDBNavbar fixed='top' bgColor="dark" light className='navbar-expand-lg my-0 py-0 p-5' id="navbar">
                <MDBContainer className="my-0 py-0">
                    <NavBrand onClick={closeNav}/>
                    <NavToggler handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed}/>
                    <div id="navbarCollapse"
                         className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                        <MDBNavbarNav right fullWidth={false} className='navContent pb-3 pb-lg-0 mt-4 mt-lg-0'>
                            <NavButton text="Каталог" link="/catalog/all" onClick={closeNav}
                                       dNone={props.path[1] === "catalog"}/>
                            <NavButton text="О Нас" link="/signup" onClick={closeNav}/>
                            <NavButton text="Новости" link="/signup" onClick={closeNav}/>
                            <NavButton text="Доставка" link="/signup" onClick={closeNav}/>
                            <NavSocial closeNav={closeNav}/>
                        </MDBNavbarNav>
                        <div className="d-lg-none d-block closeMenuArea" onClick={handleNavCollapse}/>
                    </div>
                </MDBContainer>
            </MDBNavbar>
            <MDBNavbar fixed='top' light id={"navbarSecond"}
                       className={`${props.path[1] !== 'catalog' ? "d-none" : ""} navbar-expand m-0 shadow-0`}>
                <MDBContainer
                    className="justify-content-end">
                    <MDBBadge pill color="dark" id="navbarSecondText" className="text-warning px-4">
                        <h3 className="p-0 m-0">50 гривен за 10 штук</h3>
                    </MDBBadge>

                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navigation;