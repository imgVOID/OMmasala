import React from 'react';
import Card from "./Card";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {MDBContainer} from "mdb-react-ui-kit";


const MasonryGrid = props => {
    let products = []

    if (!props.category) {
        let allProductsView = {}

        if (props.exclude) {
            Object.assign(allProductsView, props.products);
            delete allProductsView[props.exclude]
        }

        Object.values(allProductsView).map((cardList) => {
            Array.prototype.push.apply(products, cardList);
        })
    } else {
        products = props.products[props.category]
    }

    products = products
        .map((value) => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)

    return (
        <MDBContainer className="Grid mt-3">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 930: 3, 1100: 4}}>
                <Masonry>
                    {products.map((product) => {
                        return (
                            <Card card={product} className={product.category} vendors={props.vendors}
                                  path={props.path} links={product.links}/>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </MDBContainer>
    );
}

export default MasonryGrid;