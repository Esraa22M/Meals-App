import { Text, StatusBar } from "react-native";
import { CategoriesScreen } from "./src/screens/CategoryScreen/CategoryScreen.screens";
import { MealsOverViewScreen } from "./src/screens/MealsOverviewScreen/MealsOverViewScreen.screens";
import { NavigationContainer } from "@react-navigation/native";
//m     //M
import { createStackNavigator } from "@react-navigation/stack";
import { MealDetails } from "./src/screens/MealDetails/MealDetails.sceens";
const stack = createStackNavigator();
export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<stack.Navigator
					initialRouteName="Categories"
					screenOptions={{ backgroundColor: "#ffffff" }}
				>
					<stack.Screen
						name="Categories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
							headerStyle: { backgroundColor: "#ffff" },
							headerTintColor: "black",
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
					<stack.Screen name="MealDetail" component={MealDetails} options={{ headerRight: () => <Text>esraa</Text> }} />
				</stack.Navigator>
			</NavigationContainer>
		</>
	);
}
