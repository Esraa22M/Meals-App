import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./MealDetailsHeaderButton.styles";
export const MealDetailsHeaderButton = (props) => (
	<Pressable {...props} style={({ pressed }) => [styles.buttonContainer, pressed ? styles.buttonPressed : null]}>
		<Ionicons name="star" size={24} color="#644117" />
	</Pressable>
);
