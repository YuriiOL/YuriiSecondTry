import {
    arrOfBorders,
    borderNumber,
} from './main2.js'
import {
    arrOfPicture,
    pickNumber
} from './main.js'
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
    document.getElementById('sideText2').innerHTML = `Изображение: ${arrOfBorders[borderNumber].name}`
}