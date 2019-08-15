
function one(){
    var date;
    var hr;
    var min;
    var sec;
    var period;

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

    //toggle input, clock and cancel button, set/save button display.  
    var set = document.getElementById("setBttn");
    var timeVis = document.getElementById("displayTime");
    var cancelVis = document.getElementById("cancelBttn");
    var inputVis = document.getElementById("setInput");
    var amVis = document.getElementById("am");
    var pmVis = document.getElementById("pm");


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
        })
        ()
        );
        
    function enterTime() {
        //initial click to enter time
        timeVis.style.display = 'none';
        inputVis.style.display = 'block';
        cancelVis.style.display = 'block';
        amVis.style.display = 'block';
        pmVis.style.display = 'block';
        set.innerText = 'save';
    };

    function saveTime() {
        //second click to save entered time.
        timeVis.style.display = 'block';
        inputVis.style.display = 'none';
        cancelVis.style.display = 'none';
        amVis.style.display = 'none';
        pmVis.style.display = 'none';
        set.style.display = 'block';
        set.innerText = 'set';
    };





} 
one();



//toggle input, clock and cancel button, set/save button display.  
// var set = document.getElementById("setBttn");
// var timeVis = document.getElementById("displayTime");
// var cancelVis = document.getElementById("cancelBttn");
// var inputVis = document.getElementById("setInput");
// var amVis = document.getElementById("am");
// var pmVis = document.getElementById("pm");


// var eToHide = document.getElementsByClassName("savOrCncl");
// var i;
// for(var i = 0; i<eToHide.length; i++){
//     eToHide[i].style.display = "none";    
// }

// var setOrSave = (function() {
//     var setClick = true;
//     return function() {
//       setClick ? enterTime() : saveTime();
//       setClick = !setClick;
//     }
//   })();

// function enterTime() {
//     //initial click to enter time
//     timeVis.style.display = 'none';
//     inputVis.style.display = 'block';
//     cancelVis.style.display = 'block';
//     amVis.style.display = 'block';
//     pmVis.style.display = 'block';
//     set.innerText = 'save';
// };

// function saveTime() {
//     //second click to save entered time.
//     timeVis.style.display = 'block';
//     inputVis.style.display = 'none';
//     cancelVis.style.display = 'none';
//     amVis.style.display = 'none';
//     pmVis.style.display = 'none';
//     set.style.display = 'block';
//     set.innerText = 'set';
// };




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




