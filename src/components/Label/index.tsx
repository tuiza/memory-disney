import React from 'react';
import * as S from './styles';
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia';

type LabelProps = {
  text: string
  color: string
}
export default function Label({ text, color }: LabelProps) {
  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
  }

  return (
    <S.Label color={color}
      style={{
					fontFamily: 'PrincessSofia_400Regular'
				}}>
      {text}
    </S.Label>
  );
}