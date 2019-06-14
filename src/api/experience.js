import axios from "axios";

const url = process.env.REACT_APP_BACK_URL + "/api";

export const getXp = () => axios.get(`${url}/xp`);

export const createXp = data => axios.post(`${url}/xp/new`, data);

export default {
  getXp,
  createXp
};
