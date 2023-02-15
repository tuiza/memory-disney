import styled from "styled-components/native";

type ButtonProps = {
    backgroundColor: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 8px;
    margin: 10px;
    border-radius: 52px;
`