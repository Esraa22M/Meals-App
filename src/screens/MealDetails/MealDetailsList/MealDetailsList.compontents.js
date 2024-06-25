import { View, Text } from "react-native";
//m     //M
import { styles } from "./MealDetailsList.styles";
export const MealDetailsList = ({ list }) => {
	return (
		<View>
			{list.map((listItem) => {
				return (
					<View style={styles.container} key={listItem}>
						<View style={styles.listItem}>
							<Text  style={styles.listItemText}>
								{listItem}
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};
