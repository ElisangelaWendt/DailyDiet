import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "../storageConfig"
import { MealGetById } from "./mealGetById"

export async function PlayerRemoveById(name: string, date: string){
  try{
    const storage = await MealGetById(name,date)

    const filtered = storage.filter(player => player.name !== playerName)

    const players = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${group}`, players)
  }catch(error){
    throw(error)
  }
}