import React from 'react';
import {useHistory} from "react-router-dom";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import HeaderButton from "./HeaderButton";

const CarouselCaption = props => {
    const history = useHistory();

    return <MDBCarouselCaption className="" style={{"height": "100%"}}>
        <div style={{"height": "30%"}} className="d-none d-lg-block"/>
        <h1 className={'titleHeader mb-0 d-lg-block d-md-block align-bottom mt-md-5 pt-md-2'}>
            Om MASALA
        </h1>
        <h2 className={'headerDescription text-warning px-5 mx-4 align-bottom'}>
            {props.text}
        </h2>
        <div className='px-5 mx-3 m-lg-0 p-lg-0 m-lg-0'>
            <HeaderButton linkLocal="nature" text='Nature' color="warning" size="lg" path={props.path}
                          style={{"font-family":"'Yuji Mai', cursive"}} history={history} landing={true}/>
            <HeaderButton linkLocal="mandir" text='Mandir' color="warning" size="lg" path={props.path}
                          style={{"font-family":"'Yuji Mai', cursive"}} history={history} landing={true}/>
            <br className="d-lg-none"/>
            <HeaderButton linkLocal="tibetan" text='Tibetan' color="warning" size="lg" path={props.path}
                          style={{"font-family":"'Yuji Mai', cursive"}} history={history} landing={true}/>
            <HeaderButton linkLocal="krishna" text='Krishna' color="warning" size="lg" path={props.path}
                          style={{"font-family":"'Yuji Mai', cursive"}} history={history} landing={true}/>
        </div>
    </MDBCarouselCaption>
}

const HeaderCarousel = props => {
    const display = props.dNoneSmall ? "d-none d-md-block d-lg-block" : ""
    if (props.dNoneSmall) {
        return <MDBCarousel className={"mt-4 d-none d-lg-block d-md-block" + display} fade showControls showIndicators interval={4600}>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <div className='mask' style={{backgroundColor: 'rgba(37, 37, 37, 0.75)'}}/>
                    <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' alt='...'/>
                    <CarouselCaption path={props.path} text="индийские пыльцовые благовония ручной работы"/>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <div className='mask' style={{backgroundColor: 'rgba(37, 37, 37, 0.75)'}}/>
                    <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...'/>
                    <CarouselCaption path={props.path} text="индийские пыльцовые благовония ручной работы"/>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>

    }

}

export default HeaderCarousel