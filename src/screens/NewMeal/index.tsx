import { useRef, useState } from "react";
import { View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Button from "../../components/Button";
import DietButton from "../../components/DietButton";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { GroupCreate } from "../../storage/meal/mealCreate";
import { Content, InputTitle, Row, Title, Warning } from "./styles";

export var Positive = true;

export default function NewMeal({ navigation }: any) {
  const [isActiveYes, setIsActiveYes] = useState(false)
  const [isActiveNo, setIsActiveNo] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [empty, setEmpty] = useState(false)
  const [diet, setDiet] = useState(true)
  // const datetimeField = useRef();
  // const isValid = datetimeField.isValid()

  function handleSetIsActiveYes() {
    setIsActiveYes(true)
    setIsActiveNo(false)
    Positive = true;
    setDiet(true)
  }
  function handleSetIsActiveNo() {
    setIsActiveYes(false)
    setIsActiveNo(true)
    Positive = false;
    setDiet(false)
  }

  function handleRegister() {
    // navigation.navigate("Feedback")
    if (name === '' || date === '' || hour === '' || description === '') {
      setEmpty(true)
    } else {
      setEmpty(false)
      const meal = {
        name: name,
        description: description,
        date: date,
        hour: hour,
        diet: diet
      }
      GroupCreate(meal)
    }
  }

  return (
    <>
      <Header canGoBack title="Nova Refeição" />
      <Content>
        {empty &&
          <Warning>Todos os campos devem ser preenchidos!</Warning>
        }
        <Input title="Nome" onChangeText={setName} />
        <Input title="Descrição" multiline style={{ height: 120 }} onChangeText={setDescription} />
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
          
          />
          </View>
        </Row>
        <Title>Está dentro da dieta?</Title>
        <Row>
          <DietButton type="PRIMARY" isActive={isActiveYes} onPress={handleSetIsActiveYes} />
          <DietButton type="SECONDARY" isActive={isActiveNo} onPress={handleSetIsActiveNo} />
        </Row>
      </Content>
      <Button onPress={handleRegister} text="Cadastrar refeição" edit={false} style={{ margin: 24, borderRadius: 6 }} />
    </>
  )
}