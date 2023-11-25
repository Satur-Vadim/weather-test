import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Input from '../../../components/Input/Input';
import ISearch from '../interfaces/ISearch';
import SearchResult from './SearchResult';

const Search: FC<ISearch> = ({
  search, setSearch, foundCities, onSelectCity,
}) => {
  const { t } = useTranslation('home');
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img alt="search" className="w-5 h-5 text-gray-400" aria-hidden="true" src="/search.svg" />
        </div>
        <Input
          type="search"
          value={search}
          placeholder={`${t('search')}`}
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
           focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {foundCities.length > 0 && search && (
          <SearchResult cities={foundCities} onSelectCity={onSelectCity} />
        )}
      </div>
    </div>
  );
};

export default Search;
