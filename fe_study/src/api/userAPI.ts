import axios from "axios";

const URL: string = "http://localhost:4455";

export const createUser = async (data: any) => {
  try {
    return axios.post(`${URL}/create-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const loginUser = async (data: any) => {
  try {
    return axios.post(`${URL}/login-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const getOneUser = async (userID: string) => {
  try {
    return axios.post(`${URL}/get-one-user/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
