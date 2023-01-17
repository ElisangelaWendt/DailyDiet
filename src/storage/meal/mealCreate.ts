import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealGetAll } from "./mealGetAll";

export async function GroupCreate(newMeal: object){
  try{
    const storedGroups = await MealGetAll();

    const storage = JSON.stringify( [... storedGroups, newMeal])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  }catch(error){
    throw error;
  }
}