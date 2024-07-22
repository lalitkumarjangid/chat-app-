import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337', // Update this to your Strapi backend URL
});

export const loginUser = async (identifier, password) => {
  const response = await api.post('/auth/local', { identifier, password });
  return response.data;
};

export const registerUser = async (username, email, password) => {
  const response = await api.post('/auth/local/register', { username, email, password });
  return response.data;
};

export const fetchMessages = async (roomId) => {
  const response = await api.get(`/messages?room=${roomId}`);
  return response.data;
};

export const sendMessage = async (text, roomId, user) => {
  const response = await api.post('/messages', { text, room: roomId, user });
  return response.data;
};