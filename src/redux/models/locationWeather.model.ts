import { RematchDispatch, createModel } from '@rematch/core';
import produce from 'immer';

import { RootModel } from '../models';
import { storeName as locationWeatherStoreName } from '../entities/locationWeather.entity';
import { ResponseFailureTypes } from '../../types';

export const storeName = 'locationWeatherModel';

type LayoutModelTypes = {
  detailId: number;
  errorMsg: string;
};

const initialState: LayoutModelTypes = {
  detailId: null,
  errorMsg: '',
};

// Define the locationWeatherModel
export const locationWeatherModel: any = createModel<RootModel>()({
  name: storeName,
  state: initialState,
  reducers: {
    // Set the detailId in the state to the provided payload
    setDetailId: produce((state, payload: number = null) => {
      state.detailId = payload;
    }),
    // Set the errorMsg in the state to the provided payload
    setErrorMsg: produce((state, payload = '') => {
      state.errorMsg = payload;
    }),
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    // Asynchronously fetch the location weather based on the provided cityName and countryName
    async getLocationWeather(args: { cityName: string; countryName: string }) {
      // Clear the errorMsg in the state
      dispatch[storeName].setErrorMsg();
      // Fetch the location weather from the locationWeatherStore
      const result = await dispatch[locationWeatherStoreName].fetchLocationWeather(args);

      // Check if the result is not an error
      if (!(result as ResponseFailureTypes).isError) {
        // Set the detailId in the state to the id from the result
        dispatch[storeName].setDetailId(result.id);
      } else {
        // Set the errorMsg in the state to the error message from the result
        dispatch[storeName].setErrorMsg((result as ResponseFailureTypes).message);
      }
    },
  }),
});

export default locationWeatherModel;
