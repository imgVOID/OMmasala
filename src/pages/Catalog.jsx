import React from "react";
import MasonryGrid from "../components/content/MasonryGrid";
import {Switch, Route} from 'react-router-dom';
import products from '../data/products.json'

const Routes = props => {
    return props.categories.map((item) => (
        <Route exact path={'/catalog/' + item} component={Catalog}>
            <MasonryGrid products={products} vendors={props.vendors} path={props.path} category={item}/>
        </Route>
    ));
}

const Catalog = props => {
    return (
        <Switch>
            <Route exact path='/catalog' component={Catalog}>
                <MasonryGrid exclude={"holders"} products={products} vendors={props.vendors} path={props.path} />
            </Route>
            <Routes categories={Object.keys(products)} path={props.path} vendors={props.vendors}/>
        </Switch>

    );
}

export default Catalog;
