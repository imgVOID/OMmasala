import React from "react";
import {Helmet} from 'react-helmet';
import Header from "./components/Header"
import { Switch, Route } from 'react-router-dom';
import Test from './components/Test';
import Catalog from "./pages/Catalog";

function App() {
    return (
        <div className="App">
            <Helmet>
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
