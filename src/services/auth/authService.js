import axios from "axios";

const API_URL = '/api/';

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL+'users', userData);
    
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// login user
const login = async (userData) => {
    const response = await axios.post(API_URL+'users/login', userData);
    
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}



// logout user
const logout = () => {
    localStorage.removeItem('user');
}


const authService = {
    register,
    logout,
    login
}

export default authService;