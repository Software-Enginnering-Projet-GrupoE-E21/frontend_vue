import axios from 'axios';

export const authService = {
    async register(user){
        const response = await axios.post('http://20.45.41.19:8080/api/v1/auth/register', user);
        if (response) return response;

    },
    async login(username, password){
        const response = await axios.post('http://20.45.41.19:8080/api/v1/auth/login', { username, password });
		if (response.data) return response.data;
    }
};
