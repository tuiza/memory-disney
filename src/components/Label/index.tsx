import React from 'react';
import * as S from './styles';
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia';

type LabelProps = {
  children: string
  color: string
  fontSize?: number
}

export default function Label({ children, color, fontSize = 22 }: LabelProps) {
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
        fontSize
				}}>
      {children}
    </S.Label>
  );
}