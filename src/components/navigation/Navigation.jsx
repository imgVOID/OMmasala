import React, {useState} from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
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
            <MDBNavbar fixed='top' light bgColor='dark navbar-expand-lg my-0 py-0 p-1'>
                <MDBContainer className="my-0 py-0">
                    <NavBrand onClick={closeNav}/>
                    <NavToggler handleNavCollapse={handleNavCollapse} isNavCollapsed={isNavCollapsed}/>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse shadow-lg`} id="navbar">
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