import Button from "../../components/Button";
import Header from "../../components/Header";
import { ButtonText, Container, Description, ExclusionButton, Status, Subtitle, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { MealGetById } from "../../storage/meal/mealGetById";
import { useEffect, useState } from "react";
import { MealStorageDTO } from "../../storage/meal/MealStorageDTO";
import { DeleteAll } from "../../storage/meal/mealDeleteAll";

interface RouteParams {
  id: number,
}

export default function Meal({ navigation }: any) {
  const route = useRoute()
  const params = route.params as RouteParams
  const [meal, setMeal] = useState<MealStorageDTO[]>([])
  const [ isLoading, setIsLoading] = useState(true)

  useFocusEffect(() => {
    fetchMealsByNameAndDate()
  })

  async function fetchMealsByNameAndDate() {
    try {
      setIsLoading(true)
      const Meal = await MealGetById(params.id)
      setMeal(Meal)
      // console.log(meal)
    } catch (error) {
      // console.log(error)
      Alert.alert('Refeição', 'Não foi possivel carregar a refeição')
    } finally {
      setIsLoading(false)
    }
  }

  function handleNavigateToEdit() {
    navigation.navigate("EditMeal")
  }

  function Delete() {
    Alert.alert('Remover', 'Deseja excluir a refeição?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => DeleteMeal() }
    ]
    )
  }

  function DeleteMeal() {
    //deletar refeição
    // DeleteAll()
  }

  return (
    <>
    {meal.length>0 &&
    <>
      <Header canGoBack title="Refeição" />
      <Container>
            <Title>
              {meal[0].name}
            </Title>
          <Description>{meal[0].description}</Description>
          <Subtitle>Data e Hora</Subtitle>
          <Description>{meal[0].date} às {meal[0].hour}</Description>
          {meal[0].diet ? 
          <Status><Feather name="circle" style={{ marginRight: 5 }} color={"green"} />
            <Description>Dentro da dieta</Description>
          </Status>
          :
          <Status><Feather name="circle" style={{ marginRight: 5 }} color={"red"} />
            <Description>Fora da dieta</Description>
          </Status>

          }

      </Container>
      <Button edit onPress={handleNavigateToEdit} text="Editar refeição" style={{ margin: 24, borderRadius: 6 }} />
      <ExclusionButton onPress={Delete}>
        <ButtonText><Feather name="trash-2" size={20} style={{ marginRight: 5 }} /> Excluir Refeição</ButtonText>
      </ExclusionButton>
    </>
    }
    </>

  )
}