import { View, Text, Image, ScrollView } from "react-native"; //m     //M
import { MEALS } from "../../backend/data/dummy";
import { useLayoutEffect } from "react";
import { MealDetailsHeaderButton } from "../../components/MealDetailsHeaderButton/MealDetailsHeaderButton.components";
import { MealDetailsInfo } from "./MealDetails/MealDetailsInfo.components";
import { MealDetailsList } from "./MealDetailsList/MealDetailsList.compontents";
import { MealDetailsSubTitle } from "./MealDetailsSubTitle/MealDetailsSubTitle.components";
import { styles } from "./MealDetails.styles";
export const MealDetails = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const headerButtonPressed = () => console.log("pressed!");
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<MealDetailsHeaderButton
					onPress={headerButtonPressed}
					title="Press here!"
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
