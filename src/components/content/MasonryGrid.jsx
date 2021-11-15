import React from 'react';
import Card from "./Card";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {MDBContainer} from "mdb-react-ui-kit";


const MasonryGrid = props => {
    return (
        <MDBContainer className="Grid">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
                <Masonry>
                    {props.cards.map((card) => {
                        return (
                            <Card key={card.id} className={card.category}
                                  name={card.category + ' ' + card.name}
                                  image={card.image} description={card.description}/>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </MDBContainer>
    );
}

export default MasonryGrid;