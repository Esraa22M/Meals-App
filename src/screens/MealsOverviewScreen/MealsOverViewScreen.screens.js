import { MEALS, CATEGORIES } from "../../backend/data/dummy";
import { styles } from "./MealsOverViewScreen.styles";
import { SafeAreaView, FlatList } from "react-native";
import { useLayoutEffect } from "react";
////m     //M
import { MealIteam } from "../../components/MealItea/MealIteam.components";
export const MealsOverViewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;
	const displayMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
	const renderMealItem = ({ item }) => {
		return <MealIteam item={item} />;
	};
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
		navigation.setOptions({ title: categoryTitle.toUpperCase() });
	}, [catId, navigation]);
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</SafeAreaView>
	);
};
