import { createSlice } from "@reduxjs/toolkit";
const favouriteSlice = createSlice({
	name: "favourites",
	initialState: { mealsIds: [] },
	reducers: {
		addFavouriteMealsIds: (state, action) => {
			state.mealsIds.push(action.payload.id);
		},
		removeFavourite: (state) => {
			state.mealsIds.splice(state.mealsIds.indexOf(action.payload.id), 1);
		},
	},
});
export const addFavouriteMealsIds = favouriteSlice.actions.addFavouriteMealsIds;
export const removeFavourite = favouriteSlice.actions.removeFavourite;

export default favouriteSlice.reducer;
