import React from "react";
import MasonryGrid from "../components/content/MasonryGrid";
import {Switch, Route} from 'react-router-dom';
import vendors from '../data/vendors.json'
import products from '../data/products.json'

const Routes = props => {
    return props.categories.map((item) => (
        <Route exact path={'/catalog/' + item} component={Catalog}>
            <MasonryGrid products={products} vendors={vendors} path={props.path} category={item}/>
        </Route>
    ));
}

const Catalog = props => {
    return (
        <Switch>
            <Route exact path='/catalog/' component={Catalog}>
                <MasonryGrid exclude={"holders"} products={products} vendors={vendors} path={props.path} />
            </Route>
            <Routes categories={Object.keys(products)} path={props.path}/>
        </Switch>

    );
}

export default Catalog;
