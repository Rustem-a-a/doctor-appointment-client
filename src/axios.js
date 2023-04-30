import axios from 'axios'
const instance = axios.create({
    baseURL:'http://localhost:5000/',
    // baseURL:'https://listofpurchasesserver.onrender.com/',
})
export default instance;