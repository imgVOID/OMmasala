import React from "react";
import {useHistory, Link} from "react-router-dom";
import HeaderDescription from "./HeaderDescription";
import HeaderButton from "./HeaderButton";

const HeaderStatic = props => {
    const landing = props.path[1] !== 'catalog'
    const display = props.dNoneBig ? "d-lg-none d-md-none" : ""

    const history = useHistory();

    return <div className={'headerImage text-center bg-image shadow jumbotron-static mt-4' + display}>
        <div className='mask' style={{backgroundColor: 'rgba(37, 37, 37, 0.65)'}}>
            <div className='d-flex justify-content-center align-items-center h-100 pt-5 mt-4 mt-md-0 mt-lg-5'>
                <div className='container text-white px-3'>
                    <h1 className="text-uppercase titleHeader mb-0 p-0 mt-lg-0 mt-md-0">
                        { props.path[1] ? <Link to="/" className="text-light p-0 m-0">
                            Om Masala
                        </Link> : "Om Masala" }
                    </h1>
                    <HeaderDescription type={props.path[2]}/>
                    <div className='pb-5 pb-lg-0 pb-md-0 mt-lg-1'>
                        <HeaderButton linkLocal="" text="Аромапалочки" history={history}
                                      dNone={props.path[1] !== 'catalog'} path={props.path}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton linkLocal="nature" text='Nature'
                                      history={history} path={props.path} bold={true} landing={landing}/>
                        <HeaderButton linkLocal="hindu" text='Hindu'
                                      history={history} path={props.path} bold={true} landing={landing}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton linkLocal="shri" text='Shri'
                                      history={history} path={props.path} bold={true} landing={landing}/>
                        <HeaderButton linkLocal="krishna" text='Krishna'
                                      history={history} path={props.path} bold={true} landing={landing}/>
                        <br className={`d-lg-none d-md-none`}/>
                        <HeaderButton linkLocal="holders" text="Подставки"
                                      history={history} dNone={props.path[1] !== 'catalog'} path={props.path}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default HeaderStatic