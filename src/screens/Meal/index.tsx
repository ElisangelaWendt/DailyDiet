import Button from "../../components/Button";
import Header from "../../components/Header";
import { ButtonText, Container, Description, ExclusionButton, Status, Subtitle, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { MealGetByNameAndDate } from "../../storage/meal/mealGetByNameAndDate";
import { useState } from "react";
import { MealStorageDTO } from "../../storage/meal/MealStorageDTO";

interface RouteParams{
  meal: string,
  date: string
}


export default function Meal({navigation}:any){
  const route = useRoute()
  const params = route.params as RouteParams
  const [meal, setMeal] = useState<MealStorageDTO[]>([])

  useFocusEffect(() => {
    fetchMealsByNameAndDate()
    console.log(meal)
  })

  async function fetchMealsByNameAndDate() {
    try {
      const Meal = await MealGetByNameAndDate(params.meal, params.date)
      setMeal(Meal)
    } catch (error) {
      console.log(error)
      Alert.alert('Refeição', 'Não foi possivel carregar a refeição')
    } finally {
    }
  }

  function handleNavigateToEdit(){
    navigation.navigate("EditMeal")
  }

  function Delete(){
    Alert.alert('Remover', 'Deseja excluir a refeição?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => DeleteMeal() }
    ]
    )
  }

  function DeleteMeal(){
    //deletar refeição
  }

  return(
    <>
    <Header canGoBack title="Refeição"/>
        <Container>
      <Title>Nome</Title>
      <Description>Descrição</Description>
      <Subtitle>Data e Hora</Subtitle>
      <Description>12/08/2022 às 16:00</Description>
      <Status><Feather name="circle" style={{marginRight:5}} color={"green"} /> 
      <Description>Dentro da dieta</Description>
      </Status>
    </Container>
      <Button edit onPress={handleNavigateToEdit} text="Editar refeição" style={{margin:24, borderRadius:6}} />
      <ExclusionButton onPress={Delete}>
      <ButtonText><Feather name="trash-2" size={20} style={{marginRight: 5}} /> Excluir Refeição</ButtonText>
    </ExclusionButton>
    </>
  )
}