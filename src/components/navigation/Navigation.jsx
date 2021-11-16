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

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }
    const closeNav = () => {
        if (!isNavCollapsed){
            setIsNavCollapsed(!isNavCollapsed);
        }
    }

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
                    <Link className="text-warning text-capitalize"  to="/" style={{"font-family": "'Lobster', cursive"}}>
                        <h5 className="m-0 p-0">Om Masala</h5>

                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler class="custom-toggler navbar-toggler" onClick={handleNavCollapse}
                                  type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                                  aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                    <MDBIcon icon={!isNavCollapsed ? 'window-close' : 'bars'} color="light" fas/>
                </MDBNavbarToggler>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
                     id="navbar" style={{"z-index": 1}}>
                    <div className="closeMenuArea d-md-none d-lg-none" onClick={handleNavCollapse}/>
                    <MDBNavbarNav right fullWidth={false} className='mr-auto mb-2 mb-lg-0'>
                        <NavButton text="Каталог" link="/catalog/all" dNone={props.path[1] === "catalog"}
                                   onClick={closeNav}/>
                        <NavButton text="О Нас" link="/signup" onClick={closeNav} />
                        <NavButton text="Новости" link="/signup" onClick={closeNav} />
                        <NavButton text="Доставка и оплата" link="/signup" onClick={closeNav} />
                        <MDBNavbarItem className="text-center my-4 my-lg-0 ms-2">
                            <NavLink to="/signup" className="me-2" onClick={closeNav}>
                                <MDBBtn outline floating color="warning">
                                    <MDBIcon className="text-danger" icon='instagram' fab size='lg' /></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup" className="me-2" onClick={closeNav}>
                                <MDBBtn outline floating color="warning">
                                    <MDBIcon className="text-info" icon='envelope' fas size='lg' /></MDBBtn>
                            </NavLink>
                            <NavLink to="/signup">
                                <MDBBtn outline floating color="warning" onClick={closeNav}>
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