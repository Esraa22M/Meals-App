import { MEALS, CATEGORIES } from "../../backend/data/dummy";
import { useLayoutEffect } from "react";
import { MealList } from "../../components/MealsList/MealList.components";
////m     //M
export const MealsOverViewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;
	const displayMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
	
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
		navigation.setOptions({ title: categoryTitle.toUpperCase() });
	}, [catId, navigation]);
	return (
		<MealList displayMeals={displayMeals} />
	);
};
