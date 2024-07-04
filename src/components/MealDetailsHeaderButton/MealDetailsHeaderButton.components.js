import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./MealDetailsHeaderButton.styles";
export const MealDetailsHeaderButton = ({ mealsIsFav, changeFavouriteStatusHandler }) => (
	<Pressable
		style={({ pressed }) => [
			styles.buttonContainer,
			pressed ? styles.buttonPressed : null,
		]}
		onPress={changeFavouriteStatusHandler}
	>
		<Ionicons name={`${mealsIsFav ? "star" : "star-outline"}`} size={24} color="#644117" />
	</Pressable>
);
