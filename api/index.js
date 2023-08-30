import axios from "axios";

const BASE_URL = "https://smartwater101.herokuapp.com/v1";

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, data);
    return response.data.token;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};

export const getProducts = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
