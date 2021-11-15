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
import NavButton from "./NavButton";

const Navigation = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <MDBNavbar class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixedTop">
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
                        <NavButton link="/catalog/all" text="Каталог" dNone={props.path[1] === "catalog"} />
                        <NavButton link="/signup" text="О Нас" />
                        <NavButton link="/signup" text="Доставка" />
                        <MDBNavbarItem className="text-center mt-4 mb-4 mb-lg-0 mt-lg-0 ms-2">
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