import {
    sayPrice
} from './footer.js'

import {
    showPicture,
    textOne
} from './sideBar.js'

export let pickNumber = 0;
export let arrOfPicture = [{
        name: 'Картина 1',
        prices: 500,
        showImg: "url(img/pics/01.jpg)",
    },
    {
        name: 'Картина 2',
        prices: 600,
        showImg: "url(img/pics/02.jpg)",
    },
    {
        name: 'Картина 3',
        prices: 700,
        showImg: "url(img/pics/03.jpg)",
    },
    {
        name: 'Картина 4',
        prices: 800,
        showImg: "url(img/pics/04.jpg)",
    },
    {
        name: 'Картина 5',
        prices: 900,
        showImg: "url(img/pics/05.jpg)",
    },
    {
        name: 'Картина 6',
        prices: 1000,
        showImg: "url(img/pics/06.jpg)",
    },
    {
        name: 'Картина 7',
        prices: 1100,
        showImg: "url(img/pics/07.jpg)",
    },
    {
        name: 'Картина 8',
        prices: 1200,
        showImg: "url(img/pics/08.jpg)",
    },
    {
        name: 'Картина 9',
        prices: 1300,
        showImg: "url(img/pics/09.jpg)",
    },
    {
        name: 'Картина 10',
        prices: 1400,
        showImg: "url(img/pics/10.jpg)",
    },
    {
        name: 'Картина 11',
        prices: 1500,
        showImg: "url(img/pics/11.jpg)",
    }

];
let chosenPicture = document.getElementsByClassName('picture');

for (let i = 0; i < chosenPicture.length; i++) {
    chosenPicture[i].onclick = function () {
        let element = chosenPicture[0];
        while (element) {
            if (element.tagName === "IMG") {
                element.classList.remove("chosenPicture")
            }
            element = element.nextSibling;
        }
        pickNumber = i;
        sayPrice();
        showPicture();
        textOne();
        this.classList.add('chosenPicture');
    }
}