import type { EntityState } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { civilisations } from '../data/civilisations';
import type { CivilisationDetails } from '../types/civilisations';
import { AppState, isHydrateAction } from './store';

const civilisationsAdapter = createEntityAdapter<CivilisationDetails>();

const entities = {};
civilisations.forEach((civ) => {
  entities[civ.id] = civ;
});
const ids = Object.keys(entities);

const initialState: EntityState<CivilisationDetails> =
  civilisationsAdapter.getInitialState({
    ids,
    entities,
  });

export const civilisationsSlice = createSlice({
  name: 'civilisations',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(isHydrateAction, (state, action) => ({
      ...state,
      ...action.payload.civilisations,
    }));
  },
});

export const {
  selectById: selectCivilisationById,
  selectIds: selectCivilisationIds,
  selectEntities: selectCivilisationEntities,
  selectAll: selectAllCivilisations,
  selectTotal: selectTotalCivilisations,
} = civilisationsAdapter.getSelectors((state: AppState) => state.civilisations);

export default civilisationsSlice;
