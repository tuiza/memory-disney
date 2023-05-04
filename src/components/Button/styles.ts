import styled from "styled-components/native";

type ButtonProps = {
    backgroundColor: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin: 10px;
    width: 170px;
	height: 50px;
	border-radius: 30px;
    align-items: center;
    justify-content: center;
`