
function one(){
    var date;
    var hr;
    var min;
    var sec;
    var period;

//time display and functionality 
    function showTime() {
        options = {weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'}
        date = new Date();
        hr = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        period = "am";
    
        if(hr == 0){
            hr = 12;
        }
    
        if(hr > 12){
            hr = hr - 12;
            period = "pm";
        }
    
        var min = (min < 10) ? "0" + min : min;
        var sec = (sec < 10) ? "0" + sec : sec;
        
    
        var time = hr + ":" + min + ":" + sec + " " + period; 
        
        document.getElementById("displayTime").innerHTML = time;
        document.getElementById("displayDate").innerHTML = date.toLocaleDateString("en-US", options);
    
        startTime = setTimeout(showTime, 1000);
    
    }  
    showTime(); 


//toggle visability for input element, time display, cancel button, set/save buttons. 

    var set = document.getElementById("setBttn");
    var timeVis = document.getElementById("displayTime");
    var cancelVis = document.getElementById("cancelBttn");
    var inputVis = document.getElementById("setInput");
    var amPmVis = document.getElementById("am-pm");
    var hrVis = document.getElementById("hr-select");
    var minVis = document.getElementById("min-select");

//am/pm button, cancel button, input element hidden upon page load
    var eToHide = document.getElementsByClassName("savOrCncl");
    var i;
    for(var i = 0; i<eToHide.length; i++){
        eToHide[i].style.display = "none";    
    }

    document.getElementById('setBttn').addEventListener('click', (function() {
            var setClick = true;
            return function() {
            setClick ? enterTime() : saveTime();
            setClick = !setClick;
            }
        })()
        );
        
    function enterTime() {
        //initial click to enter time
        timeVis.style.display = 'none';
        hrVis.style.display = 'block';
        minVis.style.display = 'block';
        amPmVis.style.display = 'block'
        cancelVis.style.display = 'block';
        set.innerText = 'save';
    };

    function saveTime() {
        //second click to save entered time.
        timeVis.style.display = 'block';
        hrVis.style.display = 'none';
        minVis.style.display = 'none';
        amPmVis.style.display = 'none'
        cancelVis.style.display = 'none'; 
        set.style.display = 'block';
        set.innerText = 'set';
    };

    function confirmTimeMatch




 //drop down menus to select hour and minute


 //cancel button returns user to time display
 //clear button to clear saved time


} 
one();





    //verify user input
// function isNum(event){
//     var e = event || window.event
//     var key = e.keyCode || e.which;
//     //Non-numeric character range
//     if (key > 31 && (key < 48 || key > 58)){

//         if(e.preventDefaut) e.preventDefaut();
//         e.returnValue = false;
//         alert(" time should be entered in hours : minutes format. Ex. 10:30");
//     }
// } 


//compare input to time and do a thing if it matches




