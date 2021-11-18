import React from "react";
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBModalTitle,
    MDBAccordion,
    MDBAccordionItem, MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';

const CardModal = props => {
    return (
        <MDBModal show={props.basicModal} getOpenState={(e) => props.setBasicModal(e)} tabIndex='-1' className="pt-5">
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader className="justify-content-center">
                        <MDBModalTitle className="text-center">
                            <span className="modalItemTitle text-uppercase font-weight-bold d-block">
                                {props.category + " " +  props.name}
                            </span>
                        </MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBAccordion initialActive='accordionCollapse1'>
                            {Object.entries(props.vendors).map((link, count) => {
                                return <MDBAccordionItem collapseId={link[0]} headerTitle={link[0]}
                                                         className="text-uppercase">
                                    <MDBTable>
                                        <MDBTableHead>
                                            <tr>
                                                <th className="text-capitalize text-center">Доставка</th>
                                                <th className="text-capitalize text-center">Мин. заказ</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <td className="text-capitalize text-center pt-2">
                                                {link[1]["delivery"]}
                                            </td>
                                            <td className="text-capitalize text-center pt-2">
                                                {link[1]["min_amount"]} грн
                                            </td>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBAccordionItem>
                            })}
                        </MDBAccordion>
                    </MDBModalBody>
                    <MDBModalFooter className="fontCursive text-center justify-content-center">
                        <h2>10 пыльцовых аромапалочек за {props.price} грн</h2>
                    </MDBModalFooter>

                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default CardModal;


