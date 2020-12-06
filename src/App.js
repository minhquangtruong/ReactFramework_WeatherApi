import React, { Component } from 'react'
import api from "./api/api"
import Clock from "./components/Clock"
export default class App extends Component 
{
  state = {
    weatherData: [],
    isLoaded : false,
  }
  componentDidMount() {
    api.get()
    .then(res => {
      const weatherData = res.data;
      this.setState({ weatherData,isLoaded:true });
    })
  }
  cleanTemp(temp){
    return Math.floor(temp)
  }
  dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  dayOrNight = (d)=>{
    console.log(d.getHours()>18)
    return (d.getHours()>18?"night":"day")
  }
  render() {
    
    if(this.state.isLoaded){
      const data ={
        iconID:this.state.weatherData.weather[0].icon,
        iconDesc:this.state.weatherData.weather[0].description,
        temp:this.cleanTemp(this.state.weatherData.main.temp),
        feelsLike:this.cleanTemp(this.state.weatherData.main.feels_like),
    }
    return (
      <div className={(data.temp>16?'container warm':'container')}>
        <main>
          <section>
            <div className="location">
              Toronto, CA
            </div>
            <div className="date">
              {this.dateBuilder(new Date())}
            </div>
          </section>
          <Clock/>
          <section>
            <div className="temp">{data.temp}°c
              <img className="icon"src={`http://openweathermap.org/img/wn/${data.iconID}@2x.png`}></img>
              <div className="feels-like">Feels Like:{data.feelsLike}°c</div>
            </div>
            
            <div className="weather">{data.iconDesc}</div>
          </section>
        </main>
      </div>
    )}
    return(
      <></>
    )

  }
}
