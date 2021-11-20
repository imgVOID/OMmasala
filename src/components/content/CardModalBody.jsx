import React from 'react';
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn, MDBIcon, MDBContainer, MDBModalBody, MDBTypography
} from 'mdb-react-ui-kit';

const CardModalBody = props => {

    const HeaderTitle = props => {
        return <h5 className="row w-100 m-0 p-0">
            <span className="col-11">{props.link[0]}</span>
            <MDBIcon icon="angle-up" size="sm" fas className="col-1 mx-0 px-0 pt-1 pe-lg-0 ps-lg-2 pe-md-0 ps-md-2"/>
        </h5>
    }

    const DeliveryTable = props => {
        return props.vendor["delivery"].map((delivery, index) => {
            return <tr className=" m-0 p-0">
                <td className="text-center p-0 pt-1 pb-0 border-0">
                    {delivery}
                </td>
                <td className="text-center p-0 pt-1 border-0">
                    {props.vendor["min_amount"][index]}
                </td>
            </tr>
        })
    }

    return (
        <MDBModalBody className="bg-light">
            <MDBAccordion flush>
                {Object.entries(props.vendors).map((vendor) => {
                    return <MDBAccordionItem
                        collapseId={vendor[0]} headerTitle={<HeaderTitle link={vendor}/>}
                        className="justify-content-center bg-light text-center">
                        <MDBContainer className="p-0 p-md-3 p-lg-3">
                            <a className="p-0 b-0" href={props.card.links[vendor[0]]} target="_blank">
                                <MDBBtn block color="light" className="font-weight-bold mt-1" size="lg">
                                    Заказать на <span>{vendor[0]}</span>
                                </MDBBtn>
                            </a>
                            <MDBTable className="mb-0 pb-0 bg-light mt-1">
                                <MDBTableHead>
                                    <tr>
                                        <th scope="col" className="font-italic text-center pb-1 pt-3">&nbsp;</th>
                                        <th scope="col" className="font-italic text-center pb-1 pt-3">
                                            мин.&nbsp;заказ
                                        </th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <DeliveryTable vendor={vendor[1]}/>
                                </MDBTableBody>
                            </MDBTable>
                            <MDBTypography tag='small' className={
                                props.vendors[vendor[0]].gift ? "p-0 mt-3 mb-0 d-block font-italic" : "d-none"
                            }>
                                    {props.vendors[vendor[0]].gift}!
                            </MDBTypography>
                        </MDBContainer>
                    </MDBAccordionItem>
                })}
            </MDBAccordion>
        </MDBModalBody>
    );
}

export default CardModalBody;


