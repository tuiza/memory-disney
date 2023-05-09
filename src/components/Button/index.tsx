import React, { useContext } from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'
import Label from '../../components/Label';
import { ThemeContext } from 'styled-components/native';

type ButtonProps = {
    backgroundColor: string
    text?: string
    textColor?: string
} & TouchableOpacityProps

export default function Button({ children, backgroundColor, text = '', textColor, ...rest }: ButtonProps) {
    const themeContext = useContext(ThemeContext);

    return <S.Button backgroundColor={backgroundColor} {...rest}>
        <Label color={textColor}>{text}</Label>
    </S.Button>;
}