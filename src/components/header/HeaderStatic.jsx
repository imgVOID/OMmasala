import React from "react";
import HeaderDescription from "./HeaderDescription";
import HeaderButton from "./HeaderButton";

const HeaderStatic = props => {
    let header = props.path[1] !== 'catalog'
    let display = ""
    if (props.dNoneBig) {
        display = "d-lg-none d-md-none"
    }
    return <div className={'headerImage text-center bg-image shadow mt-5 mt-md-4 mt-lg-4 jumbotron-static ' + display}>
        <div className='mask' style={{backgroundColor: 'rgba(37, 37, 37, 0.65)'}}>
            <div className='d-flex justify-content-center align-items-center h-100 pt-5 mt-lg-4'>
                <div className='container text-white px-3'>
                    <h1 className='titleHeader m-0 p-0 mt-4 mt-lg-0 mt-md-0'>
                        OM MASALA
                    </h1>
                    <HeaderDescription type={props.path[2]}/>
                    <div className='pb-5 pb-lg-0 pb-md-0 mt-1'>
                        <HeaderButton name="all" text="Аромапалочки"
                                      dNone={props.path[1] !== 'catalog'} path={props.path}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton name="nature" text='Nature' path={props.path} bold={true} header={header}/>
                        <HeaderButton name="mandir" text='Mandir' path={props.path} bold={true} header={header}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton name="tibetan" text='Tibetan' path={props.path} bold={true} header={header}/>
                        <HeaderButton name="krishna" text='Krishna' path={props.path} bold={true} header={header}/>
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