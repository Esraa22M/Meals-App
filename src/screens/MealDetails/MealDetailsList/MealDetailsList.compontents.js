import { View, Text } from "react-native";
//m     //M
export const MealDetailsList = ({ list }) => {
	return (
		<View>
			{list.map((listItem) => {
				return <Text key={listItem}>{listItem}</Text>;
			})}
		</View>
	);
};
