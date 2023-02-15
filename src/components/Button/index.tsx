import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles'

type ButtonProps = {
    backgroundColor: string
    children: JSX.Element
}

export default function Button({children, backgroundColor}: ButtonProps) {
    return <S.Button backgroundColor={backgroundColor}>
        {children}
    </S.Button>;
}