import React from 'react';
import * as S from './styles';
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia';
import { TextProps } from 'react-native';

type LabelProps = {
  children: React.ReactNode
  color: string
  fontSize?: number
  styles?: object
} & TextProps

export default function Label({ children, color, fontSize = 22, styles}: LabelProps) {
  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
  }

  return (
    <S.Label color={color}
      style={{
        fontFamily: 'PrincessSofia_400Regular',
        fontSize,
        ...styles
      }}
      >
      {children}
    </S.Label>
  );
}