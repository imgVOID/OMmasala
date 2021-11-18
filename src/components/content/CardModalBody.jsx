import React from "react";
import {
    MDBModalBody,
    MDBAccordion,
    MDBAccordionItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn
} from 'mdb-react-ui-kit';

const CardModalBody = props => {
    return (
        <MDBModalBody className="bg-dark">
            <MDBAccordion initialActive='accordionCollapse1'>
                {Object.entries(props.vendors).map((link) => {
                    return <MDBAccordionItem collapseId={link[0]} headerTitle={link[0]}
                                             className="text-uppercase justify-content-center">
                        <div className="text-uppercase justify-content-center d-block w-100 text-center">
                            <a className="p-0 b-0" href={props.card.links[link[0]]}>
                                <MDBBtn block color="light" className="border-0 font-weight-bold" size="lg">
                                    Заказать на <span>{link[0]}</span>
                                </MDBBtn>
                            </a>
                        </div>
                        <MDBTable className="mb-0 pb-0">
                            <MDBTableHead>
                                <tr>
                                    <th className="text-capitalize text-center pb-1 pt-3"> </th>
                                    <th className="text-lowercase text-center pb-1 px-2 pt-3">
                                        Мин. заказ
                                    </th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <td className="text-capitalize font-italic text-center pt-1">
                                    {link[1]["delivery"]}
                                </td>
                                <td className="text-lowercase text-center pt-1 px-3">
                                    {link[1]["min_amount"]} ₴
                                </td>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBAccordionItem>
                })}
            </MDBAccordion>
        </MDBModalBody>
    );
}

export default CardModalBody;


