import { useState } from "react";
import Button from "../../components/Button";
import DietButton from "../../components/DietButton";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, Row, Title } from "./styles";

export default function EditMeal(){
  const [isActiveYes, setIsActiveYes] = useState(false)
  const [isActiveNo, setIsActiveNo] = useState(false)

  function handleSetIsActiveYes(){
    setIsActiveYes(true)
    setIsActiveNo(false)
  }
  function handleSetIsActiveNo(){
    setIsActiveYes(false)
    setIsActiveNo(true)
  }

  function handleSave(){

  }
  
  return(
    <>
    <Header canGoBack title="Editar Refeição"/>
    <Container>
      <Input title="Nome"/>
      <Input title="Descrição" multiline style={{height: 120}}/>
      <Row>

      <Input style={{width: '40%'}}/>
      <Input style={{width: '40%'}}/>
      </Row>
      <Title>Está dentro da dieta?</Title>
      <Row>

      <DietButton type="PRIMARY" isActive={isActiveYes} onPress={handleSetIsActiveYes} />
      <DietButton type="SECONDARY" isActive={isActiveNo} onPress={handleSetIsActiveNo}/>
      </Row>
    </Container>
      <Button onPress={handleSave} text="Salvar alterações" edit={false} style={{margin:24, borderRadius:6}}/>
    </>
  )
}