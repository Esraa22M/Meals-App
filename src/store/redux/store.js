import { configureStore } from "@reduxjs/toolkit";
import favourite from "./favourite";
export const store = configureStore({
	reducer: { favouriteReducer: favourite },
});
