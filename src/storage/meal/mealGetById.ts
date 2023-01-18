import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealGetById(id: number){
  try{
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    const filtered = meals.filter(meal => meal.id === id)
    return filtered
  }catch(error){
    throw (error)
  }
}
