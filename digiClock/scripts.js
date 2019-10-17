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


//toggle visability for dropdown menus, current time display, cancel button, set/save buttons, and clear time buttons. 
    var setClick = true;
    var set = document.getElementById("setBttn");
    var alarmStatus = document.getElementById("setTimeDisplay");
    var timeVis = document.getElementById("displayTime");
    var cancelVis = document.getElementById("cancelBttn");
    var inputVis = document.getElementById("setInput");
    var amPmVis = document.getElementById("period");
    var hrVis = document.getElementById("hr-select");
    var minVis = document.getElementById("min-select");
    var clearTime = document.getElementById("clearBttn");
    
    

//am/pm button, cancel button, dropdown menus hidden upon page load
    var eToHide = document.getElementsByClassName("savOrCncl");
    var i;
    for(var i = 0; i<eToHide.length; i++){
        eToHide[i].style.display = "none";    
    }

    document.getElementById('setBttn').addEventListener('click', (function() {
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
        clearTime.style.display = 'none';


// cancel to return to original page
        function cancelEntry(){
            var confirmReturn = confirm("cancel selection and return to homepage?");
            if (confirmReturn == true){
                setClick = true;
                timeVis.style.display = 'block';
                hrVis.style.display = 'none';
                minVis.style.display = 'none';
                amPmVis.style.display = 'none'
                cancelVis.style.display = 'none';  
                set.style.display = 'block';
                set.innerText = 'set'; 
                clearTime.style.display = 'block';
                cancelVis.removeEventListener('click', cancelEntry);
                clearTime.addEventListener('click', function(){
                    alert('cleared');
                });
            } else {
                return false;
            }
        };

        cancelVis.addEventListener('click', cancelEntry, false);

        
    };


//save user selection and set the alarm.
    function saveTime() {
        timeVis.style.display = 'block';
        hrVis.style.display = 'none';
        minVis.style.display = 'none';
        amPmVis.style.display = 'none'
        cancelVis.style.display = 'none'; 
        set.style.display = 'block';
        clearTime.style.display = 'block';
        set.innerText = 'set';
        

//retrieve user selections and display to DOM
        var setHr = document.getElementById('hr-select').value;
        var setMin = document.getElementById('min-select').value;
        var setPeriod = document.getElementById('period').value;
        var setTime = setHr + ":" + setMin + ":" + "00" + " " + setPeriod;
        
    
//get currentTime
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
            
//confirm time selected for alarm matches the current time
            if(setTime == currentTime) {
                alert("success");
            }
        }, 1000);

        
//If the user does not select an hour they will be prompted to do so
        if(setHr == "0") {
            alert("whoops, looks like you forgot to set the hour");
            setClick = true;
            enterTime();
        } else {
            document.getElementById("setTimeDisplay").innerHTML = setTime;
        }

//If the user does not select a period will be prompted to do so
        if(setPeriod == "am/pm") {
            alert("whoops, looks like you forgot to set the the period.  AM or Pm?");
            setClick = true;
            enterTime();
        } else {
            document.getElementById("setTimeDisplay").innerHTML = setTime;
        }

        var hrSelect = document.getElementById("hr-select");
        var minSelect = document.getElementById("min-select");
        var periodSelect = document.getElementById("period");
        
        //clear user setTime 
        clearTime.addEventListener('click', function(){
            hrSelect.selectedIndex = 0;
            minSelect.selectedIndex = 0;
            periodSelect.selectedIndex = 0;
            alert('time cleared');
            document.getElementById("setTimeDisplay").innerHTML = "";
            event.stopPropagation();
            clearTime.removeEventListener('click', cancelEntry);
        });



        


    };




    


 //cancel button returns user to time display
 //clear button to clear saved time
//compare input to time and do a thing if it matches




