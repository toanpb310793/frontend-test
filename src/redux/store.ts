import { init, RematchDispatch, RematchRootState, RematchStore } from '@rematch/core';
import thunk from 'redux-thunk';

import { RootModel, models } from './models';

const middlewares = [thunk];

export const store = init({
  models,
  redux: {
    devtoolOptions: {
      realtime: true,
      name: "Today's Weather App",
      disabled: false, // disable it on production
    },
    middlewares,
  },
});

export type Store = RematchStore<RootModel, any>;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
