
//  const clock = {
//   hours: new Date().getHours(),
//   mins: new Date().getMinutes(),
//   secs: new Date().getSeconds(),
//   setTime: function() {
//       if (this.hours < 10) {
//         this.hours = "0" + this.hours;
//       }
//       if (this.mins < 10) {
//         this.mins = "0" + this.mins;
//       }
//       if (this.secs < 10) {
//         this.secs = "0" + this.secs;
//       }

//       return this.hours
//       return this.mins
//       return this.secs

//       setInterval(this.setTime(), 100);
//   }
// }
// document.getElementById('hour').innerHTML = clock.hours;
// document.getElementById('minute').innerHTML = ":" + clock.mins;
// document.getElementById('second').innerHTML = ":" + clock.secs;

// clock.setTime()


const Time = {
  alarmHour: "",
  alarmMinutes: "",
  hour: "",
  mins: "",
  secs: ""
}
 const clock = function() {

  const date = new Date();
   Time.hour = date.getHours()
   Time.mins = date.getMinutes()
   Time.secs = date.getSeconds()

  if (Time.hour < 10) {
    Time.hour = "0" + Time.hour;
  }
  if (Time.mins < 10) {
    Time.mins = "0" + Time.mins;
  }
  if (Time.secs < 10) {
    Time.secs = "0" + Time.secs;
  }

  document.getElementById('hour').innerHTML = Time.hour;
  document.getElementById('minute').innerHTML = ":" + Time.mins;
  document.getElementById('second').innerHTML = ":" + Time.secs;

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

  return Time.hour;
  return Time.mins;
  return Time.secs;
}

setInterval(clock, 100);


const setAlarm = function(){

  const hourInputValue = document.getElementById('hourInput').value;
  const minuteInputValue = document.getElementById('minuteInput').value;

  Time.alarmHour = Time.hour + parseInt(hourInputValue);
  Time.alarmMinutes = Time.mins + parseInt(minuteInputValue);
  Time.alarmSeconds = Time.secs

  if (isNaN(Time.alarmHour)) {
    Time.alarmHour = Time.hour ;
  }

  else if (Time.alarmHour > 24){
    Time.alarmHour= Time.alarmHour - 24;
  }

  if (isNaN(Time.alarmMinutes)) {
    Time.alarmMinutes = Time.mins;
  }

  else if (Time.alarmMinutes > 59) {
    Time.alarmMinutes = Time.alarmMinutes - 60;
    Time.alarmHour = Time.alarmHour + 1;
  }

  if (Time.alarmHours < 10) {
    Time.alarmHour = "0" + Time.alarmHour;
  }
  // if (Time.alarmMinutes < 10) {
  //   Time.alarmMinutes = "0" + Time.alarmMinutes;
  // }
  // if (Time.secs < 10) {
  //   Time.secs = "0" + Time.secs;
  // }

  document.getElementById('alarmHour').innerHTML = Time.alarmHour;
  document.getElementById('alarmMinute').innerHTML = ":" + Time.alarmMinutes;
  document.getElementById('alarmSecond').innerHTML = ":" + Time.alarmSeconds;

  const alarmRow = document.getElementsByClassName("alarmTime");
  for (var i=0; i<alarmRow.length; i++){
    alarmRow[i].style.color = "#FF472E";
  }


  const alarmSound = document.getElementById('soundOpt');
  Time.alarmSoundUser = alarmSound.options[alarmSound.selectedIndex].value;

  console.log(Time.alarmSoundUser);

}

const ringAlarm = function (){
  if (Time.hour == Time.alarmHour && Time.mins == Time.alarmMinutes && Time.secs == Time.alarmSeconds){
    console.log(Time.alarmSoundUser);
}
}
setInterval(ringAlarm, 100)

clock();
ringAlarm();

