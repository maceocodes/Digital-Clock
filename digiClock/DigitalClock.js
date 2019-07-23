function showTime() {
    const date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    
    var time = hr + ":" + min + ":" + sec;
    
    document.getElementById("displayTime").textContent = time;
}

showTime();

