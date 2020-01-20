import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/projects',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getProjects(){
        return apiClient.get('/projects')
    }
}