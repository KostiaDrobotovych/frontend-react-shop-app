import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

export const getAllMenuItems = async () => {
  const response = await axios.get('menu');
  return response.data;
};

export const getDishById = async id => {
  const response = await axios.get(`menu/${id}`);
  return response;
};
export const getCategories = async () => {
  const response = await axios.get('categories');
  return response;
};

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`menu?category=${category}`);
  return response.data;
};