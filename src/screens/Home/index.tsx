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
  diet: string
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

  function handleGoToMeal(meal: string, date: string){
    navigation.navigate("Meal", {meal, date})
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
      renderItem={({item}) => <Meal hour={item.hour} name={item.name} onPress={() => handleGoToMeal(item.name, item.date)}/>}
      keyExtractor={item => item.hour}
      />
    </Container>
  )
}