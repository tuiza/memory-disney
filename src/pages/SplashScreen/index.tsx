import castle from '../../animations/witch.json';
import * as S from './styles';
import { logoPreta } from '../../imgs/index';

export default function SplashScreen({ setSplashScreen }: { setSplashScreen: () => void }) {

    return (
        <S.Container>
            <S.Castle
                source={castle}
                resizeMode='contain'
                autoPlay={true}
                loop={false}
                onAnimationFinish={setSplashScreen}
            />
            <S.Logo source={logoPreta} resizeMode='contain' />
        </S.Container>

    );
}

