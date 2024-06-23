import { View, Pressable, Text, StyleSheet } from "react-native";
import { styles } from "./CategoryGridTile.styles";
//m
export const CategoryGridTile = ({item, onPress}) => {
	const { title, color } = item;
	return (
		<View style={[styles.GridTileContainer, ]}>
			<Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{ color: '#ccc' }} onPress={onPress}>
				<View style={[styles.GridTileInnerContainer, {backgroundColor:color}]} >
                    <Text style={styles.title}>{ title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

