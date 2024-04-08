import * as yup from 'yup'; 

export const loginSchema = yup.object({
    email: yup.string()
        .required()
        .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/, 'Invalid Email'),

    password: yup.string()
        .required(),
}).required(); 

export const registerSchema = yup.object({
    name : yup.string().required(),
    username: yup.string().required(),

    email: yup.string()
      .required()
      .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/, 'Invalid Email'),

    password: yup.string()
      .required(),
  }).required();