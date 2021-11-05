import axios from 'axios';

const github = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 50000,
});

export default github;