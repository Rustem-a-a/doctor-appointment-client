import axios from 'axios'
const instance = axios.create({
    // baseURL:'http://localhost:5000/',
    baseURL:'https://doctor-appointment-server.onrender.com/',
})
export default instance;