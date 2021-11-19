import React from "react";
import MasonryGrid from "../components/content/MasonryGrid";
import {Switch, Route} from 'react-router-dom';


const vendors = {
    olx: {
        delivery: "OLX Доставка, УкрПочта, Justin",
        min_amount: "300"
    },
    bigl: {
        delivery: "Новая Почта, УкрПочта, Justin",
        min_amount: "80"
    },
    crafta: {
        delivery: "УкрПочта",
        min_amount: "80"
    },
    izi: {
        delivery: "Новая Почта, УкрПочта, Justin",
        min_amount: "300"
    }
}

const categories = [
    "nature", "tibetan", "krishna", "mandir"
]

const aromaSticks = [
    {
        id: "1",
        name: "Coconut",
        category: categories[0],
        image: "https://apricot.com.ua/content/images/28/700x700l80mc0/34607457799917.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com"
        }
    },
    {
        id: "2",
        name: "Sandalwood",
        category: categories[0],
        image: "https://apricot.com.ua/content/images/46/700x700l80mc0/54691989759895.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "3",
        name: "Lavender",
        category: categories[0],
        image: "https://apricot.com.ua/content/images/35/700x700l80mc0/31262777313237.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "4",
        name: "Eucalyptus",
        category: categories[0],
        description: "листья и масло эвкалипта",
        image: "https://apricot.com.ua/content/images/30/700x700l80mc0/73653555037934.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "5",
        name: "Mango",
        category: categories[0],
        image: "https://apricot.com.ua/content/images/34/700x700l80mc0/86496755347827.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "6",
        name: "Rose",
        category: categories[0],
        image: "https://apricot.com.ua/content/images/22/700x700l80mc0/95093074469640.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "7",
        name: "Frankincense",
        category: categories[0],
        description: "ладан, смола Босвелии",
        image: "https://apricot.com.ua/content/images/15/700x700l80mc0/98530947482506.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "8",
        name: "Patchouli",
        category: categories[0],
        description: "листья пачули",
        image: "https://apricot.com.ua/content/images/31/700x700l80mc0/44777155693058.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "9",
        name: "Poppy",
        category: categories[0],
        description: "Семена мака",
        image: "https://apricot.com.ua/content/images/19/700x700l80mc0/39051933581851.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "10",
        name: "Vanilla",
        category: categories[0],
        description: "Цветы и плоды ванили",
        image: "https://apricot.com.ua/content/images/33/700x700l80mc0/27632893563151.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "11",
        name: "Makalu",
        category: categories[1],
        description: "Лавр, полынь и камфора",
        image: "https://apricot.com.ua/content/images/32/700x700l80mc0/89481905222696.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "12",
        name: "Annapurna",
        category: categories[1],
        description: "Высокогорные цветы",
        image: "https://apricot.com.ua/content/images/16/700x700l80mc0/87023279654166.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "13",
        name: "Chomolungma",
        category: categories[1],
        description: "Бетель, рододендрон и нард",
        image: "https://apricot.com.ua/content/images/27/700x700l80mc0/76272290378608.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "14",
        name: "Kutang",
        category: categories[1],
        description: "Мак, миндаль и можжевельник",
        image: "https://apricot.com.ua/content/images/26/700x700l80mc0/43856343562866.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "15",
        name: "Game",
        category: categories[2],
        description: "Цитронелла и цветы Рудракши",
        image: "https://apricot.com.ua/content/images/30/700x700l80mc0/93443773396800.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "16",
        name: "Love",
        category: categories[2],
        description: "Лотос, туласи, сандал и жасмин",
        image: "https://apricot.com.ua/content/images/20/700x700l80mc0/61831897678901.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "17",
        name: "Dance",
        category: categories[2],
        description: "Шафран и сандал",
        image: "https://apricot.com.ua/content/images/43/700x700l80mc0/81000864133007.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "18",
        name: "Shree Jagannath Puri",
        category: categories[3],
        description: "Фиалка, иланг-иланг и мелисса",
        image: "https://apricot.com.ua/content/images/17/700x700l80mc0/94063575775769.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "19",
        name: "Shree Krishna-Balaram",
        category: categories[3],
        description: "Cандал и цветы рудракши, чампаки, гладиолуса, гибискуса",
        image: "https://apricot.com.ua/content/images/29/700x700l80mc0/67252951822507.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
    {
        id: "20",
        name: "Shree Radha Ras Bihari",
        category: categories[3],
        description: "Ландыш, сирень и корица",
        image: "https://apricot.com.ua/content/images/21/700x700l80mc0/38398832834928.webp",
        price: "80",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com",
        }
    },
];

const aromaHolders = [
    {
        id: "101",
        name: "Лист",
        description: "Лыжа из древесины манго",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/32/700x700l80mc0/20151366879052.webp",
        price: "100",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com"
        }
    },
    {
        id: "102",
        name: "Звезда",
        description: "Лыжа из палисандра (розовое дерево)",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/15/600x600l80mc0/85548171893188.webp",
        price: "50",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com"
        }
    },
    {
        id: "103",
        name: "Колос",
        description: "Лыжа из древесины манго",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/14/700x700l80mc0/86736614453737.webp",
        price: "50",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com"
        }
    },
    {
        id: "104",
        name: "Цветок",
        description: "Тарелка из алюминия",
        category: "Подставка",
        image: "https://apricot.com.ua/content/images/12/700x700l80mc0/14551801769655.webp",
        price: "200",
        links: {
            olx: "https://example.com",
            crafta: "https://example.com",
            bigl: "https://example.com",
            izi: "https://example.com"
        }
    },
]

const Catalog = props => {
    return (
        <Switch>
            <Route exact path='/catalog/all' component={Catalog}>
                <MasonryGrid cards={aromaSticks.sort(() => Math.random() - 0.5)}
                             vendors={vendors} path={props.path}/>
            </Route>
            <Route exact path='/catalog/nature' component={Catalog}>
                <MasonryGrid vendors={vendors} path={props.path}
                             cards={aromaSticks.filter(card => card.category.includes('nature'))}/>
            </Route>
            <Route exact path='/catalog/mandir' component={Catalog}>
                <MasonryGrid cards={aromaSticks.filter(card => card.category.includes('mandir'))}
                             vendors={vendors} path={props.path}/>
            </Route>
            <Route exact path='/catalog/tibetan' component={Catalog}>
                <MasonryGrid cards={aromaSticks.filter(card => card.category.includes('tibetan'))}
                             vendors={vendors} path={props.path}/>
            </Route>
            <Route exact path='/catalog/krishna' component={Catalog}>
                <MasonryGrid cards={aromaSticks.filter(card => card.category.includes('krishna'))}
                             vendors={vendors} path={props.path}/>
            </Route>
            <Route exact path='/catalog/holders' component={Catalog}>
                <MasonryGrid cards={aromaHolders} vendors={vendors} path={props.path}/>
            </Route>
        </Switch>

    );
}

export default Catalog;
