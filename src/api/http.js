import axios from "axios";

const BASE_URL= 'https://cafeteriacmcn52-default-rtdb.europe-west1.firebasedatabase.app'

export async function fetchRoute(route){
  return await axios.get(`${BASE_URL}/${route}`);
  // const response= await axios.get(`${BASE_URL}/products.json`);
  // console.log(response.data)
  // return response.data
}