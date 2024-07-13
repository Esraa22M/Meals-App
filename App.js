import {  StatusBar } from "react-native";
import { MealsOverViewScreen } from "./src/screens/MealsOverviewScreen/MealsOverViewScreen.screens";
import { NavigationContainer } from "@react-navigation/native";
//m     //M
import { createStackNavigator } from "@react-navigation/stack";
import { MealDetails } from "./src/screens/MealDetails/MealDetails.sceens";
import { DrawerNavigation } from "./src/Navigation/DrawerNavigation/Drawer.navigations";
import { FavouriteContextProvider } from "./src/store/context/favorites.context";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
const stack = createStackNavigator();
export default function App() {
		return (
		<>
			<StatusBar style="light" />
			<Provider store={store}>
				<NavigationContainer>
					<stack.Navigator
						initialRouteName="CategoriesScreen"
						screenOptions={{ backgroundColor: "#ffffff" }}
					>
						<stack.Screen
							name="CategoriesScreen"
							component={DrawerNavigation}
							options={{
								title: "All Categories",
								headerStyle: { backgroundColor: "#ffff" },
								headerTintColor: "black",
								headerShown: false,
								// cardStyle: { backgroundColor: "red" },
							}}
						/>
						<stack.Screen
							name="MealsOverview"
							component={MealsOverViewScreen}
							// options={({ route, navigation }) => {
							// 	const catId = route.params.categoryId
							// 	return {title:catId};
							// }}
						/>
						<stack.Screen
							name="MealDetail"
							component={MealDetails}
						/>
					</stack.Navigator>
				</NavigationContainer>
			</Provider>
		</>
	);
}
