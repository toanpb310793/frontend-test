import { OPEN_WEATHER_API_KEY } from './variables';

export const OPEN_WEATHER_API_URL = (cityName: string, countryName: string): string => {
  const urlPaths: string[] = [
    `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_API_KEY}`,
  ];
  if (!cityName) return '';

  urlPaths.push(`&q=${cityName}`);
  if (countryName) urlPaths.push(`,${countryName}`);

  return urlPaths.join('');
};
