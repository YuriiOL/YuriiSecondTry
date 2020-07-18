import {
    arrOfPicture,
    pickNumber
} from './main.js'
import {
    arrOfBorders,
    borderNumber,
} from './main2.js'
export function sayPrice() {
    document.getElementById('price').innerHTML = arrOfPicture[pickNumber].prices
}
export function sayBorder() {
    document.getElementById('price').innerHTML = (arrOfPicture[pickNumber].prices + arrOfBorders[borderNumber].prices)
}