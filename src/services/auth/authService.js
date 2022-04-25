import axios from "axios";

const API_URL = '/api/';

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL+'users', userData);
    
    if(response.data){
        localStorage.setItem('entrepreneur', JSON.stringify(response.data));
    }

    return response.data;
}

// login user
const login = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/entrepreneurs/login', userData);
    
    if(response.data){
        localStorage.setItem('entrepreneur', JSON.stringify(response.data));
    }

    return response.data;
}



// logout user
const logout = async () => {
    let user = JSON.parse(localStorage.getItem('entrepreneur'));
    console.log(user);
    await axios.put('http://localhost:5000/api/entrepreneurs/logout/'+user._id);
    localStorage.removeItem('entrepreneur');
}

// login investors
const loginInvestor = async (investorData) => {
    const response = await axios.post(API_URL+'investors/loginInvestor', investorData);
    
    if(response.data){
        localStorage.setItem('investor', JSON.stringify(response.data));
    }

    return response.data;
}






// logout logoutInvestor
const logoutInvestor = () => {
    localStorage.removeItem('investor');
}


const authService = {
    register,
    logout,
    login,
    logoutInvestor,
    loginInvestor,
}

export default authService;