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
document.querySelector('#color1').onclick = function () {
    numbColor = 0
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color2').onclick = function () {
    numbColor = 1
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color3').onclick = function () {
    numbColor = 2
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color4').onclick = function () {
    numbColor = 3
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color5').onclick = function () {
    numbColor = 4
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color6').onclick = function () {
    numbColor = 5
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color7').onclick = function () {
    numbColor = 6
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}
document.querySelector('#color8').onclick = function () {
    numbColor = 7
    moreThan3.push(numbColor)
    choseColor()
    moreThanTree()
}