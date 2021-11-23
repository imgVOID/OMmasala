import React from 'react';
import Card from "./Card";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


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

        products = products
            .map((value) => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value)

    } else {
        products = props.products[props.category]
    }

    return (
        <section className="Catalog">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 930: 3, 1200: 4}} className="container py-3">
                <Masonry>
                    {products.map((product) => {
                        return (
                            <Card card={product} className={product.category} vendors={props.vendors}
                                  path={props.path} links={product.links} category={props.category} />
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
}

export default MasonryGrid;