import axios from "axios";
export const BASE_URL = 'https://dribble-clone-backend.onrender.com'; 
// export const BASE_URL = 'http://localhost:3000'; 


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers : {
    "Content-Type" : 'Application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signUp = (data) => {
  return axiosInstance.post('/auth/sign-up', data);
}

export const updateUserDetails = (data) => {
  axiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  return axiosInstance.put(`/user` ,data);
}

export const getUser = () => {
  return axiosInstance.get("/user");
};

export const resendEmailVerificationMail = (token) => {
  return axiosInstance.post('/auth/resend-email-confirmation', {token}); 
}