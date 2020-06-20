import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.defaults.headers.common['Authorization'] = 'Auth Token From Instance'

export default instance