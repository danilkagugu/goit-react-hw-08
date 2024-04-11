import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filter", // Ім'я слайсу
  initialState: { name: "" }, //Початковий стан редюсера слайсу
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// екшени
export const { changeFilter } = filterSlice.actions;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;

export const selectFilteredName = (state) => state.filter.name;
