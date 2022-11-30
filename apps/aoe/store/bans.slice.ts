import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, isHydrateAction } from './store';

interface BansState {
  list: string[];
}

const initialState: BansState = {
  list: [],
};

export const bansSlice = createSlice({
  name: 'bans',
  initialState,

  reducers: {
    ban: (state, action: PayloadAction<string>) => ({
      list: [...state.list, action.payload].sort(),
    }),
    unban: (state, action: PayloadAction<string>) => ({
      list: state.list.filter((civ) => civ !== action.payload),
    }),
  },

  extraReducers: (builder) => {
    builder.addMatcher(isHydrateAction, (state, action) => ({
      ...state,
      ...action.payload.bans,
      list: [...state.list, ...action.payload.bans.list],
    }));
  },
});

export const { ban, unban } = bansSlice.actions;

export const isBanned = (civ: string) => (state: AppState) =>
  state.bans.list.includes(civ);

export default bansSlice;
