function startCounter(){
    let days_p = document.getElementById("count_days");
    let hours_p = document.getElementById("count_hours");
    let minutes_p = document.getElementById("count_minutes");
    let seconds_p = document.getElementById("count_seconds");
    let chaps_p = document.getElementById("chaps_per_day");
    let pages_p = document.getElementById("pages_per_day");
    
    let today = Date.now()
    let target = + new Date("2024-02-06 00:00:00")
    
    let total_seconds = (target - today)/1000;

    setInterval(function(){
        let time = total_seconds;
        let days = Math.floor(time / 86400);
        let hours = Math.floor((time % 86400)/3600)
        let minutes = Math.floor(((time % 86400)%3600)/60)
        let seconds = Math.floor((((time % 86400)%3600)%60))
        let pages = 548 / (time / 86400);
        let chaps = 43 / (time / 86400);
        days_p.innerText = days;
        hours_p.innerText = hours;
        minutes_p.innerText = minutes;
        seconds_p.innerHTML = seconds;
        chaps_p.innerText =  parseFloat(chaps).toFixed(6);
        pages_p.innerHTML = parseFloat(pages).toFixed(6);;
        total_seconds -= 1;
    }, 1000);

}

startCounter()