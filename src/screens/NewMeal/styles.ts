import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Content = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  padding: 24px;
  margin-top: -20px;
  border-radius: 20px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 24px; */
`

export const Title = styled.Text`
  margin-bottom: 8px;
`
export const Warning = styled.Text`
  color: ${({theme}) => theme.COLORS.RED_300 };
`
export const InputTitle = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-bottom: 4px;
`;