import React from "react";
import {Helmet} from 'react-helmet';
import Header from "./components/header/Header"
import {Switch, Route} from 'react-router-dom';
import Test from './components/Test';
import Catalog from "./pages/Catalog";

function App() {
    return (
        <div className="App">
            <Helmet>
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Road+Rage&display=swap" rel="stylesheet"/>
                <meta name="description" content="Web site created using create-react-app" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <style>{'body { background-color: #fafafa; }'}</style>
            </Helmet>
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
