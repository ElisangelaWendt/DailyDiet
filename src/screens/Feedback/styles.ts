import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
export const TitlePositive = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GREEN_300};
  margin-bottom: 8px;
  font-weight: bold;
`

export const TitleNegative = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.RED_300};
  margin-bottom: 8px;
  font-weight: bold;
`

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  margin-bottom: 40px;
  text-align: center;
`