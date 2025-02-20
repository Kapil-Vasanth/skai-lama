import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// User services
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

// Project services
const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/projects`, projectData, config);
  return response.data;
};

const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/projects`, config);
  return response.data;
};

const getProject = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/projects/${projectId}`, config);
  return response.data;
};

const updateProject = async (projectId, projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/projects/${projectId}`, projectData, config);
  return response.data;
};

const deleteProject = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/projects/${projectId}`, config);
  return response.data;
};

// File services
const createFile = async (fileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/files`, fileData, config);
  return response.data;
};

const getFiles = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/files/${projectId}`, config);
  return response.data;
};

const updateFile = async (fileId, fileData, token) => {
  console.log(fileId,fileData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/files/${fileId}`, fileData, config);
  return response.data;
};

const deleteFile = async (fileId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/files/${fileId}`, config);
  return response.data;
};

export default { register, login, createProject, getProjects, getProject , updateProject, deleteProject, createFile, getFiles, updateFile, deleteFile };