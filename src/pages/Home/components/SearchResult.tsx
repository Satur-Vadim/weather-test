import React from 'react';
import ISearchResult from '../interfaces/ISearchResult';

const SearchResult = ({ cities, onSelectCity }: ISearchResult) => (
  <ul className="absolute w-full rounded-bl-3xl rounded-br-3xl border border-gray-300 rounded-lg focus:border-blue-400
   focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 overflow-hidden bg-white"
  >
    {cities.map((city) => (
      <li
        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        key={`City_${city.id}`}
      >
        <button type="button" onClick={() => onSelectCity(city)}>{`${city.name}, ${city.region}`}</button>
      </li>
    ))}
  </ul>
);

export default SearchResult;
