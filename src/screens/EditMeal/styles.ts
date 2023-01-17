import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  padding: 24px;
  margin-top: -20px;
  border-radius: 20px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  margin-bottom: 8px;
`

