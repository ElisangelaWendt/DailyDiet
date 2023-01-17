import { Container, Divisor, Hour, MealName } from "./styles";

interface MealProps{
  onPress: () => void,
  hour: string,
  name: string
}

export default function Meal({onPress, name, hour}:MealProps){
  return(
    <Container onPress={onPress}>
      <Hour>{hour}</Hour>
      <Divisor>|</Divisor>
      <MealName>{name}</MealName>
    </Container>
  )
}