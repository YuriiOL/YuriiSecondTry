import {
    arrOfPicture,
    pickNumber
} from './main.js'
import {
    arrOfBorders,
    borderNumber,
} from './main2.js'
import {
    moreThan3
} from './main4.js'
export function sayPrice() {
    document.getElementById('price').innerHTML = arrOfPicture[pickNumber].prices

}
export function sayBorder() {
    document.getElementById('price').innerHTML = (arrOfPicture[pickNumber].prices + arrOfBorders[borderNumber].prices)
}

export function moreThanTree() {
    if (moreThan3.length >= 3) {
        document.getElementById('price').innerHTML = (arrOfPicture[pickNumber].prices + arrOfBorders[borderNumber].prices + 30)
    }
    if (moreThan3.length >= 6) {
        document.getElementById('price').innerHTML = (arrOfPicture[pickNumber].prices + arrOfBorders[borderNumber].prices + 60)
    }
}