let m = 0, s = 0, ms = 0, stopWatch = document.getElementById("timer");
let time_starter = null;

function timer1() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        s++;
        if (s < 10) {
            s = "0" + s;
        }
        if (s == 60) {
            s = 0;
            m++;
            // if (m < 10) {
            //     m = "0" + m;
            // }
        }
    }
    stopWatch.innerHTML = `${m}:${s}:${ms}`;
}
function startTimer() {
    if (time_starter !== null) {

    } else {
        time_starter = setInterval(timer1, 10);
    }
}
function pauseTimer() {
    clearInterval(time_starter);
    time_starter = null;
}
function stopTimer() {
    clearInterval(time_starter);
    stopWatch.innerHTML = `0:0:000`;
    time_starter = null;
}





