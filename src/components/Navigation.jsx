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
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

const Navigation = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <MDBNavbar class="navbar navbar-expand-lg navbar-dark bg-dark" fixed>
            <MDBContainer>
                <MDBNavbarBrand href='#'>
                    <img className="pe-2"
                        src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png'
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                    <Link className="text-light"  to="/">
                        Om Masala
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    class="custom-toggler navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample09"
                    aria-controls="navbarsExample09"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}>
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                    <MDBNavbarNav right fullWidth={false} className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem
                            className={props.path[1] === "catalog" ? "d-none" : "text-center ms-lg-3 mt-3 mt-lg-0"}>
                            <NavLink to="/catalog/all">
                                <MDBBtn outline color="warning" className="text-light font-weight-bold">
                                    Каталог
                                </MDBBtn>
                            </NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="text-center ms-lg-3 mt-3 mt-lg-0">
                            <NavLink to="/signup">
                                <MDBBtn outline color="warning" className="text-light font-weight-bold">
                                    О нас
                                </MDBBtn>
                            </NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="text-center ms-lg-3 mt-3 mt-lg-0">
                            <NavLink to="/signup">
                                <MDBBtn outline color="warning" className="text-light font-weight-bold">
                                    Доставка
                                </MDBBtn>
                            </NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="text-center ms-lg-3 mt-3 mt-lg-0">
                            <NavLink to="/signup" className="me-2">
                                <MDBBtn outline floating color="warning">
                                    <MDBIcon className="text-danger" icon='instagram' fab size='lg' /></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup" className="me-2">
                                <MDBBtn outline floating color="warning">
                                    <MDBIcon className="text-info" icon='envelope' fas size='lg' /></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup">
                                <MDBBtn outline floating color="warning">
                                    <MDBIcon className="text-success" icon='phone' fas size='lg' /></MDBBtn>
                            </NavLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Navigation;