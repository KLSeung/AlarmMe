
 const clock = function() {

  const fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();


  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ":" + mins;
  document.getElementById('second').innerHTML = ":" + secs;

  return hours;
  return mins;
  return secs;
}

setInterval(clock,100);

const alarm = function() {

  document.getElementById('hourInput').addEventListener('input', function (h){

    if (hourInput.value > 23){
      h.target.value = 23;
    }

    else if (hourInput.value < 0){
      h.target.value = 0;
    }
  })


  document.getElementById('minuteInput').addEventListener('input', function (m){

    if (minuteInput.value > 60){
      m.target.value = 59;
    }

    else if (minuteInput.value < 0){
      m.target.value = 0;
    }
  })
}

const alarmSet = function(){

  const fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  const hourInputValue = document.getElementById('hourInput').value;
  const minuteInputValue = document.getElementById('minuteInput').value;

  var alarmHours = hours + parseInt(hourInputValue);
  var alarmMinutes = mins + parseInt(minuteInputValue);
  const alarmSeconds = secs;

  if (isNaN(alarmHours)) {
    alarmHours = hours ;
  }

  else if (alarmHours > 24){
    alarmHours = alarmHours - 24;
  }

  if (isNaN(alarmMinutes)) {
    alarmMinutes = mins;
  }

  else if (alarmMinutes > 59) {
    alarmMinutes = alarmMinutes - 60;
    alarmHours = alarmHours + 1;
  }

  if (alarmHours < 10) {
    alarmHours = "0" + alarmHours;
  }
  if (alarmMinutes < 10) {
    alarmMinutes = "0" + alarmMinutes;
  }
  if (alarmSeconds < 10) {
    alarmSeconds = "0" + alarmSeconds;
  }

  document.getElementById('alarmHour').innerHTML = alarmHours;
  document.getElementById('alarmMinute').innerHTML = ":" + alarmMinutes;
  document.getElementById('alarmSecond').innerHTML = ":" + alarmSeconds;

  const alarmRow = document.getElementsByClassName("alarmTime");
  for (var i=0; i<alarmRow.length; i++){
    alarmRow[i].style.color = "#FF472E";
  }


  const alarmSound = document.getElementById('soundOpt');
  const alarmSoundUser = alarmSound.options[alarmSound.selectedIndex].value;

  console.log(alarmSoundUser);


}

const ringAlarm = function (){
  if (hours == alarmHours && mins == alarmMinutes && secs == alarmSeconds){
    console.log(alarmSoundUser);
}
}


clock();
alarm();
ringAlarm();
