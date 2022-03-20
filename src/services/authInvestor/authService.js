import axios from "axios";

const API_URL = '/api/';


// login investors
const loginInvestor = async (investorData) => {
    const response = await axios.post(API_URL+'investors/loginInvestor', investorData);
    
    if(response.data){
        localStorage.setItem('investor', JSON.stringify(response.data));
    }

    return response.data;
}


// logout user
const logout = () => {
    localStorage.removeItem('investor');
}


const authService = {
    logout,
    loginInvestor,
}

export default authService;