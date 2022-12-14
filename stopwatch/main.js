let m = 0, s = 0, ms = 0, stopWatch = document.getElementById("timer");
// let int = setInterval(timer1, 1);
function timer1() {
    ms++;
    if (ms < 1000) {
        ms = "0" + ms;
        if (ms < 100) {
            ms = "00" + ms;
            if (ms < 10) {
                ms = "000" + ms;
            }
        }
    }
    // console.log(ms);
    if (ms == 1000) {
        ms = 0;
        s++;
        // console.log(s);
        if (s < 10) {
            s = "0" + s;
        }
        if (s == 60) {
            s = 0;
            m++;
            if (m < 10) {
                m = "0" + m;
            }
        }
    }
    stopWatch.innerHTML = `${m}:${s}:${ms}`;
}
setInterval(timer1, 1);



