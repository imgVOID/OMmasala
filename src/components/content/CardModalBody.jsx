import React from 'react';
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn, MDBIcon, MDBContainer
} from 'mdb-react-ui-kit';

const CardModalBody = props => {
    const HeaderTitle = props => {
        return <h5 className="row w-100 m-0 p-0">
            <span className="col-11">{props.link[0]}</span>
            <MDBIcon className="col-1 mx-0 p-0 pt-1" icon="angle-up" size="sm" fas/>
        </h5>
    }

    return (
            <MDBAccordion>
                {Object.entries(props.vendors).map((link) => {
                    return <MDBAccordionItem collapseId={link[0]}
                                             headerTitle={
                                                 <HeaderTitle link={link}/>
                                             }
                                             className="text-uppercase justify-content-center font-weight-bold">
                        <MDBContainer>
                                <a className="p-0 b-0" href={props.card.links[link[0]]} target="_blank">
                                    <MDBBtn block color="light" className="font-weight-bold mt-1" size="lg">
                                        Заказать на <span>{link[0]}</span>
                                    </MDBBtn>
                                </a>
                            <MDBTable className="mb-0 pb-0">
                                <MDBTableHead>
                                    <tr>
                                        <th scope="col" className="text-capitalize text-center pb-1 pt-3">   </th>
                                        <th scope="col" className="text-lowercase font-italic text-center pb-1 pt-3">
                                            Мин.&nbsp;заказ
                                        </th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <td className="text-capitalize text-center pt-1">
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
    );
}

export default CardModalBody;


