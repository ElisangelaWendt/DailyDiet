import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Button from "../../components/Button";
import DietButton from "../../components/DietButton";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { MealGetById } from "../../storage/meal/mealGetById";
import { MealStorageDTO } from "../../storage/meal/MealStorageDTO";
import { InputTitle } from "../NewMeal/styles";
import { Container, Row, Title } from "./styles";

interface RouteParams {
  id: number,
}

export default function EditMeal() {
  const [isActiveYes, setIsActiveYes] = useState(false)
  const [isActiveNo, setIsActiveNo] = useState(false)
  const route = useRoute()
  const params = route.params as RouteParams
  const [meal, setMeal] = useState<MealStorageDTO[]>([])
  const [name,setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [ hour, setHour] = useState('')
  var contagem=0;

  function handleSetIsActiveYes() {
    setIsActiveYes(true)
    setIsActiveNo(false)
  }
  function handleSetIsActiveNo() {
    setIsActiveYes(false)
    setIsActiveNo(true)
  }
  useFocusEffect(() => {
    fetchMealsByNameAndDate()
    if(contagem != 0){
      if(meal.length > 0){
        setName(meal[0].name)
        setDescription(meal[0].description)
        setDate(meal[0].date)
        setHour(meal[0].hour)
        if(meal[0].diet){
          setIsActiveYes(true)
          setIsActiveNo(false)
        }else{
          setIsActiveYes(false)
          setIsActiveNo(true)
        }
        contagem = 1;
      }
    }
  })

  async function fetchMealsByNameAndDate() {
    try {
      const Meal = await MealGetById(params.id)
      setMeal(Meal)
    } catch (error) {
      console.log(error)
      Alert.alert('Refeição', 'Não foi possivel carregar a refeição')
    }
  }

  function handleSave() {

  }

  return (
    <>
      {meal.length > 0 &&
        <>
          <Header canGoBack title="Editar Refeição" />
          <Container>
            <Input title="Nome" value={name} onChangeText={setName} />
            <Input title="Descrição" multiline style={{ height: 120 }} value={description} onChangeText={setDescription} />
            <Row>

            <View style={{width:"45%"}}>
            <InputTitle>Data</InputTitle>
            <TextInputMask
            // ref={datetimeField}
              keyboardType="numeric"
              type={'datetime'}
              options={{
                mask: 'DD/MM/YYYY'
              }}
              onChangeText={setDate}
              style={{ borderWidth: 1, height: 48, borderRadius: 6, textAlign: 'center', borderColor: 'gray'  }}
              placeholder="00/00/0000"
            value={date}
            />
          </View>
          <View style={{width:"45%"}}>
            <InputTitle>Hora</InputTitle>
          <TextInputMask
            keyboardType="numeric"
            type={'custom'}
            options={{
              mask: '99:99'
            }}
            onChangeText={setHour}
            style={{ borderWidth: 1, height: 48, borderRadius: 6, textAlign: 'center', borderColor: 'gray' }}
            placeholder="00:00"
            value={hour}
          />
          </View>
            </Row>
            <Title>Está dentro da dieta?</Title>
            <Row>
              <DietButton type="PRIMARY" isActive={isActiveYes} onPress={handleSetIsActiveYes} />
              <DietButton type="SECONDARY" isActive={isActiveNo} onPress={handleSetIsActiveNo} />
            </Row>
          </Container>
          <Button onPress={handleSave} text="Salvar alterações" edit={false} style={{ margin: 24, borderRadius: 6 }} />
        </>
      }
    </>
  )
}