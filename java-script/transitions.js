import {
    anime
} from './animation.js'
import {
    buy,
    sendRequest,
    requestURL,
    buyProduct
} from './ajax.js'
let next = 0;

function goNext() {
    setTimeout(function () {
        if (next == 0) {
            document.getElementById('main').style.display = "block"
            document.getElementById('main2').style.display = "none"
            document.getElementById('main3').style.display = "none"
            document.getElementById('main4').style.display = "none"
            document.querySelector('#button1').style.color = 'black'
            document.querySelector('#button2').style.color = 'gray'
            document.querySelector('#button3').style.color = 'gray'
            document.querySelector('#button4').style.color = 'gray'
        }
        if (next == 1) {
            document.getElementById('main').style.display = "none"
            document.getElementById('main2').style.display = "block"
            document.getElementById('main3').style.display = "none"
            document.getElementById('main4').style.display = "none"
            document.querySelector('#button1').style.color = 'gray'
            document.querySelector('#button2').style.color = 'black'
            document.querySelector('#button3').style.color = 'gray'
            document.querySelector('#button4').style.color = 'gray'
        }
        if (next == 2) {
            document.getElementById('main').style.display = "none"
            document.getElementById('main2').style.display = "none"
            document.getElementById('main3').style.display = "block"
            document.getElementById('main4').style.display = "none"
            document.querySelector('#button1').style.color = 'gray'
            document.querySelector('#button2').style.color = 'gray'
            document.querySelector('#button3').style.color = 'black'
            document.querySelector('#button4').style.color = 'gray'
        }
        if (next == 3) {
            document.getElementById('main').style.display = "none"
            document.getElementById('main2').style.display = "none"
            document.getElementById('main3').style.display = "none"
            document.getElementById('main4').style.display = "block"
            document.querySelector("#sideButton").innerHTML = "В КОРЗИНУ"
            document.querySelector('#button1').style.color = 'gray'
            document.querySelector('#button2').style.color = 'gray'
            document.querySelector('#button3').style.color = 'gray'
            document.querySelector('#button4').style.color = 'black'
        }
        if (next == 4) {
            buy()
            sendRequest("POST", requestURL, buyProduct).then(function (data) {
                console.log(data)
            }).catch(function (err) {
                console.log(err)
            })
            setTimeout(() => {
                alert('Ваша покупка оформлена'), 750
            })
        }
    }, 750)
}

document.getElementById('sideButton').onclick = function addNext() {
    next++;
    anime();
    goNext();

}