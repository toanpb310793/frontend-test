import axios from './axios';
import { ResponseFailureTypes } from '../types';
import { OPEN_WEATHER_API_URL } from '../commons/constants';
import { LocationWeatherResponseTypes } from '../types/response';

/**
 * Fetches weather data for a given city and country.
 *
 * @param cityName - The name of the city.
 * @param countryName - The name of the country.
 * @returns A promise that resolves to an array of LocationWeatherTypes or RequestFailureTypes.
 */
export const fetchWeatherData = async (
  cityName: string,
  countryName: string
): Promise<LocationWeatherResponseTypes[] | ResponseFailureTypes> => {
  try {
    // Make a GET request to the OpenWeather API with the encoded city and country names
    const { data } = await axios.get(
      OPEN_WEATHER_API_URL(encodeURIComponent(cityName), encodeURIComponent(countryName))
    );

    return data;
  } catch (err) {
    console.error('Error fetching weather data:', err);
    // If there is an error, return the error response data with an additional isError flag
    return { ...err.response.data, isError: true };
  }
};
