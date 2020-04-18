import axios from 'axios';

const url = process.env.REACT_APP_BACK_URL + '/api';

export const createProject = (data) => axios.get(`${url}/project/new`, data);

export const getProjects = () => axios.get(`${url}/project`);

export const putProject = (id, data) => axios.get(`${url}/project/${id}`, data);

export const deleteProject = (id) => axios.get(`${url}/project/${id}`);

export default {
  createProject,
  getProjects,
  putProject,
  deleteProject,
};
