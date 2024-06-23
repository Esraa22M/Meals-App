import { StyleSheet, Text } from "react-native";
export const MealDetailsSubTitle = ({ children }) => {
	return <Text style={styles.subtitle}>{children}</Text>;
};
const styles = StyleSheet.create({
	subtitle: { fontSize: 18, fontWeight: "bold" },
});
