import { createModel } from '@rematch/core';
import produce from 'immer';

import { RootModel } from '../models';
import { LAYOUT_THEMES } from '../../commons/constants';

export const storeName = 'layoutModel';

type LayoutModelTypes = {
  isLoading: boolean;
  theme: LAYOUT_THEMES;
};

const initialState: LayoutModelTypes = {
  isLoading: true,
  theme: LAYOUT_THEMES.LIGHT,
};

// Define the layoutModel using createModel function from @rematch/core
export const layoutModel: any = createModel<RootModel>()({
  name: storeName,
  state: initialState,
  reducers: {
    // Reducer to set the loading state of the layout
    setLoading: produce((state, payload: boolean) => {
      state.isLoading = payload;
    }),
    // Reducer to set the theme of the layout
    setTheme: produce((state, payload: LAYOUT_THEMES) => {
      state.theme = payload;
    }),
  },
});

export default layoutModel;
