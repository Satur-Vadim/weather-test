import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCallback, useEffect, useState } from 'react';
import { getCities, getSearchHistoryWeather, getWeather } from '../src/api/home';
import useDebounce from '../src/utils/hooks/useDebounce';
import useLocalStorage from '../src/utils/hooks/useLocalStorage';
import HomeView from '../src/pages/Home/HomeView';
import IStaticProps from '../src/interfaces/IStaticProps';
import { TCity } from '../src/pages/Home/interfaces/TCity';
import { IWeather } from '../src/pages/Home/interfaces/IWeather';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedCityId, setSelectedCityId] = useState<number>(0);
  const [foundCities, setFoundCities] = useState<TCity[]>([]);
  const [weather, setWeather] = useState<IWeather | undefined>(undefined);
  const [weatherHistory, setWeatherHistory] = useState<IWeather[]>([]);

  const [historyStorage, setHistoryStorage] = useLocalStorage<number[]>('historySearch', []);

  const searchDebounce = useDebounce(search, 500);

  const handleSelectCity = useCallback((city: TCity) => {
    setSelectedCityId(city.id);
    setSearch('');

    const newHistoryState = historyStorage.filter((id) => id !== city.id).slice(0, 4);
    // newHistoryState.unshift(city.id);
    setHistoryStorage([city.id, ...newHistoryState]);
  }, [historyStorage, setHistoryStorage]);

  useEffect(() => {
    if (searchDebounce) {
      getCities(searchDebounce)
        .then((data) => {
          setFoundCities(data);
        })
        .catch(() => {});
    }
  }, [searchDebounce]);

  useEffect(() => {
    if (selectedCityId) {
      getWeather(selectedCityId)
        .then((data) => {
          setWeather(data);
        })
        .catch(() => {});
    }
  }, [selectedCityId]);

  useEffect(() => {
    if (historyStorage.length) {
      getSearchHistoryWeather(historyStorage)
        .then((data) => {
          setWeatherHistory(data);
        })
        .catch(() => {});
    }
  }, [historyStorage]);

  return (
    <HomeView
      search={search}
      setSearch={setSearch}
      foundCities={foundCities}
      onSelectCity={handleSelectCity}
      weather={weather}
      weatherHistory={weatherHistory}
    />
  );
};

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default Home;
