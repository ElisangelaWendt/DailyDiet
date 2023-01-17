import { ButtonText, Container } from "./styles";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
  text: string;
  onPress: () => void;
  edit: boolean
}

export default function Button({text, onPress, edit, ...rest}: ButtonProps){
  return(
    <Container onPress={onPress} {...rest}>
      {edit ? 
      <ButtonText><Feather name="edit" size={20} style={{marginRight: 5}} /> {text}</ButtonText>
    :
      <ButtonText>{text}</ButtonText>
    }
    </Container>
  )
}