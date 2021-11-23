import React from "react";
import {Helmet} from 'react-helmet';
import {Scrollbars} from 'react-custom-scrollbars-2';
import Header from "./components/header/Header"
import {Switch, Route, useLocation} from 'react-router-dom';
import Test from './components/Test';
import Catalog from "./pages/Catalog";
import useWindowDimensions from "./components/useWindowDimensions";


function Meta() {
    return <Helmet>
        <meta name="description" content="Web site created using create-react-app"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <meta name="theme-color" content="#fafafa"/>
        <meta charSet="utf-8"/>
    </Helmet>
}

function App() {
    const location = useLocation();
    //destructuring pathname from location
    const {pathname} = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const {height, width} = useWindowDimensions();

    return (
        <Scrollbars universal style={{"height": height, "width": width}}>
            <Meta/>
            <div id="App">
                <section className="Header">
                    <Header path={splitLocation}/>
                </section>
                <Switch>
                    <Route path='/catalog' component={Catalog}>
                        <Catalog path={splitLocation}/>
                    </Route>
                    <Route exact path='/'>
                        <Test/>
                    </Route>
                    <Route exact path='/signup'>
                        <Test/>
                    </Route>
                </Switch>
            </div>
        </Scrollbars>
    );
}

export default App;
