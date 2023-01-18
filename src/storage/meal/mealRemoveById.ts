import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "../storageConfig"
import { MealGetAll } from "./mealGetAll"
import { MealStorageDTO } from "./MealStorageDTO"

export async function MealRemoveById(id: number){
  try{
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    const filtered = meals.filter(meal => meal.id !== id)

    const final = JSON.stringify(filtered)

    // const filtered = meals.filter(meal => meal.id === id)

    await AsyncStorage.setItem(MEAL_COLLECTION, final)
  }catch(error){
    throw(error)
  }
}