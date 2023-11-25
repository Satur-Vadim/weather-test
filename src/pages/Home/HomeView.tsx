import React, { FC } from 'react';
import Layout from '../../layout/Layout';
import Search from './components/Search';
import IHome from './interfaces/IHome';
import WeatherItem from './components/WeatherItem';

const HomeView: FC<IHome> = ({
  search, setSearch, foundCities, onSelectCity, weather, weatherHistory,
}) => (
  <Layout>
    <div className="flex justify-center items-center">
      <Search search={search} setSearch={setSearch} foundCities={foundCities} onSelectCity={onSelectCity} />
    </div>
    <div className="flex p-3 -mx-3 flex-wrap">
      {weather && (
      <>
        <h2 className="text-4xl font-bold dark:text-white w-full">
          {`${weather?.location.name} ${weather.location.region}`}
        </h2>
        <WeatherItem weather={weather} />
      </>
      )}
    </div>
    <div className="flex p-3 -mx-3 flex-wrap">
      {weatherHistory && (
      <>
        <h2 className="text-4xl font-bold dark:text-white w-full">History</h2>
        <hr className="w-full my-3" />
        {weatherHistory.map((item) => (
          <>
            <h3 className="text-2xl font-bold dark:text-white w-full mt-6">
              {`${item?.location.name} ${item.location.region}`}
            </h3>
            <WeatherItem key={item.location.name} weather={item} />
          </>
        ))}
      </>
      )}
    </div>
  </Layout>
);

export default HomeView;
