import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: 'An error occurred' };
  }
};

export const getMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: 'An error occurred' };
  }
};
