import { StyleSheet, Text, View } from "react-native";
export const MealDetailsSubTitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	subtitleContainer: { borderBottomColor: "black", borderBottomWidth: 2 },
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		margin: 6,
		textAlign: "center",
		padding: 6,
	},
});
