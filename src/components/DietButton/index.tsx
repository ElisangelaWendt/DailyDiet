import { TouchableOpacityProps } from "react-native";
import { Yes, ButtonTypeStyleProps, Container, No, Props } from "./styles";
import { Feather } from "@expo/vector-icons";

interface DietButtonProps extends Props, TouchableOpacityProps{
  type: ButtonTypeStyleProps,
  onPress: () => void
}

export default function DietButton({type, isActive = false, onPress}: DietButtonProps){
  return(
    <Container type={type} onPress={onPress} isActive={isActive}> 
      {type === 'PRIMARY' ? 
        <Yes>
          <Feather name="circle" color={"green"} />
          Sim
        </Yes>
        :
        <No>
          <Feather name="circle" color={"red"} />
          Não
        </No>
    }
    </Container>
  )
}