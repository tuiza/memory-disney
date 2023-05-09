import MemoryCard from '../../components/MemoryCard';
import * as S from './styles';
import { ImagesCards } from 'utils/enuns/types/ImagesCards';

type CardsProps = {
    size: number
    imagesCards: ImagesCards
    handleCardPress: (indexCard: number) => void
}

export default function Cards ({ size, imagesCards, handleCardPress }: CardsProps) {
    return(
    <S.CardContainer
        showsVerticalScrollIndicator={true}
        size={size}
        centerContent={true}
        contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            alignContent: 'center',
            padding: 5,
        }}
    >
        {
            imagesCards.map((item, index) => (
                <MemoryCard
                    key={index}
                    characters={item.princess}
                    selected={item.selected}
                    visible={item.visible}
                    onFlip={() => handleCardPress(index)}
                />
            ))
        }
        </S.CardContainer>
    )
}