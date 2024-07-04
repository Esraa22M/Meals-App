import { View, Text, Image, ScrollView } from "react-native"; //m     //M
import { MEALS } from "../../backend/data/dummy";
import { useLayoutEffect, useContext } from "react";
import { MealDetailsHeaderButton } from "../../components/MealDetailsHeaderButton/MealDetailsHeaderButton.components";
import { MealDetailsInfo } from "./MealDetails/MealDetailsInfo.components";
import { MealDetailsList } from "./MealDetailsList/MealDetailsList.compontents";
import { MealDetailsSubTitle } from "./MealDetailsSubTitle/MealDetailsSubTitle.components";
import { FavouriteContext } from "../../store/context/favorites.context";
import { styles } from "./MealDetails.styles";
//m     //M
export const MealDetails = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const { mealsIds, removeFavourite, addFavouriteMealsIds } =
		useContext(FavouriteContext);
	const mealsIsFav = mealsIds.includes(mealId);
	const changeFavouriteStatusHandler = () => {
		console.log('here')
		if (mealsIsFav) {
			removeFavourite(mealId);
		}else{addFavouriteMealsIds(mealId)}
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<MealDetailsHeaderButton
					mealsIsFav={mealsIsFav}
					changeFavouriteStatusHandler={changeFavouriteStatusHandler}
				/>
			),
		}),
			[navigation];
	});
	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetailsInfo
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
			/>
			<MealDetailsSubTitle>Ingredients</MealDetailsSubTitle>
			<MealDetailsList list={selectedMeal.ingredients} />
			<MealDetailsSubTitle>Steps</MealDetailsSubTitle>

			<MealDetailsList list={selectedMeal.steps} />
		</ScrollView>
	);
};
