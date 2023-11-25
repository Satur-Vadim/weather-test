import { TCity } from './TCity';

export default interface ISearch {
  search: string;
  setSearch: (value: string) => void
  foundCities: TCity[];
  onSelectCity: (city: TCity) => void;
}
