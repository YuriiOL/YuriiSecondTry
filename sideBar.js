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