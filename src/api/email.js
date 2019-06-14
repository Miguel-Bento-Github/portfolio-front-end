import axios from "axios";

const url = process.env.REACT_APP_BACK_URL + "/api";

export const getEmails = () => axios.get(`${url}/contact`);

export const sendEmail = data => axios.post(`${url}/contact/send`, data);

export default {
  getEmails,
  sendEmail
};
