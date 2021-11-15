import React from "react";
import HeaderDescription from "./HeaderDescription";
import HeaderButton from "./HeaderButton";

const HeaderStatic = (props) => {
    let display = ""
    if (props.dNoneBig) {
        display = "d-lg-none d-md-none"
    }
    return <div className={'text-center bg-image shadow mt-2 mt-lg-5 jumbotron-static ' + display}
                style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 400}}>
        <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white mt-5 pt-5 p-lg-0 m-lg-0'>
                    <h1 className={`${props.path[1] === "catalog" ? "d-none" : ""} mb-0 d-lg-block d-md-block`}>
                        OM MASALA
                    </h1>

                    <HeaderDescription type={props.path[2]}/>

                    <div className='mb-5 px-5 mx-3 m-lg-0 p-lg-0 m-lg-0'>
                        <HeaderButton name="all" text="Все аромапалочки"
                                      dNone={props.path[1] !== 'catalog'} path={props.path}/>
                        <br className={`d-lg-none`}/>
                        <HeaderButton name="nature" text='Nature' path={props.path}/>
                        <HeaderButton name="mandir" text='Mandir' path={props.path}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton name="tibetan" text='Tibetan' path={props.path}/>
                        <HeaderButton name="krishna" text='Krishna' path={props.path}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton name="holders" text="Подставочки"
                                      dNone={props.path[1] !== 'catalog'} path={props.path}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default HeaderStatic