let next = 0;

function goNext() {
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
}

document.getElementById('sideButton').onclick = function addNext() {
    if (next == 3) {
        next = 0
    } else {
        next++;
    }
    console.log(next)
    goNext();
}