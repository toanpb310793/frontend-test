import { Models } from '@rematch/core';

/* ENTITIES */
import {
  locationWeatherEntity,
  storeName as locationWeatherEntityStoreName,
} from './entities/locationWeather.entity';

/* MODELS */
import { layoutModel, storeName as layoutModelStoreName } from './models/layout.model';
import {
  locationWeatherModel,
  storeName as locationWeatherStoreName,
} from './models/locationWeather.model';

export interface RootModel extends Models<RootModel> {
  /* ENTITIES */
  [locationWeatherEntityStoreName]: typeof locationWeatherEntity;
  /* MODELS */
  [layoutModelStoreName]: typeof layoutModel;
  [locationWeatherStoreName]: typeof locationWeatherModel;
}

export const models: RootModel = {
  /* ENTITIES */
  [locationWeatherEntityStoreName]: locationWeatherEntity,
  /* MODELS */
  [layoutModelStoreName]: layoutModel,
  [locationWeatherStoreName]: locationWeatherModel,
};
