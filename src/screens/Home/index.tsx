import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { Alert, FlatList, Image } from "react-native";
import Button from "../../components/Button";
import Meal from "../../components/Meal";
import { MealGetAll } from "../../storage/meal/mealGetAll";
import { Card, Container, Percent, Row, Text } from "./styles";

interface MealProps{
  name: string,
  description: string,
  date: string,
  hour: string,
  diet: string,
  id: number
}

export default function Home({navigation}: any) {
  const [ isLoading, setIsLoading] = useState(true)
  const [ meals, setMeals] = useState<MealProps[]>([])

  useFocusEffect(()=>{
    fetchMeals()
  })

  async function fetchMeals(){
    try{
      setIsLoading(true)
      const data = await MealGetAll()
      setMeals(data)
      // console.log(data[data.length -1]) //pegar o ultimo item salvo da lista
    }catch(error){
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições')
    }finally{
      setIsLoading(false)
    }
  }

  function handleNewMeal(){
    navigation.navigate('NewMeal')
  }

  function handleGoToMeal(id: number){
    console.log(id)
    navigation.navigate("Meal", {id})
  }

  return (
    <Container>
      <Row>
        <Image source={require("../../images/Logo.png")} />
        <Image source={require("../../images/Profile.png")} />
      </Row>
      <Card>
        <Percent>90%</Percent>
        <Text>das refeições dentro da dieta</Text>
      </Card>
      <Text>Refeições</Text>
      <Button text="+ Nova refeição" onPress={handleNewMeal} edit={false}/>
      <FlatList
      data={meals}
      renderItem={({item}) => <Meal hour={item.hour} name={item.name} onPress={() => handleGoToMeal(item.id)}/>}
      keyExtractor={item => item.hour}
      />
    </Container>
  )
}