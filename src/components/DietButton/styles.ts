import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

export type Props = {
  type: ButtonTypeStyleProps;
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  background-color:  ${({theme}) => theme.COLORS.GRAY_100 };
  height: 50px;
  flex:1;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  ${({ theme, isActive, type }) =>
    isActive && type === 'PRIMARY' &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_300};
      background-color: ${theme.COLORS.GREEN_100};
    `
    }
  ${({ theme, isActive, type }) =>
    isActive && type === 'SECONDARY' &&
    css`
      border: 1px solid ${theme.COLORS.RED_300};
      background-color: ${theme.COLORS.RED_100};
    `
    }
`;

export const Yes = styled.Text`
flex-direction: row;
justify-content: space-between;
`

export const No = styled.Text`
flex-direction: row;
`