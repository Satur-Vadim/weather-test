import axios from '../services/axios';
import { TCity } from '../pages/Home/interfaces/TCity';
import { IWeather } from '../pages/Home/interfaces/IWeather';

export const getCities = async (searchValue: string) => {
  const { data } = await axios.get<TCity[]>(`/search.json?q=${searchValue}`);
  return data;
};
export const getWeather = async (cityId: number) => {
  const { data } = await axios.get<IWeather>(`/current.json?q=id:${cityId}`);
  return data;
};

export const getSearchHistoryWeather = async (cityIds: number[]) => {
  const requests = cityIds.map((cityId) => (
    axios.get<IWeather>(`/current.json?q=id:${cityId}`)
  ));

  const responses = await Promise.all(requests);
  return responses.map((response) => response.data);
};
