import axios from "axios";

const URL: string = "http://localhost:4455";

export const createStudy = async (userID: string, data: any) => {
  try {
    return axios.post(`${URL}/create-study/${userID}`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const getOneUserStudy = async (userID: string) => {
  try {
    return axios.get(`${URL}/read-study/${userID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
