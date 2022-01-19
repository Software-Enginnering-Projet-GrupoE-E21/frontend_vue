import axios from 'axios';

export const coursesService = {
    async listCourses(userToken){
        const authStr = 'Bearer '.concat(userToken); 
        const response = await axios.get('http://20.45.41.19:8080/api/v1/modules', { headers: { Authorization: authStr } });
        if (response.data) return response.data;

    },
    async listCourseById(userToken, courseId){
        const authStr = 'Bearer '.concat(userToken); 
        const response = await axios.get(`http://20.45.41.19:8080/api/v1/modules/${courseId}`, { headers: { Authorization: authStr } });
        if (response.data) return response.data;

    },
};