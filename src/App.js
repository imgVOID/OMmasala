import React from "react";
import {Helmet} from 'react-helmet';
import Header from "./components/header/Header"
import {Switch, Route} from 'react-router-dom';
import Test from './components/Test';
import Catalog from "./pages/Catalog";

function Meta() {
    return <Helmet>
        <meta name="description" content="Web site created using create-react-app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#fafafa"/>
        <meta charSet="utf-8"/>
    </Helmet>
}

function App() {
    return (
        <div className="App">
            <Meta/>
            <section className="Header">
                <Header/>
            </section>
            <Switch>
                <Route path='/catalog' component={Catalog}>
                    <Catalog/>
                </Route>
                <Route exact path='/signup'>
                    <Test/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
