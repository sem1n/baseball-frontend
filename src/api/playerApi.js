import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/players",
});

export const getPlayerList = async () => {
  const res = await api.get(``);
  return res.data;
};

export const getPlayerDetail = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};
