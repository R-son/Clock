let clockElement = document.getElementById("clock");

function nbrTwoDigits(nb) {
    return nb.toLocaleString('en-US', { minimumIntegerDigits: 2 });
}

function update_clock() {
    var date = new Date;
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var formattedTime = nbrTwoDigits(hours) + ":" + nbrTwoDigits(min) + ":" + nbrTwoDigits(sec)

    document.getElementById("clock").textContent = formattedTime;
}

setInterval(update_clock, 1000);