import React from 'react';

const description = {
    "all" : {
        "text": "наборы из 10-ти пыльцовых аромапалочек ручной работы",
        "styles": "font-italic text-warning px-3"
    },
    "global": {
        "text": "индийские пыльцовые благовония ручной работы",
        "styles": "font-italic text-warning px-5 mx-5"
    },
    "nature": {
        "text": "натуральные аромапалочки масала с единым ароматом",
        "styles": "font-italic text-warning px-5 mx-4"
    },
    "tibetan": {
        "text": "экологичные высокогорные аромакомпозиции масала",
        "styles": "font-italic text-warning px-5 mx-4"
    },
    "krishna": {
        "text": "аромакомпозиции масала в честь бога Кришны",
        "styles": "font-italic text-warning px-5 mx-4"
    },
    "mandir": {
        "text": "пыльцовые аромапалочки масала из храмов Индии",
        "styles": "font-italic text-warning px-5 mx-4"
    },
    "holders": {
        "text": "подставки для аромапалочек из дерева, металла и керамики",
        "styles": "font-italic text-warning px-5"
    }
}

const HeaderDescription = (props) => {

    if (props.type in description) {
        return <h5 className={description[props.type]["styles"]}>
            {description[props.type]["text"]}
        </h5>
    } else {
        return <h5 className="font-italic text-warning px-5">
            индийские пыльцовые благовония <br className="d-md-none d-lg-none"/> ручной работы
        </h5>
    }
}

export default HeaderDescription;