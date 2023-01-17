import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  padding: 16px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-width: 1px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-bottom: 4px;
`;
