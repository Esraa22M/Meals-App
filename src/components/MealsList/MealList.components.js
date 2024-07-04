import {SafeAreaView , FlatList} from "react-native";
import { styles } from "../../screens/MealsOverviewScreen/MealsOverViewScreen.styles";
import { MealIteam } from "./MealItea/MealIteam.components";
export const MealList = ({displayMeals}) => {
    const renderMealItem = ({ item }) => {
		return <MealIteam item={item} />;
	};
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
