const dayType = document.querySelector('#daytype'); 
const hour = 22;
// new Date().getHours();



if( hour >=6 && hour < 18){
    dayType.classList.add('day');
    dayType.classList.remove('night');
}else{
    dayType.classList.add('night');
    dayType.classList.remove('day');
}