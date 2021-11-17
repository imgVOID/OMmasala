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
            <MDBNavbar fixed='top' bgColor="dark" light className='navbar-expand-lg my-0 px-4 py-0 ' id="navbar">
                <MDBContainer className="my-0 py-0">
                    <NavBrand onClick={closeNav}/>
                    <div className="w-100 d-md-none d-lg-none"/>
                    <MDBBadge id="navbarSecondText" className="mt-0 mb-2 my-md-0 my-lg-0 d-inline-block">
                        <h4 className="p-lg-0 m-0">10 аромапалочек за 50 гривен</h4>
                    </MDBBadge>
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
        </>
    );
}

export default Navigation;