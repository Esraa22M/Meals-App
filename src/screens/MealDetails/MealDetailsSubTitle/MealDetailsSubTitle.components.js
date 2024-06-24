import { Text, View } from "react-native";
import { styles } from "./MealDeatisSubTitle.styles";
export const MealDetailsSubTitle = ({ children }) => {
	return (
		<View style={styles.subtitleOutterContainer}>
			<View style={styles.subtitleInnerContainer}>
				<Text style={styles.subtitle}>{children}</Text>
			</View>
		</View>
	);
};
