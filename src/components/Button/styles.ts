import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.COLORS.GRAY_600 };
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100 };
  font-size: ${({theme}) => theme.FONT_SIZE.SM }px;
  font-weight: bold;
`