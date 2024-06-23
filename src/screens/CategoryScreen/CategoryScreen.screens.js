import { CATEGORIES } from "../../backend/data/dummy";
import { View, FlatList } from "react-native";
import { CategoryGridTile } from "../../components/CategoryGrid/CategoryGridTile.components";

export const CategoriesScreen = ({ navigation }) => {
	const renderCategoryItem = ({ item }) => {
		const pressHandler = () => {
			navigation.navigate("MealsOverview", {categoryId:item.id});
		};
		return <CategoryGridTile item={item} onPress={pressHandler} />;
	};
	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={CATEGORIES}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};
