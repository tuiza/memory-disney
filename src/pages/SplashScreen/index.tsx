import React from 'react';

import castle from './castle.json';
import * as S from './styles';
import Colors from '../../utils/colors';
import { expo } from '../../../app.json';


export default function SplashScreen({ setSplashScreen }: { setSplashScreen: () => void }) {

    return (
        <S.Container>

            <S.Castle
                source={castle}
                autoPlay={true}
                loop={false}
                onAnimationFinish={setSplashScreen}
            />
            <S.Version
                color={Colors.purple}
                fontSize={20}>
                v {expo.version}
            </S.Version>
        </S.Container>

    );
}

