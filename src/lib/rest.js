// utils/api.js
import axios from 'axios';

// Function to make a GET request
export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const { data, status } = response;
    const success = status >= 200 && status < 300;

    // Return an object containing the desired information
    return { data, success, status, error: null };
  } catch (error) {
    // Handle error
    const { response } = error;
    const status = response ? response.status : null;

    // Return an object with error information
    return { data: null, success: false, status, error: error.message || 'Unknown error' };
  }
};

// Function to make a POST request
export const postData = async (url, payloadData) => {
  try {
    const response = await axios.post(url, payloadData);
    const { data, status } = response;
    const success = status >= 200 && status < 300;

    // Return an object containing the desired information
    return { data, success, status, error: null };
  } catch (error) {
    // Handle error
    const { response } = error;
    const status = response ? response.status : null;

    // Return an object with error information
    return { data: null, success: false, status, error: error.message || 'Unknown error' };
  }
};

// Function to make a PUT request
export const putData = async (url, payloadData) => {
  try {
    const response = await axios.put(url, payloadData);
    const { data, status } = response;
    const success = status >= 200 && status < 300;

    // Return an object containing the desired information
    return { data, success, status, error: null };
  } catch (error) {
    // Handle error
    const { response } = error;
    const status = response ? response.status : null;

    // Return an object with error information
    return { data: null, success: false, status, error: error.message || 'Unknown error' };
  }
};

// Function to make a DELETE request
export const deleteData = async (url) => {
  try {
    const response = await axios.delete(url);
    const { data, status } = response;
    const success = status >= 200 && status < 300;

    // Return an object containing the desired information
    return { data, success, status, error: null };
  } catch (error) {
    // Handle error
    const { response } = error;
    const status = response ? response.status : null;

    // Return an object with error information
    return { data: null, success: false, status, error: error.message || 'Unknown error' };
  }
};
