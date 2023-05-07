import React from 'react';

import castle from './castle.json';
import * as S from './styles';
import tuiza from './tuiza_sembg.png';


export default function SplashScreen({ setSplashScreen }: { setSplashScreen: () => void }) {

    return (
        <S.Container>
            <S.Castle
                source={castle}
                autoPlay={true}
                loop={false}
                onAnimationFinish={setSplashScreen}
            />
            <S.Logo
                source={tuiza}
            />
        </S.Container>

    );
}

