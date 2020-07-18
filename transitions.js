let next = 0;

function goNext() {
    if (next == 0) {
        document.getElementById('main').style.display = "block"
        document.getElementById('main2').style.display = "none"
        document.getElementById('main3').style.display = "none"
        document.getElementById('main4').style.display = "none"
    }
    if (next == 1) {
        document.getElementById('main').style.display = "none"
        document.getElementById('main2').style.display = "block"
        document.getElementById('main3').style.display = "none"
        document.getElementById('main4').style.display = "none"

    }
    if (next == 2) {
        document.getElementById('main').style.display = "none"
        document.getElementById('main2').style.display = "none"
        document.getElementById('main3').style.display = "block"
        document.getElementById('main4').style.display = "none"

    }
    if (next == 3) {
        document.getElementById('main').style.display = "none"
        document.getElementById('main2').style.display = "none"
        document.getElementById('main3').style.display = "none"
        document.getElementById('main4').style.display = "block"

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