import { TCity } from './TCity';
import { IWeather } from './IWeather';

export default interface IHome {
  search: string;
  setSearch: (value: string) => void;
  foundCities: TCity[];
  onSelectCity: (city: TCity) => void;
  weatherHistory: IWeather[]
  weather?: IWeather
}
