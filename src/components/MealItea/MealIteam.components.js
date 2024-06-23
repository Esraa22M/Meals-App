import { View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MealDetailsInfo } from "../../screens/MealDetails/MealDetails/MealDetailsInfo.components";
import { styles } from "./MealIteam.styles";
//m     //M
export const MealIteam = ({ item }) => {
	const navigation = useNavigation();
	const mealItemPressHandler = () => {
		navigation.navigate("MealDetail", { mealId: item.id });
	};
	const { title, imageUrl, duration, complexity, affordability } = item;
	return (
		<View style={styles.mealItemContainer}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				onPress={mealItemPressHandler}
			>
				<View>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<MealDetailsInfo
					duration={duration}
					complexity={complexity}
					affordability={affordability}
				/>
			</Pressable>
		</View>
	);
};
