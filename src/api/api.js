import axios from "axios";

const URL = "https://665ecc2c1e9017dc16f17042.mockapi.io/api/";
console.log(URL)

const camperInstance = axios.create({
  baseURL: "https://665ecc2c1e9017dc16f17042.mockapi.io/api/adverts",
});

export const requestFetchCampers = async () => {
  const { data } = await camperInstance.get("/");
  return data;
};

export const requestAddCampers = async (body) => {
  const { data } = await camperInstance.post("/", body);
  return data;
};
export const requestDeleteCamper = async (id) => {
  const { data } = await camperInstance.delete(`/${id}`);
  return data;
};