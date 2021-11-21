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
            <span className="col-11">{props.title}</span>
            <MDBIcon icon="angle-up" size="sm" fas className="col-1 mx-0 px-0 pt-1 pe-lg-0 ps-lg-2 pe-md-0 ps-md-2"/>
        </h5>
    }

    return (
        <MDBModalBody className="bg-light">
            <MDBAccordion flush>
                {Object.keys(props.vendors).map((vendorTitle) => {
                    return <MDBAccordionItem className="justify-content-center bg-light text-center"
                        collapseId={vendorTitle} headerTitle={<HeaderTitle title={vendorTitle}/>}>
                        <MDBContainer className="p-0 p-md-3 p-lg-3">
                            <a className="p-0 b-0" href={props.card.links[vendorTitle]} target="_blank">
                                <MDBBtn block color="light" className="font-weight-bold mt-1" size="lg">
                                    Заказать на <span>{vendorTitle}</span>
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
                                    {
                                        props.vendors[vendorTitle]["delivery"].map((delivery, index) => {
                                            return <tr className=" m-0 p-0">
                                                <td className="text-center p-0 pt-1 pb-0 border-0">
                                                    {delivery}
                                                </td>
                                                <td className="text-center p-0 pt-1 border-0">
                                                    {props.vendors[vendorTitle]["min_amount"][index]}
                                                </td>
                                            </tr>
                                        })
                                    }
                                </MDBTableBody>
                            </MDBTable>
                            {
                                props.vendors[vendorTitle].gift
                                    ? <MDBTypography tag='small' className="p-0 mt-3 mb-0 d-block font-italic">
                                        {props.vendors[vendorTitle].gift}!
                                    </MDBTypography> : ""
                            }
                        </MDBContainer>
                    </MDBAccordionItem>
                })}
            </MDBAccordion>
        </MDBModalBody>
    );
}

export default CardModalBody;


