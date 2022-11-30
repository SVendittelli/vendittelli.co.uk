import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { Action } from 'redux';
import bansSlice from './bans.slice';
import civilisationsSlice from './civilisations.slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      [bansSlice.name]: bansSlice.reducer,
      [civilisationsSlice.name]: civilisationsSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface HydrateAction<T = any> extends Action {
  payload: T;
}
export const isHydrateAction = (action: AnyAction): action is HydrateAction =>
  action.type === HYDRATE;
