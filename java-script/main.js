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

document.getElementById('pictureOne').onclick = function chosen1() {
    pickNumber = 0;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureTwo').onclick = function chosen2() {
    pickNumber = 1;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureThree').onclick = function chosen3() {
    pickNumber = 2;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureFour').onclick = function chosen4() {
    pickNumber = 3;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureFive').onclick = function chosen5() {
    pickNumber = 4;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureSix').onclick = function chosen6() {
    pickNumber = 5;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureSeven').onclick = function chosen7() {
    pickNumber = 6;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureEight').onclick = function chosen8() {
    pickNumber = 7;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureNine').onclick = function chosen9() {
    pickNumber = 8;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureTen').onclick = function chosen10() {
    pickNumber = 9;
    sayPrice();
    showPicture();
    textOne();
}

document.getElementById('pictureEleven').onclick = function chosen11() {
    pickNumber = 10;
    sayPrice();
    showPicture();
    textOne();
}