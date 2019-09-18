//Current time display and functionality 
setInterval(function(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();     
    
    if(hr == 0){
        hr = 12;
    }

    if(hr > 12){
        hr = hr - 12;
    }

    var period = (date.getHours()) < 12 ? 'am' : 'pm';
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var currentTime = hr + ":" + min + ":" + sec + " " + period; 

    document.getElementById("displayTime").innerHTML = currentTime;
    options = {weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'};
    document.getElementById("displayDate").innerHTML = date.toLocaleDateString("en-US", options);
}, 1000);


//toggle visability for dropdown menus, current time display, cancel button, set/save buttons. 
    var set = document.getElementById("setBttn");
    var timeVis = document.getElementById("displayTime");
    var cancelVis = document.getElementById("cancelBttn");
    var inputVis = document.getElementById("setInput");
    var amPmVis = document.getElementById("am-pm");
    var hrVis = document.getElementById("hr-select");
    var minVis = document.getElementById("min-select");

//am/pm button, cancel button, dropdown menus hidden upon page load
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
//initial click to select time
        timeVis.style.display = 'none';
        hrVis.style.display = 'block';
        minVis.style.display = 'block';
        amPmVis.style.display = 'block'
        cancelVis.style.display = 'block';
        set.innerText = 'save';
    };

    function saveTime() {
//second click to save user selection and set the alarm.
        timeVis.style.display = 'block';
        hrVis.style.display = 'none';
        minVis.style.display = 'none';
        amPmVis.style.display = 'none'
        cancelVis.style.display = 'none'; 
        set.style.display = 'block';
        set.innerText = 'set';

//retrieve user selections
        var setHr = document.getElementById('hr-select').value;
        var setMin = document.getElementById('min-select').value;
        var setPeriod = document.getElementById('am-pm').value;
        
        var setMin = (setMin < 10) ? "0" + setMin : setMin;
        var setTime = setHr + ":" + setMin + ":" + "00" + " " + setPeriod;
    
//get currentTime again
        setInterval(function(){
            var date = new Date();
            var hr = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();     
            
            if(hr == 0){
                hr = 12;
            }

            if(hr > 12){
                hr = hr - 12;
            }

            var period = (date.getHours()) < 12 ? 'am' : 'pm';
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;

            var currentTime = hr + ":" + min + ":" + sec + " " + period; 

            options = {weekday: 'short', year: 'numeric', month: 'short', day: '2-digit'};
            document.getElementById("displayDate").innerHTML = date.toLocaleDateString("en-US", options);
            

            if(setTime == currentTime) {
                alert("success");
                }

        }, 1000);

    };


 //cancel button returns user to time display
 //clear button to clear saved time
//compare input to time and do a thing if it matches




