import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 50px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500 };
  /* justify-content: center; */
  padding: 12px;
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`

export const Hour = styled.Text`
  font-weight: bold;
`

export const Divisor = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_500 };
  margin-left: 10px;
  margin-right: 10px;
`

export const MealName = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_600 };

`