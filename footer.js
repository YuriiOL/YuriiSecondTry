import {
    arrOfPicture,
    pickNumber
} from './main.js'
export function sayPrice() {
    document.getElementById('price').innerHTML = arrOfPicture[pickNumber].prices
}