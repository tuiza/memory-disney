import witch from '../../animations/witch.json';
import * as S from './styles';
import { logoPreta } from '../../imgs/index';

export default function SplashScreen({ setSplashScreen }: { setSplashScreen: () => void }) {

    return (
        <S.Container>
            <S.Animation
                source={witch}
                resizeMode='contain'
                autoPlay={true}
                loop={false}
                speed={0.3}
                onAnimationFinish={setSplashScreen}
            />
            <S.Logo source={logoPreta} resizeMode='contain' />
        </S.Container>

    );
}

