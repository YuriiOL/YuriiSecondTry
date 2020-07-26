function anime() {
    setTimeout(function () {
        document.getElementById('wrapper').style.opacity = '0.0'
    }, 0);
    setTimeout(function () {
        document.getElementById('wrapper').style.opacity = '1'
    }, 1500);
}

export {
    anime
}