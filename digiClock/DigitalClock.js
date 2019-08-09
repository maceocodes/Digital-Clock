

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

}

showTime();


//toggle input, clock visibility, and cancel button display
var set = document.getElementById("setBttn");
var timeVis = document.getElementById("displayTime");
var cancelVis = document.getElementById("cancelBttn");
var inputVis = document.getElementById("setInput");


var eToHide = document.getElementsByClassName("savOrCncl");
var i;
for(var i = 0; i<eToHide.length; i++){
    eToHide[i].style.display = "none";    
}

set.addEventListener('click', function(){
    //toggle time display
    if (timeVis.style.display !== 'none') {
        timeVis.style.display = 'none';
    } else {
        timeVis.style.display = 'block';
    }          

    //toggle input display
    if (inputVis.style.display !== 'none') {
        inputVis.style.display = 'none';
    } else {
        inputVis.style.display = 'block';
    } 

    //toggle cancelBttn display
    if (cancelVis.style.display !== 'none') {
        cancelVis.style.display = 'none';
    } else {
        cancelVis.style.display = 'block';
    } 

    //change text for setBttn upon clicking
    if (set.innerText !== "set"){
        set.innerText = "set";
    } else {
        set.innerText = 'save';
    }
});


    //user input
function isNum(event){
    var charCode = event.keyCode;
    //Non-numeric character range
    if (charCode > 31 && (charCode < 48 || charCode > 58)){
        alert(" time should be entered in hours : minutes format. Ex. 10:30");
        return false;
    }
} 





