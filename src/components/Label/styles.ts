import styled from "styled-components/native";

type LabelProps = {
    color: string;
}

export const Label = styled.Text<LabelProps>`
    color: ${({ color }) => color};
    font-weight: 500;
    font-size: 27px;
`