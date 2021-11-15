import React from 'react';
import {useLocation} from "react-router-dom";
import {Switch, Route} from 'react-router-dom';
import Navigation from "./Navigation";
import JumbotronCarousel from "./JumbotronCarousel";
import JumbotronStatic from "./JumbotronStatic";
import Catalog from "../pages/Catalog";


export default function Header() {
    const location = useLocation();
    //destructuring pathname from location
    const {pathname} = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <header>
            <Navigation path={splitLocation}/>
            <Switch>
                <Route path='/catalog' component={Catalog}>
                    <JumbotronStatic path={splitLocation}/>
                </Route>
                <Route exact path='/'>
                    <JumbotronCarousel path={splitLocation} dNoneSmall={true}/>
                    <JumbotronStatic path={splitLocation} dNoneBig={true}/>
                </Route>
                <Route exact path='/signup'>
                    <JumbotronCarousel path={splitLocation} dNoneSmall={true}/>
                    <JumbotronStatic path={splitLocation} dNoneBig={true}/>
                </Route>
            </Switch>
        </header>
    );
}