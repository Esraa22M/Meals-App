import { View, Text } from "react-native";
import { styles } from "./MealDetailsInfo.styles";
export const MealDetailsInfo = ({duration , complexity, affordability}) => {
	return (
		<View style={styles.mealItemdetails}>
			<Text style={styles.mealItemdetailsitem}>{duration}</Text>
			<Text style={styles.mealItemdetailsitem}>{complexity.toUpperCase()}</Text>
			<Text style={styles.mealItemdetailsitem}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	);
};
