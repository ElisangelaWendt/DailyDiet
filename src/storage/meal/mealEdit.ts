import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealEdit(id: number, name: string, date: string, hour: string, description: string, diet: boolean){
  try{
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    const filtered = meals.filter(meal => meal.id === id)

    filtered.push({
      name: name,
      description: description,
      date: date,
      hour: hour,
      diet: diet,
      id: id
    })
    
    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filtered))
  }catch(error){
    throw (error)
  }
}
