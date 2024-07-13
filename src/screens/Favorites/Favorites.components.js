import { useContext } from "react";
import { FavouriteContext } from "../../store/context/favorites.context";
import { MealList } from "../../components/MealsList/MealList.components";
import { MEALS } from "../../backend/data/dummy";
import { EmptyFavouriteList } from "./EmptyFavouriteList.components";
import { useSelector } from "react-redux";
export const Favorites = () => {
	// const { mealsIds } = useContext(FavouriteContext);
	const mealsIds = useSelector((state) => state.favouriteReducer.mealsIds);
	const favouriteMeals = MEALS.filter((MealIteam) =>
		mealsIds.includes(MealIteam.id)
	);
	if (favouriteMeals.length === 0) {
		return <EmptyFavouriteList />;
	}
	return <MealList displayMeals={favouriteMeals} />;
};
