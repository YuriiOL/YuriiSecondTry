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

let buyProduct = {};
export let arrColors = [];

export function buy() {
    buyProduct.picture = arrOfPicture[pickNumber].name
    buyProduct.border = arrOfBorders[borderNumber].name
    buyProduct.text = {};
    buyProduct.text.text1 = document.getElementById('inp1').value
    buyProduct.text.text2 = document.getElementById('inp2').value
    buyProduct.text.text3 = document.getElementById('inp3').value
    buyProduct.text.font = fonts[fontNumber].name
    buyProduct.colors = {};
    buyProduct.colors = arrColors
    buyProduct.price = document.getElementById('price').innerHTML
    console.log(buyProduct)
}