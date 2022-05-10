import axios from 'axios';

const API = axios.create({ baseURL: 'https://spacedevfireupbackend.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/investors/loginInvestor', formData);
export const signUp = (formData) => API.post('/investors/RegestrationInvestor', formData);