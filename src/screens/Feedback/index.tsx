import { Image } from "react-native";
import Button from "../../components/Button";
import { Positive } from "../NewMeal";
import { Container, Subtitle, TitleNegative, TitlePositive } from "./styles";

export default function Feedback({navigation}: any){

  function handleNavigateToHome(){
    navigation.navigate("Home")
  }
  return(
    <Container>
      {Positive ? 
      <>
      <TitlePositive>Continue assim!</TitlePositive>
      <Subtitle>Você continua dentro da dieta. Muito bem! </Subtitle>
      <Image source={require("../../images/Illustration.png")}/>
      </>
      :
      <>
      <TitleNegative>Que pena!</TitleNegative>
      <Subtitle>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</Subtitle>
      <Image source={require("../../images/Illustration2.png")}/>
      </>
    }
      <Button onPress={handleNavigateToHome} text="Ir para a página inicial" edit={false} style={{width: 190, borderRadius:6, marginTop: 32}} />
    </Container>
  )
}