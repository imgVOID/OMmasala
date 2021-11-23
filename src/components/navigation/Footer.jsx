import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBBtnGroup,
    MDBBtn, MDBTypography
} from 'mdb-react-ui-kit';

const Footer = props => {
    return <MDBFooter backgroundColor='light' className='text-center text-lg-left w-100 pt-4'>
        <MDBContainer className='p-5'>
            <MDBRow>
                <MDBCol lg='2' md='4' className="col-5 px-3 px-lg-4 py-4">
                    <MDBBtnGroup vertical className="w-100 m-auto">
                        {
                            Object.keys(props.vendors).map((vendorTitle) => {
                                return <MDBBtn color="light" className="font-weight-bold"
                                               href={props.vendors[vendorTitle]["link"]}>
                                    {vendorTitle}
                                </MDBBtn>
                            })
                        }
                    </MDBBtnGroup>
                </MDBCol>
                <MDBCol lg='3' md='8' className="col-7 py-4">
                    <h5 className='text-uppercase text-start d-block mb-2'>Акция!</h5>
                    <h4 className=" text-start p-0 m-0 fontCursive">
                        С OLX Доставкой в подарок подставка или 10 палочек Hindu Karnataka!
                    </h4>
                </MDBCol>
                <MDBCol lg='4' md='7' className="col-12 py-4">
                    <h5 className='text-uppercase d-block text-end'>Аромапалочки</h5>
                    <h5 className='text-uppercase d-block text-end mb-2'>Om Masala</h5>
                    <h4 className="p-0 m-0 text-end fontCursive">
                        Натуральные индийские пыльцовые благовония ручной работы. Доставка по Украине
                    </h4>
                </MDBCol>
                <MDBCol lg='3' md='4' className="col-12 py-4">
                    <h5 className='text-uppercase text-center d-block'>Контакты</h5>
                    <MDBListGroup flush className='col list-unstyled'>
                        <MDBListGroupItem>
                            <MDBTypography tag={"small"}>
                                <a href='#!' className='text-dark'>
                                    <MDBIcon icon="phone" fas/> +380954507878
                                </a>
                            </MDBTypography>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            <MDBTypography tag={"small"}>
                                <a href='#!' className='text-dark'>
                                    ommasala@gmail.com
                                </a>
                            </MDBTypography>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            <MDBTypography tag={"small"}>
                                <a href='#!' className='text-dark'>
                                    @ommasala
                                </a>
                            </MDBTypography>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
        <div className='text-center p-3 bg-dark shadow shadow-lg'>
            <h4 className='fontCursive m-0 p-0'>
                &copy; {new Date().getFullYear()}{' '}
                <a href='https://mdbootstrap.com/' className="text-warning">
                    Om Masala
                </a>

            </h4>
        </div>
    </MDBFooter>
}

export default Footer