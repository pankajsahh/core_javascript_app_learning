const newYears = '1 jan 2023';
const days_tag=document.getElementById('days');
const mins_tag=document.getElementById('minutes');
const seconds_tag=document.getElementById('seconds');
const hours_tag=document.getElementById('hours');




function coundown(){
    const newYearDate= new Date(newYears);
    const currDate = new Date();

    const timeleft = (newYearDate-currDate)/1000;
    const days = Math.floor(timeleft/3600/24);
    const hours = Math.floor(timeleft/3600)%24;
    const mins = Math.floor(timeleft/60)%60;
    const seconds = Math.floor(timeleft%60);
    days_tag.innerText=days;
    mins_tag.innerText=mins;
    hours_tag.innerText=hours;
    seconds_tag.innerText=seconds;
     
    console.log(days,hours,mins,seconds);
}
coundown();
setInterval(coundown,1000);
