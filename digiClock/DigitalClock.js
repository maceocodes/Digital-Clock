

function showTime() {
    options = {weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'}
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = "am";

    if(hr == 0){
        hr = 12;
    }

    if(hr > 12){
        hr = hr - 12;
        period = "pm";
    }

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hr + ":" + min + ":" + sec + " " + period; 
    document.getElementById("displayTime").innerHTML = time;
    document.getElementById("displayDate").innerHTML = date.toLocaleDateString("en-US", options);

    var startTime = setTimeout(showTime, 1000);

    //Set Alarm
    document.getElementById("setButton").addEventListener
    ("click", function setAlarm(){
    clearTimeout(startTime);
    var hr = "-";
    var min = "-";
    var time = hr + ":" + min;
    document.getElementById("displayTime").innerHTML = time;
    });


}

showTime();


//set button functions
/*const uAlarm = document.getElementById("set");
uAlarm.addEventListener("click", hello);

function hello(){
    window.alert("Hello world!");
} */






