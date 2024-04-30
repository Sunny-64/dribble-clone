import axios from "axios";
// baseURL: "https://dribble-clone-backend.netlify.app/.netlify/functions/app",
// export const BASE_URL = 'https://dribble-clone-backend.netlify.app/.netlify/functions/app'; 
export const BASE_URL = 'http://localhost:3000/.netlify/functions/app'; 


const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/.netlify/functions/app",
  headers : {
    'Authorization' : 'Bearer ' + localStorage.getItem('token'), 
    "Content-Type" : 'Application/json'
  }
});

export const signUp = (data) => {
  return axiosInstance.post('/auth/sign-up', data);
}

export const updateUserDetails = (data, token) => {
  axiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  console.log('Token in the api service : ', axiosInstance.defaults.headers.common['Authorization'])
  return axiosInstance.put(`/user` ,data);
}

export const getUser = () => {
  return axiosInstance.get("/user");
};

export const resendEmailVerificationMail = (token) => {
  return axiosInstance.post('/auth/resend-email-confirmation', {token}); 
}