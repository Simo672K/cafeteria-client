import {useEffect, useState} from "react"
import axios from "axios";

const BASE_URL= 'https://cafeteriacmcn52-default-rtdb.europe-west1.firebasedatabase.app'

export function useGetProducts(){
  const [data, setData]=  useState(null)
  useEffect(()=>{
    setData(getProducts())
  }, [])

  return data;
}

async function getProducts(){
  const response= await axios.get(`${BASE_URL}/products.json`);

  return response.data
}