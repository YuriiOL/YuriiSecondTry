import {
    showBorder,
    textTwo,
} from './sideBar.js'
import {
    sayBorder
} from './footer.js'
export let borderNumber = 0;
export let arrOfBorders = [{
        name: 'Рама 1',
        prices: 500,
        showImg: "url(img/borders/rama-01.png)",
    },
    {
        name: 'Рама 2',
        prices: 600,
        showImg: "url(img/borders/rama-02.png)",
    },
    {
        name: 'Рама  3',
        prices: 700,
        showImg: "url(img/borders/rama-03.png)",
    },
    {
        name: 'Рама  4',
        prices: 800,
        showImg: "url(img/borders/rama-04.png)",
    },
    {
        name: 'Рама  5',
        prices: 900,
        showImg: "url(img/borders/rama-05.png)",
    },
    {
        name: 'Рама  6',
        prices: 1000,
        showImg: "url(img/borders/rama-06.png)",
    },
    {
        name: 'Рама  7',
        prices: 1100,
        showImg: "url(img/borders/rama-07.png)",
    },
    {
        name: 'Рама  8',
        prices: 1200,
        showImg: "url(img/borders/rama-08.png)",
    },
    {
        name: 'Рама  9',
        prices: 1300,
        showImg: "url(img/borders/rama-09.png)",
    },
    {
        name: 'Рама  10',
        prices: 1400,
        showImg: "url(img/borders/rama-10.png)",
    },
    {
        name: 'Рама  11',
        prices: 1500,
        showImg: "url(img/borders/rama-11.png)",
    },
    {
        name: 'Рама  12',
        prices: 1600,
        showImg: "url(img/borders/rama-12.png)",
    },
    {
        name: 'Рама  13',
        prices: 1700,
        showImg: "url(img/borders/rama-13.png)",
    },
    {
        name: 'Рама  14',
        prices: 1800,
        showImg: "url(img/borders/rama-14.png)",
    },
    {
        name: 'Рама  15',
        prices: 1900,
        showImg: "url(img/borders/rama-15.png)",
    }

];
let chosenBorder = document.getElementsByClassName('border');

for (let i = 0; i < chosenBorder.length; i++) {
    chosenBorder[i].onclick = function () {
        let element = chosenBorder[0];
        while (element) {
            if (element.tagName === "IMG") {
                element.classList.remove("chosenBorder")
            }
            element = element.nextSibling;
        }
        borderNumber = i;
        sayBorder();
        showBorder();
        textTwo();
        this.classList.add('chosenBorder');
    }
}