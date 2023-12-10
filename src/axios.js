import axios from 'axios'
const instance = axios.create({
    // baseURL:'http://localhost:5000/',
    baseURL:'https://doctor.filcan.ru/',
})
export default instance;