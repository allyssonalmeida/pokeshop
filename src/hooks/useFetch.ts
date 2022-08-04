import axios from "axios";
import { useEffect, useState } from "react";


const api = axios.create({baseURL: 'https://pokeapi.co/api/v2'})

export function useFetch<T = unknown>(url: string){
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data)
      })
  }, [])

  return { data }
}
