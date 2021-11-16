import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBBtnGroup
} from 'mdb-react-ui-kit';
import NavButton from "./NavButton";

const Navigation = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }
    const closeNav = () => {
        if (!isNavCollapsed){
            setIsNavCollapsed(!isNavCollapsed);
        }
    }

    return (
        <MDBNavbar class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixedTop my-0 py-0 p-1">
            <MDBContainer className="my-0 py-0">

                <MDBNavbarBrand className="p-2" href='#'>
                    <img className="pe-2" height='30' alt='' loading='lazy'
                         src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png' />
                    <Link className="text-warning text-capitalize p-0 m-0"  to="/">
                        <h4 className="navTitle mt-auto p-0 m-0">Om Masala</h4>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler class="custom-toggler navbar-toggler" onClick={handleNavCollapse}
                                  type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                                  aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                    <MDBIcon icon={!isNavCollapsed ? 'window-close' : 'bars'} color="light" fas/>
                </MDBNavbarToggler>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar">
                    <div className="closeMenuArea d-md-none d-lg-none" onClick={handleNavCollapse}/>
                    <MDBNavbarNav right fullWidth={false} className='mr-auto mb-2 mb-lg-0'>

                        <NavButton text="Каталог" link="/catalog/all" dNone={props.path[1] === "catalog"}
                                   onClick={closeNav}/>
                        <NavButton text="О Нас" link="/signup" onClick={closeNav} />
                        <NavButton text="Новости" link="/signup" onClick={closeNav} />
                        <NavButton text="Доставка" link="/signup" onClick={closeNav} />

                        <MDBNavbarItem className="text-center my-4 my-lg-2 ms-2">
                            <NavLink to="/signup" className="me-2" onClick={closeNav}>
                                <MDBBtn outline floating color="warning" size="sm" className="shadow">
                                    <MDBIcon className="text-danger" icon='instagram' fab size='md' /></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup" className="me-2" onClick={closeNav}>
                                <MDBBtn outline floating color="warning" size="sm" className="shadow">
                                    <MDBIcon className="text-info" icon='envelope' fas size='md' /></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup" onClick={closeNav}>
                                <MDBBtn outline floating color="warning" size="sm" className="shadow">
                                    <MDBIcon className="text-success" icon='phone' fas size='md' /></MDBBtn>
                            </NavLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </div>

            </MDBContainer>
        </MDBNavbar>
    );
}

export default Navigation;