// utils/api.js
import axios from 'axios';

// Function to make a GET request
export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};

// Function to make a POST request
export const postData = async (url, payloadData) => {
  try {
    const response = await axios.post(url, payloadData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error posting data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};

// Function to make a PUT request
export const putData = async (url, payloadData) => {
  try {
    const response = await axios.put(url, payloadData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error updating data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};

// Function to make a DELETE request
export const deleteData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error deleting data:', error);
    throw error; // Rethrow the error for handling in the caller function
  }
};
