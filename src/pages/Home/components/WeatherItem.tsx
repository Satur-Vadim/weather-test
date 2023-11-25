import { useTranslation } from 'next-i18next';
import IWeatherItem from '../interfaces/IWeatherItem';

const WeatherItem = ({ weather }: IWeatherItem) => {
  const { t } = useTranslation('home');

  return (
    <div className="border border-gray-200 rounded-lg shadow gap-6
  flex dark:bg-gray-800 dark:border-gray-700 mt-3 p-3 w-full items-center justify-start text-white
  bg-gradient-to-tl from-blue-900 via-black to-black"
    >
      <div className="text-center">
        <img
          width={84}
          height={84}
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <span>{weather.current.condition.text}</span>
      </div>
      <div className="flex flex-wrap flex-col">
        <span>{`${t('wind')}: ${weather.current.wind_kph} kmph`}</span>
        <span>{`${t('precip')}: ${weather.current.precip_mm} mm`}</span>
        <span>{`${t('presure')}: ${weather.current.pressure_mb} mb`}</span>
        <span>{`${t('humidity')}: ${weather.current.humidity} %`}</span>
        <span>{`${t('cloud')}: ${weather.current.cloud} %`}</span>
        <span>{`${t('temp')}: ${weather.current.temp_c} °C`}</span>
        <span>{`${t('feelsLike')}: ${weather.current.feelslike_c} °C`}</span>
      </div>
    </div>
  );
};
export default WeatherItem;
