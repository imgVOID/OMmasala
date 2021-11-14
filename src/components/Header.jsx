import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {
    MDBBtn
} from 'mdb-react-ui-kit';
import Navigation from "./Navigation";

export default function Header() {
    const location = useLocation();
    //destructuring pathname from location
    const {pathname} = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <header className="mb-4">
            <Navigation path={splitLocation}/>

            <div className='p-4 text-center bg-image'
                 style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 400}}>
                <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100 p-5'>
                        <div className='text-white'>
                            <h1 className='mb-3 mt-4 mt-lg-0'>
                                OM MASALA
                            </h1>
                            <h5 className='mb-3 font-italic text-warning'>
                                индийские пыльцовые благовония ручной работы
                            </h5>
                            <div className={`${splitLocation[1] !== "catalog" ? "d-none" : ""} mb-4 mb-lg-0`}>
                                <Link to="/catalog/all">
                                    <MDBBtn outline size="lg" className="m-2 text-light"
                                            color={splitLocation[2] === "all" ? "warning" : "light"}>
                                        Все аромапалочки
                                    </MDBBtn>
                                </Link>
                                <Link to="/catalog/nature">
                                    <MDBBtn outline size="lg" className="m-2 text-light"
                                            color={splitLocation[2] === "nature" ? "warning" : "light"}>
                                        "Nature"
                                    </MDBBtn>
                                </Link>
                                <Link to="/catalog/mandir">
                                    <MDBBtn outline size="lg" className="m-2 text-light"
                                            color={splitLocation[2] === "mandir" ? "warning" : "light"}>
                                        "Mandir"
                                    </MDBBtn>
                                </Link>
                                <Link to="/catalog/tibetan">
                                    <MDBBtn outline size="lg" className="m-2 text-light"
                                            color={splitLocation[2] === "tibetan" ? "warning" : "light"}>
                                        "Tibetan"
                                    </MDBBtn>
                                </Link>
                                <Link to="/catalog/krishna">
                                    <MDBBtn outline size="lg" className="m-2 text-light"
                                            color={splitLocation[2] === "krishna" ? "warning" : "light"}>
                                        "Krishna"
                                    </MDBBtn>
                                </Link>
                                <Link to="/catalog/holders">
                                    <MDBBtn outline size="lg" className="m-2 text-light"
                                            color={splitLocation[2] === "holders" ? "warning" : "light"}>
                                        Все Подставочки
                                    </MDBBtn>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}