import React from "react";
import MasonryGrid from "../components/content/MasonryGrid";
import { Switch, Route } from 'react-router-dom';

const aromaSticks = [
    {
        id: "1",
        name: "Saffron",
        category: "Nature",
        image: "https://apricot.com.ua/content/images/43/700x700l80mc0/81000864133007.webp",
        price: "50"
    },
    {
        id: "2",
        name: "Sandalwood",
        category: "Nature",
        image: "https://apricot.com.ua/content/images/46/700x700l80mc0/54691989759895.webp",
        price: "50"
    },
    {
        id: "3",
        name: "Lavender",
        category: "Nature",
        image: "https://apricot.com.ua/content/images/35/700x700l80mc0/31262777313237.webp",
        price: "50"
    },
    {
        id: "4",
        name: "Eucalyptus",
        category: "Nature",
        description: "листья и масло эвкалипта",
        image: "https://apricot.com.ua/content/images/30/700x700l80mc0/73653555037934.webp",
        price: "50"
    },
    {
        id: "5",
        name: "Mango",
        category: "Nature",
        image: "https://apricot.com.ua/content/images/34/700x700l80mc0/86496755347827.webp",
        price: "50"
    },
    {
        id: "6",
        name: "Rose",
        category: "Nature",
        image: "https://apricot.com.ua/content/images/22/700x700l80mc0/95093074469640.webp",
        price: "50"
    },
    {
        id: "7",
        name: "Frankincense",
        category: "Nature",
        description: "ладан, смола Босвелии",
        image: "https://apricot.com.ua/content/images/15/700x700l80mc0/98530947482506.webp",
        price: "50"
    },
    {
        id: "8",
        name: "Tulasi",
        category: "Nature",
        description: "базилик священный",
        image: "https://apricot.com.ua/content/images/25/700x700l80mc0/28291738732553.webp",
        price: "50"
    },
    {
        id: "9",
        name: "Patchouli",
        category: "Nature",
        description: "листья пачули",
        image: "https://apricot.com.ua/content/images/31/700x700l80mc0/44777155693058.webp",
        price: "50"
    },
    {
        id: "10",
        name: "Poppy",
        category: "Nature",
        description: "Семена мака",
        image: "https://apricot.com.ua/content/images/19/700x700l80mc0/39051933581851.webp",
        price: "50"
    },
    {
        id: "11",
        name: "Vanilla",
        category: "Nature",
        description: "Цветы и плоды ванили",
        image: "https://apricot.com.ua/content/images/33/700x700l80mc0/27632893563151.webp",
        price: "50"
    },
    {
        id: "12",
        name: "Ylang-Ylang",
        category: "Nature",
        description: "Цветы иланг-иланга",
        image: "https://apricot.com.ua/content/images/28/700x700l80mc0/35818315700923.webp",
        price: "50"
    },
    {
        id: "13",
        name: "Annapurna",
        category: "Tibetan",
        description: "Высокогорные цветы",
        image: "https://apricot.com.ua/content/images/16/700x700l80mc0/87023279654166.webp",
        price: "50"
    },
    {
        id: "14",
        name: "Chomolungma",
        category: "Tibetan",
        description: "Бетель, рододендрон и нард",
        image: "https://apricot.com.ua/content/images/27/700x700l80mc0/76272290378608.webp",
        price: "50"
    },
    {
        id: "15",
        name: "Kutang",
        category: "Tibetan",
        description: "Мак, миндаль и можжевельник",
        image: "https://apricot.com.ua/content/images/26/700x700l80mc0/43856343562866.webp",
        price: "50"
    },
    {
        id: "16",
        name: "Love",
        category: "Krishna",
        description: "Лотос, туласи, сандал и жасмин",
        image: "https://apricot.com.ua/content/images/20/700x700l80mc0/61831897678901.webp",
        price: "50"
    },
    {
        id: "17",
        name: "Dance",
        category: "Krishna",
        description: "Лавр, полынь и камфора",
        image: "https://apricot.com.ua/content/images/32/700x700l80mc0/89481905222696.webp",
        price: "50"
    },
    {
        id: "18",
        name: "Shree Jagannath Puri",
        category: "Mandir",
        description: "Фиалка, иланг-иланг и мелисса",
        image: "https://apricot.com.ua/content/images/17/700x700l80mc0/94063575775769.webp",
        price: "50"
    },
    {
        id: "19",
        name: "Shree Krishna-Balaram",
        category: "Mandir",
        description: "Cандал и цветы рудракши, чампаки, гладиолуса, гибискуса",
        image: "https://apricot.com.ua/content/images/29/700x700l80mc0/67252951822507.webp",
        price: "50"
    },
    {
        id: "20",
        name: "Shree Radha Ras Bihari",
        category: "Mandir",
        description: "Ландыш, сирень и корица",
        image: "https://apricot.com.ua/content/images/21/700x700l80mc0/38398832834928.webp",
        price: "50"
    },
];

const aromaHolders = [
    {
        id: "101",
        name: "Лист",
        description: "Лыжа из древесины манго",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/32/700x700l80mc0/20151366879052.webp",
        price: "100"
    },
    {
        id: "102",
        name: "Звезда",
        description: "Лыжа из палисандра (розовое дерево)",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/15/600x600l80mc0/85548171893188.webp",
        price: "50"
    },
    {
        id: "103",
        name: "Колос",
        description: "Лыжа из древесины манго",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/14/700x700l80mc0/86736614453737.webp",
        price: "50"
    },
    {
        id: "104",
        name: "Цветок",
        description: "Тарелка из алюминия",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/12/700x700l80mc0/14551801769655.webp",
        price: "200"
    },
]

function Catalog() {
    return (
        <Switch>
            <Route exact path='/catalog/all' component={Catalog}>
                <MasonryGrid cards={aromaSticks.sort(() => Math.random() - 0.5)}/>
            </Route>
            <Route exact path='/catalog/nature' component={Catalog}>
                <MasonryGrid category={'Nature'}
                    cards={aromaSticks.filter(card => card.category.includes('Nature'))}/>
            </Route>
            <Route exact path='/catalog/mandir' component={Catalog}>
                <MasonryGrid cards={aromaSticks.filter(card => card.category.includes('Mandir'))}/>
            </Route>
            <Route exact path='/catalog/tibetan' component={Catalog}>
                <MasonryGrid cards={aromaSticks.filter(card => card.category.includes('Tibetan'))}/>
            </Route>
            <Route exact path='/catalog/krishna' component={Catalog}>
                <MasonryGrid cards={aromaSticks.filter(card => card.category.includes('Krishna'))}/>
            </Route>
            <Route exact path='/catalog/holders' component={Catalog}>
                <MasonryGrid cards={aromaHolders}/>
            </Route>
        </Switch>

    );
}

export default Catalog;
