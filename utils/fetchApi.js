import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d9be5ad100msh8a5c5dd216e3c7ep1cda44jsn0b07482d98cd",
    },
  });

  return data;
};
