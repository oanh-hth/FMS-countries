import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: data,
  },
  reducers : {
    searchCountry: (state, action) => {
        state.countries = data.filter( c => c.name.toLowerCase().indexOf(action.payload) !== -1)
    },

    filterRegion: (state, action) => {
      if (action.payload !== 'all') {
        state.countries = data.filter( c => c.region === action.payload)
      } else {
        state.countries = data
      }
    },

    resetList: (state) => {
      state.countries = data
    },

  }
})

export const { searchCountry, filterRegion, resetList } = countriesSlice.actions 
export const selectCountries = state => state.countries.countries

export default countriesSlice.reducer