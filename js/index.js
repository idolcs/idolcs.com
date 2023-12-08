function startCounter(){
    let days_p = document.getElementById("count_days");
    let hours_p = document.getElementById("count_hours");
    let minutes_p = document.getElementById("count_minutes");
    let seconds_p = document.getElementById("count_seconds");
    
    let today = Date.now()
    let target = + new Date("2024-02-06 00:00:00")
    
    let total_seconds = (target - today)/1000;

    setInterval(function(){
        let time = total_seconds;
        let days = Math.floor(time / 86400);
        let hours = Math.floor((time % 86400)/3600)
        let minutes = Math.floor(((time % 86400)%3600)/60)
        let seconds = Math.floor((((time % 86400)%3600)%60))
        days_p.innerText = days;
        hours_p.innerText = hours;
        minutes_p.innerText = minutes;
        seconds_p.innerHTML = seconds;
        total_seconds -= 1;
    }, 1000);

}

startCounter()