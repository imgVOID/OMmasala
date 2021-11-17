import React from 'react';
import Card from "./Card";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {MDBContainer} from "mdb-react-ui-kit";


const MasonryGrid = props => {
    return (
        <MDBContainer className="Grid mt-3">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 930: 3, 1100: 4}}>
                <Masonry>
                    {props.cards.map((card) => {
                        return (
                            <Card key={card.id} className={card.category} price={card.price}
                                  name={card.name} category={card.category}
                                  image={card.image} description={card.description}/>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </MDBContainer>
    );
}

export default MasonryGrid;