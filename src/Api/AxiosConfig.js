import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MTM1OTQ1LCJpYXQiOjE2NTgxMTc5NDV9.dQ0ZAgZ8F1lBbPrgeLKybpMUrmg7Hl0r7lMlmSjWxPjxqHhYB_-MnMP5XYWGUeSTeGoZfac7MYdkQJm8WHbsNA";

export default axios.create({
    baseURL: BASE_URL
});


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        Authorization: `Bearer ${token1}`,
    }
   
});