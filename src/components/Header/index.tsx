import { Image, View } from "react-native";
import { Container, Text, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps{
  canGoBack: boolean,
  title: string
}

export default function Header({canGoBack = false, title}: HeaderProps){

  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack()
  }

  return(
    <Container>
      {canGoBack ?
      <>
      <Feather name="arrow-left" size={24} onPress={handleGoBack}/> 
      <Text>{title}</Text> 
      <View></View>
      </>
      :
      <Title>
      <Text>{title}</Text> 
      </Title>
    }
    </Container>
  )
}