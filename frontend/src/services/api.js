/**
 * axios é um pacote que serve de client para comunicar com a API
 * comando: npm install axios
 * */
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;