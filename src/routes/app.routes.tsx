import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditMeal from "../screens/EditMeal";
import Feedback from "../screens/Feedback";
import Home from "../screens/Home";
import Meal from "../screens/Meal";
import NewMeal from "../screens/NewMeal";
import Statistics from "../screens/Statistics/indes";

const {Navigator, Screen} = createNativeStackNavigator()

export default function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen name="Home"
      component={Home}
      />
      <Screen name="Feedback"
      component={Feedback}
      />
      <Screen name="Meal"
      component={Meal}
      />
      <Screen name="NewMeal"
      component={NewMeal}
      />
      <Screen name="Statistics"
      component={Statistics}
      />
      <Screen name="EditMeal"
      component={EditMeal}
      />
    </Navigator>
  )
}