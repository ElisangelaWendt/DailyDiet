import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  padding: 24px;
  margin-top: -20px;
  border-radius: 20px;
`

export const Content = styled.View`
  padding: 24px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.LG }px;
  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.SM }px;
  margin-top: 24px;
`

export const Description = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Status = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  height: 34px;
  border-radius: 1000px;
  width: 144px;
  margin-top: 24px;
  padding-left: 13px;
  flex-direction: row;
  align-items: center;
`

export const ExclusionButton = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 0 24px 24px 24px;
  border-radius: 6px;
  border-width: 1px;
`

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_700 };
  font-size: ${({theme}) => theme.FONT_SIZE.SM }px;
  font-weight: bold;
`

