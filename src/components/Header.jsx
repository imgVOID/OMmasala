import React from 'react';
import {useLocation} from "react-router-dom";
import Navigation from "./Navigation";
import HeaderDescription from "./HeaderDescription";
import HeaderButton from "./HeaderButton";


export default function Header() {
    const location = useLocation();
    //destructuring pathname from location
    const {pathname} = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    function LineBreakCatalog() {
        return <br className={`${splitLocation[1] !== "catalog" ? "d-none" : ""} d-lg-none d-md-none`}/>
    }

    return (
        <header>
            <Navigation path={splitLocation}/>
            <div className='text-center bg-image shadow mt-2 mt-lg-5'
                 style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 400}}>
                <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white mt-5 pt-5 p-lg-0 m-lg-0'>
                            <h1 className={`${splitLocation[1] === "catalog" ? "d-none" : ""} mb-0 d-lg-block d-md-block`}>
                                OM MASALA
                            </h1>

                            <HeaderDescription type={splitLocation[2]} />

                            <div className='mb-5 px-5 mx-3 m-lg-0 p-lg-0 m-lg-0'>
                                <HeaderButton name="all" text="Все аромапалочки"
                                              dNone={splitLocation[1] !== 'catalog'} path={splitLocation}/>
                                <LineBreakCatalog/>
                                <HeaderButton name="nature" text='"Nature"' path={splitLocation} />
                                <HeaderButton name="mandir" text='"Mandir"' path={splitLocation} />
                                <LineBreakCatalog/>
                                <HeaderButton name="tibetan" text='"Tibetan"' path={splitLocation} />
                                <HeaderButton name="krishna" text='"Krishna"' path={splitLocation} />
                                <LineBreakCatalog/>
                                <HeaderButton name="holders" text="Подставочки"
                                              dNone={splitLocation[1] !== 'catalog'} path={splitLocation} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}