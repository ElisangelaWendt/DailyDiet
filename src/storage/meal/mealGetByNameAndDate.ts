// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { MEAL_COLLECTION } from "../storageConfig";

// export async function MealGetByNameAndDate(name: string, date: string){
//   try{
//     const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    
//     const meals: [] = storage ? JSON.parse(storage) : []
    
//     return meals;
//   }catch(error){
//     throw error;
//   }
// }


import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function MealGetByNameAndDate(meal: string,date:string){
  try{
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${meal}`)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    const filter = meals.filter(meal => meal.date === date)

    return meals
  }catch(error){
    throw (error)
  }
}


// export async function MealGetByNameAndDate(name: string, date: string){
//   try{
//     const storage = await MealGetByName(name)
//     const meals = storage.filter(meal => meal.date === date)

//     return meals;
//   }catch(error){
//     throw(error)
//   }
// }