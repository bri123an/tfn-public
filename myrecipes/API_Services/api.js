import axios from 'axios';
const api = axios.create({
    baseURL: "http://3.92.28.166:5000/api",
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA4MjUxNDY0MTEyMmQ5NDRjZDk5YTcwIn0sImlhdCI6MTYxOTE1MzIyMiwiZXhwIjoxNjE5NTg1MjIyfQ.37Ejz3bunRuju_8Vo7O2d8dDlu2yo7H9JQE-rjco768'
    }
});

export default api;