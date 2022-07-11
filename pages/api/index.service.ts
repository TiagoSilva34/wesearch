import axios from 'axios'

export const Api = () => {
  return axios.create({
    baseURL: "https://parallelum.com.br/fipe/api/v1/carros/"
  })
}

export const ApiAvatar = () => {
  return axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
  })
}