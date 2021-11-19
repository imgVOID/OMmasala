import React from "react";
import {Helmet} from 'react-helmet';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from "./components/header/Header"
import {Switch, Route, useLocation} from 'react-router-dom';
import Test from './components/Test';
import Catalog from "./pages/Catalog";
import useWindowDimensions from "./components/useWindowDimensions";


function Meta() {
    return <Helmet>
        <meta name="description" content="Web site created using create-react-app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
    const { height } = useWindowDimensions();

    return (
        <div className="App">
            <Meta/>
            <Scrollbars style={{ "height": height }}>
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
        </Scrollbars>
        </div>
    );
}

export default App;
