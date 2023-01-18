import AsyncStorage from "@react-native-async-storage/async-storage";

export async function DeleteAll(){
  //deleta tudo que há no local storage
  AsyncStorage.clear()
}