import { View, Text, Image } from "react-native"; //m     //M
import { MEALS } from "../../backend/data/dummy";
import { MealDetailsInfo } from "./MealDetails/MealDetailsInfo.components";
import { MealDetailsList } from "./MealDetailsList/MealDetailsList.compontents";
import { MealDetailsSubTitle } from "./MealDetailsSubTitle/MealDetailsSubTitle.components";
import { styles } from "./MealDetails.styles";
export const MealDetails = ({ route }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View>
			<Image source={{ uri: selectedMeal.imageUrl }} style={ styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetailsInfo
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
			/>
			<MealDetailsSubTitle>Ingredients</MealDetailsSubTitle>
			<MealDetailsList list={selectedMeal.ingredients}/>
			<MealDetailsSubTitle>Steps</MealDetailsSubTitle>

			<MealDetailsList list={selectedMeal.steps} />

		</View>
	);
};
