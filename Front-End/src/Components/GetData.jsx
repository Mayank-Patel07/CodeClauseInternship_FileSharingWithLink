import axios from 'axios';

const url = "http://localhost:8000";

export const uploadData = async (data) => {
  try {
    let response = await axios.post(`${url}/uploads`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
