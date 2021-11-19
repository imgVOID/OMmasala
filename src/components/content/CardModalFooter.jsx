import React from "react";
import {
    MDBModalFooter,
} from 'mdb-react-ui-kit';

const CardModalFooter = props => {
    return <MDBModalFooter className="text-center justify-content-center
                     text-dark bg-light">
        <h3 className={`${props.path[2] === "holders" ? "d-none" : "fontCursive"} p-0 m-0`}>
            10 аромапалочек "Om Masala" за {props.card.price}₴
        </h3>
        <h3 className={`${props.path[2] !== "holders" ? "d-none" : "fontCursive"} p-0 m-0`}>
            Подставка для благовоний за {props.card.price}&nbsp;₴
        </h3>
    </MDBModalFooter>
}

export default CardModalFooter;