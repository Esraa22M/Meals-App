import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoriesScreen } from "../../screens/CategoryScreen/CategoryScreen.screens";
import { Favorites } from "../../screens/Favorites/Favorites.components";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
export const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerContentStyle: { backgroundColor: "#66bfbf" },
				drawerActiveTintColor: "white",
				drawerActiveBackgroundColor: "#f76b8a",
				drawerInactiveTintColor: "white",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title:'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={Favorites}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};
