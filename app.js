const Time = {
  alarmHour: "",
  alarmMinutes: "",
  hour: "",
  mins: "",
  secs: "",
  alarmSoundUser: "",
  alarmSounds: {
    modernAlarm: new Audio('audio/Classic_Alarm.mp3'),
    ckAlarm: new Audio('audio/Ck_Alarm.mp3'),
    militaryAlarm: new Audio('audio/Military_Alarm.mp3')
  },
  alarmSoundOn: false
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

    if (minuteInput.value >= 60){
      m.target.value = 59;
    }

    else if (minuteInput.value < 0){
      m.target.value = 0;
    }
  })

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

  if(Time.alarmMinutes < 10 ){
    Time.alarmMinutes= "0" + Time.alarmMinutes
    
  }
  
   if (Time.alarmHour < 10) {
     Time.alarmHour = "0" + Time.alarmHour;
    
   }
  
  document.getElementById('alarmHour').innerHTML = Time.alarmHour;
  document.getElementById('alarmMinutes').innerHTML = ":" + Time.alarmMinutes;
  document.getElementById('alarmSeconds').innerHTML = ":" + Time.alarmSeconds;

  const alarmRow = document.getElementsByClassName("alarmTime");
  for (var i=0; i<alarmRow.length; i++){
    alarmRow[i].style.color = "#FF472E";
  }

  const alarmSound = document.getElementById('soundOpt');
  Time.alarmSoundUser = alarmSound.options[alarmSound.selectedIndex].value;

}

const ringAlarm = function (){
  if (Time.hour == Time.alarmHour && Time.mins == Time.alarmMinutes && Time.secs == Time.alarmSeconds){
    
    if(Time.alarmSoundUser === "modern"){
      setInterval(function() {Time.alarmSounds.modernAlarm.play()},1000)
      Time.alarmSounds.modernAlarm.volume = 0.2
      Time.alarmSoundOn = true
    }
    else if(Time.alarmSoundUser === "ck"){
      setInterval(function() {Time.alarmSounds.ckAlarm.play()},1000)
      Time.alarmSounds.ckAlarm.volume = 0.2
      Time.alarmSoundOn = true
    }
    else if(Time.alarmSoundUser === "military"){
      setInterval(function() {Time.alarmSounds.militaryAlarm.play()},1000)
      Time.alarmSounds.militaryAlarm.volume = 0.2
      Time.alarmSoundOn = true
    }
  }
}

const cancelSound = function (){
  if (Time.alarmSoundOn){
    Time.alarmSoundUser === null
    Time.alarmSoundOn = false
    console.log(Time.alarmSoundOn)
  }
  else {
    console.log("There is no alarm ringing!")
  }
}


setInterval(ringAlarm, 100)
clock();
ringAlarm();

