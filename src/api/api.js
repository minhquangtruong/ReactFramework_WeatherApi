import axios from 'axios';
const Location = "Toronto"
const API_KEY = "4a44741b29af32756ca5127da861b365"
export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather`,
  params:{
    q:Location,
    APPID: API_KEY,
    units:'metric'
  },
});