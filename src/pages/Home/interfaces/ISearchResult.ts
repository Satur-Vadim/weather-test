import { TCity } from './TCity';

export default interface ISearchResult {
  cities: TCity[];
  onSelectCity: (city: TCity) => void;
}
