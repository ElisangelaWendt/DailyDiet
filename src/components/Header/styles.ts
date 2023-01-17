import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 24px;
  padding-bottom: 54px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Title = styled.View`
  align-items: center;
  flex: 1;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`;
