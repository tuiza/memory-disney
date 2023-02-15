import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

type LabelProps = {
  text: string
  color: string
}
export default function Label({text, color}: LabelProps) {
  return (
    <S.Label color={color}>
      {text}
    </S.Label>
  );
}