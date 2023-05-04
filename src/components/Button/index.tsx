import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'

type ButtonProps = {
    backgroundColor: string
    children: JSX.Element
} & TouchableOpacityProps

export default function Button({ children, backgroundColor, ...rest }: ButtonProps) {
    return <S.Button backgroundColor={backgroundColor} {...rest}>
        {children}
    </S.Button>;
}