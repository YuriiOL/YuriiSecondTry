import {
    showTextOnPicture,
    chageFont,
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
let chosenFonts = document.getElementsByClassName('font');

for (let i = 0; i < chosenFonts.length; i++) {
    chosenFonts[i].onclick = function () {
        let element = chosenFonts[0];
        while (element) {
            if (element.tagName === "BUTTON") {
                element.classList.remove("chosenFont")
            }
            element = element.nextSibling;
        }
        fontNumber = i
        showTextOnPicture()
        chageFont()
        this.classList.add('chosenFont');
    }
}