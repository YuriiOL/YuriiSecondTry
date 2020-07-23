import {
    showTextOnPicture,
    chageFont
} from './sideBar.js'
export let fontNumber = 0
export const fonts = [{
        name: 'Ariston'
    },
    {
        name: 'DaVinci'
    },
    {
        name: 'Brody'
    },

];

document.getElementById('Font1').onclick = function showText1() {
    fontNumber = 0
    showTextOnPicture()
    chageFont()
}
document.getElementById('Font2').onclick = function showText2() {
    fontNumber = 1
    showTextOnPicture()
    chageFont()
}
document.getElementById('Font3').onclick = function showText3() {
    fontNumber = 2
    showTextOnPicture()
    chageFont()
}