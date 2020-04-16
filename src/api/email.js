import axios from 'axios';

const url = process.env.REACT_APP_BACK_URL + '/api';

export const sendEmail = (data) => axios.post(`${url}/contact/send`, data);
