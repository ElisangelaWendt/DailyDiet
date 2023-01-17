import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  padding: 24px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Card = styled.View`
  background-color: ${({theme}) => theme.COLORS.GREEN_100 };
  height: 102px;
  margin-top: 36px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

export const Percent = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL }px;
`

export const Text = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.SM }px;
`