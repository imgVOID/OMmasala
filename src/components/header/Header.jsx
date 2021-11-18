import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from "../navigation/Navigation";
import HeaderCarousel from "./HeaderCarousel";
import HeaderStatic from "./HeaderStatic";
import Catalog from "../../pages/Catalog";


const Header = props => {
    return <header>
            <Navigation path={props.path}/>
            <Switch>
                <Route path='/catalog' component={Catalog}>
                    <HeaderStatic path={props.path}/>
                </Route>
                <Route exact path='/'>
                    <HeaderCarousel path={props.path} dNoneSmall={true}/>
                    <HeaderStatic path={props.path} dNoneBig={true}/>
                </Route>
                <Route exact path='/signup'>
                    <HeaderCarousel path={props.path} dNoneSmall={true}/>
                    <HeaderStatic path={props.path} dNoneBig={true}/>
                </Route>
            </Switch>
        </header>
}

export default Header