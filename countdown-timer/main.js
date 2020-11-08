const set_date = '2021-01-01';

function countdown() {
    let newYearDate = new Date(set_date);
    let currentDate = new Date();
    let diff = (newYearDate - currentDate);

    let tot_seconds = diff / 1000;
    let minutes = Math.floor(tot_seconds / 60) % 60;
    let hours = Math.floor(tot_seconds / 3600) % 24;
    let days = Math.floor((tot_seconds / 3600) / 24);
    let seconds = Math.floor(tot_seconds % 60);
    

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
   
    return {
        seconds, days, hours, minutes
    }

}

//init call
countdown();
setInterval(countdown, 1000);




    
    
    
    
