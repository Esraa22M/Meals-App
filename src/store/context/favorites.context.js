import { createContext, useState } from "react";
//m     //M
export const FavouriteContext = createContext({
	mealsIds: [],
	addFavouriteMealsIds: (id) => {},
	removeFavourite: (id) => {},
});
export const FavouriteContextProvider = ({ children }) => {
	const [favouriteMealsIds, setFavouriteMealsIds] = useState([]);
	const addFavouriteMealsIds = (id) => {
		setFavouriteMealsIds((currentFavIds) => [...currentFavIds, id]);
	};
	const removeFavourite = (id) => {
		setFavouriteMealsIds((currentFavIds) =>
			currentFavIds.filter((favId) => favId !== id)
		);
	};
	const value = {
		mealsIds: favouriteMealsIds,
		addFavouriteMealsIds: addFavouriteMealsIds,
		removeFavourite: removeFavourite,
	};
	return (
		<FavouriteContext.Provider value={value}>
			{children}
		</FavouriteContext.Provider>
	);
};
