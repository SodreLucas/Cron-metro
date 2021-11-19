var hr = 0
var min = 0
var sec = 0

var interval

function twoDigits(digit) {
    if(digit<10){
        return ("0"+digit)
    } else{return (digit)}
}


function play(){
    watch()
    interval = setInterval (watch, 1000)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    sec = 0
    min = 0
    hr = 0
    document.getElementById("watch").innerText ="00:00:00"
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            min = 0
            hr++
        }
    }
    document.getElementById("watch").innerText = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec)
}