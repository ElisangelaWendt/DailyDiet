import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

interface InputProps extends TextInputProps{
  title?: string
}

export default function Input({ title, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <>
      <Title>{title}</Title>
      <Container
        placeholderTextColor={COLORS.GRAY_100}
        {...rest}
      />
    </>
  )
}