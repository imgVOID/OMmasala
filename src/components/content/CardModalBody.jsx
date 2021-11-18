import React from "react";
import {
    MDBModalBody,
    MDBAccordion,
    MDBAccordionItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn, MDBIcon, MDBContainer
} from 'mdb-react-ui-kit';

const CardModalBody = props => {
    const HeaderTitle = props => {
        return <div className="w-100 row m-0 p-0">
            <span className="col-11 w-90">{props.link[0]}</span>
            <MDBIcon className="col-1 px-0 pt-0" icon="chevron-down" size="lg" fas/>
        </div>
    }

    return (
        <MDBModalBody className="bg-dark">
            <MDBAccordion initialActive={props.card.name}>
                {Object.entries(props.vendors).map((link) => {
                    return <MDBAccordionItem collapseId={link[0]} headerTitle={<HeaderTitle link={link}/>}
                                             className="text-uppercase justify-content-center">
                        <MDBContainer>
                        <div className="text-uppercase justify-content-center d-block w-100 text-center">
                            <a className="p-0 b-0" href={props.card.links[link[0]]} target="_blank">
                                <MDBBtn block color="light" className="border-0 font-weight-bold" size="lg">
                                    Заказать на <span>{link[0]}</span>
                                </MDBBtn>
                            </a>
                        </div>
                        <MDBTable className="mb-0 pb-0">
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" className="text-capitalize text-center pb-1 pt-3"> </th>
                                    <th scope="col" className="text-lowercase text-center pb-1 pt-3">
                                        Мин.&nbsp;заказ
                                    </th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <td className="text-capitalize font-italic text-center pt-1">
                                    {link[1]["delivery"]}
                                </td>
                                <td className="text-lowercase text-center pt-1">
                                    {link[1]["min_amount"]}&nbsp;₴
                                </td>
                            </MDBTableBody>
                        </MDBTable>
                        </MDBContainer>
                    </MDBAccordionItem>
                })}
            </MDBAccordion>
        </MDBModalBody>
    );
}

export default CardModalBody;


