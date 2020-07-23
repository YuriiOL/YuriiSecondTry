import {
    fontNumber,
    fonts
} from './main3.js'

import {
    arrOfBorders,
    borderNumber,
} from './main2.js'

import {
    arrOfPicture,
    pickNumber
} from './main.js'
import {
    numbColor,
    arrOfColors,
    moreThan3,
} from './main4.js'

export function showPicture() {
    document.getElementById('showPicture').style.backgroundImage = arrOfPicture[pickNumber].showImg
}

export function textOne() {
    document.getElementById('sideText1').innerHTML = `Изображение: ${arrOfPicture[pickNumber].name}`
}
export function showBorder() {
    document.getElementById('showBorder').style.backgroundImage = arrOfBorders[borderNumber].showImg
}

export function textTwo() {
    document.getElementById('sideText2').innerHTML = `Рама: ${arrOfBorders[borderNumber].name}`
}
export function showTextOnPicture() {
    document.getElementById('textOnPicture1').innerHTML = document.getElementById('inp1').value
    document.getElementById('textOnPicture2').innerHTML = document.getElementById('inp2').value
    document.getElementById('textOnPicture3').innerHTML = document.getElementById('inp3').value
}

export function chageFont() {
    document.getElementById('textOnPicture1').style.fontFamily = fonts[fontNumber].name
    document.getElementById('textOnPicture2').style.fontFamily = fonts[fontNumber].name
    document.getElementById('textOnPicture3').style.fontFamily = fonts[fontNumber].name
}

export function choseColor() {
    if (moreThan3.length <= 8) {
        document.querySelector('#chosenColor').style.display = "block";
        let box = document.createElement('div');
        box.style.backgroundColor = arrOfColors[numbColor].name;
        document.querySelector('#chosenColor').appendChild(box);
    } else {
        return;
    }

}