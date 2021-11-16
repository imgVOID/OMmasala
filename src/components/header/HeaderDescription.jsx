import React from 'react';

const description = {
    "all" : {
        "text": `индийские пыльцовые аромапалочки ручной работы`,
        "styles": "mx-3"
    },
    "nature": {
        "text": "натуральные аромапалочки масала с единым ароматом",
        "styles": "mx-4"
    },
    "tibetan": {
        "text": "пыльцовые аромапалочки с высокогорными растениями",
        "styles": "mx-4"
    },
    "krishna": {
        "text": "аромакомпозиции масала в честь бога Кришны",
        "styles": "mx-4"
    },
    "mandir": {
        "text": "пыльцовые аромапалочки масала из храмов Индии",
        "styles": "mx-4"
    },
    "holders": {
        "text": "подставки для аромапалочек",
        "styles": "mx-5"
    }
}

const HeaderDescription = props => {
    if (props.type in description) {
        return <h2 className={"headerDescription text-warning m-0 px-5 " + description[props.type]["styles"]}>
            {description[props.type]["text"]}
        </h2>
    } else {
        return <h2 className="headerDescription text-warning m-0">
            индийские пыльцовые благовония <br className="d-md-none d-lg-none"/> ручной работы
        </h2>
    }
}

export default HeaderDescription;