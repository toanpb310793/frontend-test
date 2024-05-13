import { createSelector } from 'reselect';
import { LocationWeatherResponseTypes } from '../../types/response';

export const getSelectedLocationWeather = createSelector(
  (state) => state.locationWeatherEntity.ids,
  (state) => state.locationWeatherModel.detailId,
  (ids, detailId) => {
    const item: LocationWeatherResponseTypes = ids[detailId];
    if (!item) return null;

    return {
      id: item.id,
      name: [item.name, item.sys?.country].join(', '),
      mainWeather: item.weather[0]?.main || '',
      description: item.weather[0]?.description || '',
      humidity: item.main.humidity,
      temp: item.main.temp,
      tempMax: item.main.temp_max,
      tempMin: item.main.temp_min,
      date: item.dt,
    };
  }
);

export const getLocationWeathers = createSelector(
  (state) => state.locationWeatherEntity.ids,
  (ids) =>
    Object.values(ids).map((item: LocationWeatherResponseTypes) => ({
      id: item.id,
      name: [item.name, item.sys?.country].join(', '),
      date: item.dt,
    }))
);
