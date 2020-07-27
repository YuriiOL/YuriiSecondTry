import {
    choseColor
} from './sideBar.js'
import {
    moreThanTree
} from './footer.js'
export let numbColor = 0
export let moreThan3 = []
export let arrOfColors = [{
        name: 'blue'
    },
    {
        name: 'rgb(103, 206, 7)'
    },
    {
        name: 'rgb(3, 175, 26)'
    },
    {
        name: 'rgb(212, 0, 184)'
    },
    {
        name: 'rgb(217, 255, 1)'
    },
    {
        name: 'rgb(175, 99, 0)'
    },
    {
        name: 'rgb(218, 18, 68)'
    },
    {
        name: 'rgb(255, 145, 0)'
    },
]
let chosenColor = document.getElementsByClassName('color');

for (let i = 0; i < chosenColor.length; i++) {
    chosenColor[i].onclick = function () {
        let element = chosenColor[0];
        while (element) {
            if (element.tagName === "IMG") {
                element.classList.remove("chosenColor")
            }
            element = element.nextSibling;
        }
        numbColor = i
        moreThan3.push(numbColor)
        choseColor()
        moreThanTree()
        this.classList.add('chosenColor');
    }
}