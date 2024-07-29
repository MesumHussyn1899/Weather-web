let apiKey="108eecb01744d579c41200b891509345";
let input=document.getElementById('search');
let btn=document.getElementById('btn');
let wrapper1=document.querySelector(".wrapper1")
let wrapper2=document.querySelector(".wrapper2")
let wrapper=document.querySelector(".wrapper")


function  getData(){
 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
.then((res)=>{
  wrapper1.innerHTML=`
  <h1>loading...</h1>
  `
  return res.json();
})
.then((data)=>{
  console.log(data);
  showData(data);
})
.catch((err)=>{
  console.log(err)
})
}

function showData(data){

  let {temp,feels_like,humidity,pressure}=data.main;
  let {sunrise,sunset}=data.sys;
  let {description}=data.weather[0];
  let updatetemp = Math.round(temp)
  let {icon}=data.weather[0];

// Function to convert UNIX timestamp to a readable date and time format
function convertUnixTimestamp(data) {
  const date = new Date(data * 1000); // Convert seconds to milliseconds
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true // 24-hour format
  };
  return date.toLocaleDateString('en-US', options);
}

// Fetch and convert dt, sunrise, and sunset
const formattedDateTime = convertUnixTimestamp(data.dt);
const formattedSunrise = convertUnixTimestamp(data.sys.sunrise);
const formattedSunset = convertUnixTimestamp(data.sys.sunset);

console.log(`Date and Time: ${formattedDateTime}`);
// console.log(`Sunrise: ${formattedSunrise}`);
// console.log(`Sunset: ${formattedSunset}`);
  
  //let {feels_like}=data.main;
wrapper1.innerHTML=`
<div class="box1">
        <h3 class="city">${data.name}</h3>
        <h1 class="time">90:00</h1>
        <p  class="dayDate">Thusrday ,21 Aug</p>
      </div>



      
      <div class="box2">
      
      <div class="temp">
       <h1 class="currtemp">${updatetemp}<sup>0</sup>C</h1>
       <h1 class="feellike">Feels like: ${feels_like}<sup>o</sup>C</h1>
       
       <div class="sunrise">
        <img src="./assets/sunrise-white 1.png" alt="">
        <p>sunrise <br>${formattedSunrise}</p>
       </div>
       
       <div class="sunset">
        <img src="./assets/sunset-white 1.png" alt="">
        <p>sunset <br>${formattedSunset}</p>
       </div>
      </div>
      <div class="weatherimg">
        <div class="weatherimage"><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" class="weatherimage"></div>
        <h2 class="desc">${description}</h2>
      </div>
      <div class="pressureHumadity">
       <div class="humadity">
       <img src="./assets/humidity 1.png" alt="">
       <p>${humidity}%</p>
       <h3>humadity</h3>
       </div>
       <div class="pressure">
        <img src="./assets/pressure-white 1.png" alt="">
        <p>${pressure} hpa</p>
        <h3>pressure</h3>
       
       </div>


      </div>
      </div>
    </div>

`
}

function get5DayData(){

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&appid=108eecb01744d579c41200b891509345`)
.then((res)=>{
  return res.json();
})
.then((data)=>{
console.log(data)
show5DaysData(data)

})
.catch((err)=>{
  console.log(err);
})
}

function show5DaysData(data){
 // UNIX timestamp
let {dt_txt}=data.list[0];
let {temp}=data.list[0].main;
let currtemp=Math.round(temp);
wrapper2.innerHTML=`

<div  class="box3">
<h1 class="fiveDayForecastHeading">5 Days Forecast</h1>
<div class="fiveDayForecast">
<img src="./assets/icons8-night-48.png" alt="">
<p>${currtemp}<sup>0</sup>C</p>
<p>${dt_txt}</p>
</div>

<div class="fiveDayForecast">
 <img src="./assets/icons8-night-48.png" alt="">
 <p>${Math.round(data.list[8].main.temp)}<sup>0</sup>C</p>
 <p>${data.list[8].dt_txt}</p>
</div>

<div class="fiveDayForecast">
 <img src="./assets/icons8-night-48.png" alt="">
 <p>${Math.round(data.list[16].main.temp)}<sup>0</sup>C</p>
 <p>${data.list[17].dt_txt}</p>
</div>

<div class="fiveDayForecast">
 <img src="./assets/icons8-night-48.png" alt="">
 <p>${Math.round(data.list[24].main.temp)}<sup>0</sup>C</p>
 <p>${data.list[26].dt_txt}</p>
</div>

<div class="fiveDayForecast">
 <img src="./assets/icons8-night-48.png" alt="">
 <p>${Math.round(data.list[32].main.temp)}<sup>0</sup>C</p>
 <p>${data.list[34].dt_txt}</p>
</div>

</div>




<div  class="box4">
<h1 class="hourlyForecastHeading">hourly forecast</h1>
<div class="wrapperHourlyForecast">
<div class="hourlyForecast ">
  <p class="dt">${data.list[1].dt_txt}</p>
  <h3>${Math.round(data.list[1].main.temp)}<sup>o</sup>c</h3>
  <div class="navigator">
    <img class="navigation" src="./assets/navigation 1.png" alt="">
    <p class="wind">${data.list[1].wind.speed}km/h</p>
    </div>

</div>
<div class="hourlyForecast">
  <p class="dt">${data.list[2].dt_txt}</p>
  <h3>${Math.round(data.list[2].main.temp)}<sup>o</sup>c</h3>
  <div class="navigator">
    <img class="navigation" src="./assets/navigation 1.png" alt="">
    <p class="wind">${data.list[2].wind.speed}km/h</p>
    </div>
</div>
<div class="hourlyForecast ">
  <p class="dt">${data.list[3].dt_txt}</p>
  <h3>${Math.round(data.list[3].main.temp)}<sup>o</sup>c</h3>
  <div class="navigator">
    <img class="navigation" src="./assets/navigation 1.png" alt="">
    <p class="wind">${data.list[3].wind.speed}km/h</p>
    </div>
</div>
<div class="hourlyForecast bghourlyForecast ">
  <p class="dt">${data.list[4].dt_txt}</p>
  <h3>${Math.round(data.list[4].main.temp)}<sup>o</sup>c</h3>
  <div class="navigator">
    <img class="navigation" src="./assets/navigation 1.png" alt="">
    <p class="wind">${data.list[4].wind.speed}km/h</p>
    </div>
</div>
<div class="hourlyForecast bghourlyForecast">
  <p class="dt">${data.list[5].dt_txt}</p>
  <h3>${Math.round(data.list[5].main.temp)}<sup>o</sup>c</h3>
  <div class="navigator">
  <img class="navigation" src="./assets/navigation 1.png" alt="">
  <p class="wind">${data.list[5].wind.speed}km/h</p>
  </div>
</div>
</div>
</div>
`

}

btn.addEventListener('click',()=>{
  getData();
  get5DayData();
}
);
