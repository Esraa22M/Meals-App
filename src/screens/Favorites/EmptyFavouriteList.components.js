import { View, Text } from "react-native";
import { styles } from "./Favorites.styles";
export const EmptyFavouriteList = () => (
	<View style={styles.container}>
		<Text style={styles.text}>Favourite list is empty</Text>
	</View>
);
