import React, {useState, useEffect, useRef} from 'react';
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

function useOutsideAlerter(ref, setIsNavCollapsed) {
    useEffect(() => {
        /**
         * Toggle collapse if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsNavCollapsed(true)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Navigation = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setIsNavCollapsed);

    const toggleCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }

    return (
        <>
            <MDBNavbar fixed='top' bgColor="dark" light className='navbar-expand-lg my-0 px-4 py-0 ' id="navbar"
                       ref={wrapperRef}>
                <MDBContainer className="my-0 py-1">
                    <NavBrand onClick={setIsNavCollapsed}/>
                    <div className={`${props.path[1] !== "catalog" ? "d-none" : ""} w-100 d-md-none d-lg-none`}/>
                    <MDBBadge id="navbarSecondText" className={
                        `${props.path[1] !== "catalog" ? "d-none" : ""} p-0 mt-0 mb-1 my-md-0 my-lg-0`}>
                        <h4 className="p-lg-0 m-0">10 аромапалочек за 80 гривен</h4>
                    </MDBBadge>
                    <NavToggler handleNavCollapse={toggleCollapse}
                                isNavCollapsed={isNavCollapsed} path={props.path}/>
                    <div id="navbarCollapse"
                         className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                        <MDBNavbarNav right fullWidth={false} className='navContent pb-3 pb-lg-0 mt-4 mt-lg-0'>
                            <NavButton text="Каталог" link="/catalog/all" onClick={setIsNavCollapsed}
                                       dNone={props.path[1] === "catalog"}/>
                            <NavButton text="О Нас" link="/signup" onClick={setIsNavCollapsed}/>
                            <NavButton text="Новости" link="/signup" onClick={setIsNavCollapsed}/>
                            <NavButton text="Доставка" link="/signup" onClick={setIsNavCollapsed}/>
                            <NavSocial onClick={setIsNavCollapsed}/>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navigation;