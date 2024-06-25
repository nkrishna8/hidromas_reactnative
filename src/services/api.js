import axios from 'axios';

const API_BASE_URL = 'https://api.hidromas.nl';
const API_KEY = 'hidromas-we-app-01~c^Dt0Oc32';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'apikey': API_KEY,
  },
});

export const login = async (email, password) => {
    
    let req_data={
        "email":email,
        "password":password
    }

  try {
    const response = await api.post('/user-login', req_data);
    return response.data;
  } 
  catch (error) {
    throw error;
  }
};


export const getUser = async (user_id) => {
    
    let req_data={
        "user_id": user_id
    }

  try {
    const response = await api.post('/get-user', req_data);
    return response.data;
  } 
  catch (error) {
    throw error;
  }
};

