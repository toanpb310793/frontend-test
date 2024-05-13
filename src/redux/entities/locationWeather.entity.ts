import { createModel, RematchDispatch } from '@rematch/core';
import { produce } from 'immer';

import { RootModel } from '../models';
import { fetchWeatherData } from '../../services';
import { ResponseFailureTypes } from '../../types';
import { LocationWeatherResponseTypes } from '../../types/response';

export const storeName = 'locationWeatherEntity';

// Define the locationWeatherEntity model
export const locationWeatherEntity: any = createModel<RootModel>()({
  name: storeName,
  state: { ids: {} },
  reducers: {
    // Save the location weather entities to the state
    saves: produce((state, entities: LocationWeatherResponseTypes[]) => {
      (entities || []).forEach((entity: any) => {
        if (entity) state.ids[entity.id] = entity;
      });
    }),
    delete: produce((state, entity) => {
      delete state.ids[entity.id];
    }),
  },
  effects: (dispatch: RematchDispatch<typeof locationWeatherEntity>) => ({
    // Fetch the location weather data from the API
    async fetchLocationWeather(args: { cityName: string; countryName: string }) {
      const resp = await fetchWeatherData(args.cityName, args.countryName);

      // If the response is not an error, save the data to the state
      if (!(resp as ResponseFailureTypes).isError) {
        dispatch[storeName].saves([resp]);
      }

      return resp;
    },
  }),
});

export default locationWeatherEntity;
