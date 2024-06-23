import { StyleSheet, Platform } from "react-native";
export const styles = StyleSheet.create({
	GridTileContainer: {
		flex: 1,
		margin: 16,
		height: 150,
		elevation: 4,
		overflow: Platform.OS ? "hidden" : "visible",
	},
	button: { flex: 1 },
	buttonPressed: { opacity: 0.5 },
	GridTileInnerContainer: {
		flex: 1,
		padding: 16,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
	},
	title: { fontWeight: "bold", fontSize: 18 },
});
