import React, { useContext, useEffect, useState } from 'react'

import Label from '../../components/Label'

import * as S from './styles'
import Colors from '../../utils/colors';
import MemoryCard, { PRINCESS_ENUM } from '../../components/MemoryCard';
import Button from '../../components/Button';
import NewModal from './NewModal';
import VitoryModal from './VitoryModal';
import { sizeState, victoriesState, defeatsState, movesState, timerState } from '../../../src/atoms/gameState';
import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil';
import tuiza from './logoPreto.png'
import { themeState } from '../../atoms/gameState';
import { ThemeContext } from 'styled-components';

type ImagesCards = {
    princess: keyof typeof PRINCESS_ENUM
    selected: boolean
    visible: boolean
}[]

const imagesBySize = {
    3: [
        PRINCESS_ENUM.bela,
        PRINCESS_ENUM.mulan,
        PRINCESS_ENUM.ariel
    ],
    6: [
        PRINCESS_ENUM.bela,
        PRINCESS_ENUM.mulan,
        PRINCESS_ENUM.ariel,
        PRINCESS_ENUM.adormecida,
        PRINCESS_ENUM.merida,
        PRINCESS_ENUM.tina,
    ],
    9: [
        PRINCESS_ENUM.bela,
        PRINCESS_ENUM.mulan,
        PRINCESS_ENUM.ariel,
        PRINCESS_ENUM.adormecida,
        PRINCESS_ENUM.merida,
        PRINCESS_ENUM.tina,
        PRINCESS_ENUM.branca,
        PRINCESS_ENUM.cinderela,
        PRINCESS_ENUM.sin,
    ],
}

export default function Board() {
    const [newModal, setNewModal] = useState(false);
    const [victoryModal, setVictoryModal] = useState(false);
    const [victories, setVictories] = useRecoilState(victoriesState)
    const [defeats, setDefeats] = useRecoilState(defeatsState)
    const [moves, setMoves] = useRecoilState(movesState)
    const [timer, setTimerState] = useRecoilState(timerState)
    const [imagesCards, setImagesCards] = useState<ImagesCards>([]);
    const size = useRecoilValue(sizeState);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>(null as any);
    const [setTheme] = useRecoilState(themeState) // usar no toogle
    const themeContext = useContext(ThemeContext);

    const onHandleNewModal = () => {
        setNewModal(true)
        setVictoryModal(false)
        setDefeats(defeats + 1)
        clearInterval(timerInterval);
    }

    const verifyEqualCards = async () => {
        const newImagesCards = [...imagesCards]
        const selectedCards = newImagesCards.filter((item) => item.selected)

        if (selectedCards.length === 2) {
            const [card1, card2] = selectedCards
            if (card1.princess === card2.princess) {
                card1.selected = false
                card2.selected = false
                card1.visible = true
                card2.visible = true
            } else {
                card1.selected = false
                card2.selected = false
            }
            setMoves(moves + 1)
            setImagesCards(newImagesCards)

            const visibleCards = newImagesCards.filter((item) => item.visible)
            if (visibleCards.length === (size * 2)) { // todo mundo visivel
                setVictories(victories + 1)
                setVictoryModal(true)
                setTimerState(timer)
                setMoves(moves)
                clearInterval(timerInterval);
                setTimerInterval(null as any);
            }
        }
    }

    const handleCardPress = async (indexCard: number) => {
        updateTimer()
        const newImagesCards = [...imagesCards]

        const selectedItem = newImagesCards[indexCard]
        if (!selectedItem) {
            throw new Error('Item not found')
        }

        const selectedCards = newImagesCards.filter((item) => item.selected)
        if (selectedCards.length < 2) {
            newImagesCards[indexCard].selected = true
            setImagesCards(newImagesCards)
        }
    }

    const checkCards = async () => {
        const selectedCards = imagesCards.filter((item) => item.selected)
        if (selectedCards.length === 2) {
            await new Promise(res => {
                setTimeout(res, 300)
            });
            verifyEqualCards()
        }
    }

    useEffect(() => {
        checkCards()
    }, [imagesCards])

    const updateTimer = () => {
        if (timerInterval === null) {
            let counter = 0;

            let interval = setInterval(() => {
                counter++;
                const dateObj = new Date(counter * 1000);
                const minutes = dateObj.getUTCMinutes();
                const seconds = dateObj.getSeconds();

                const timeString = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

                setTimerState(timeString)
            }, 1000);

            setTimerInterval(interval)
        }
    }
    const onHandleRestart = () => {
        setImagesCards(imagesBySize[size]
            .concat(imagesBySize[size])
            .sort(() => Math.random() - 0.5)
            .map((image) => ({ princess: image, selected: false, visible: false })))
        setMoves(0)
        setTimerState('00:00')
        setTimerInterval(null as any)
        clearInterval(timerInterval);
    }

    useEffect(() => {
        onHandleRestart()
    }, [size, defeats, victories])

    return (
        <S.Container>
            <Label color={Colors.purple} fontSize={50}>Memória</Label>
            <S.ButtonsContainer>
                <Button backgroundColor={Colors.pink} onPress={() => onHandleRestart()}>
                    <Label color={Colors.purple}>Reiniciar</Label>
                </Button>
                <Button backgroundColor={Colors.purple} onPress={() => onHandleNewModal()}>
                    <Label color={Colors.pink}>Novo</Label>
                </Button>
            </S.ButtonsContainer>
            <NewModal open={newModal} onClosed={() => setNewModal(false)} />
            <VitoryModal
                open={victoryModal}
                onClosed={() => setVictoryModal(false)}
                setNewModal={() => { onHandleNewModal() }
                } />

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
                }}
            >
                {
                    imagesCards.map((item, index) => (
                        <MemoryCard
                            key={index}
                            princess={item.princess}
                            selected={item.selected}
                            visible={item.visible}
                            onFlip={() => handleCardPress(index)}
                        />
                    ))
                }
            </S.CardContainer>

            <S.FooterContainer>
                <Label color={Colors.purple}>Tempo: {timer}</Label>
                <Label color={Colors.purple}>Tentativas: {moves}</Label>
            </S.FooterContainer>
            <S.Logo
                source={tuiza}
            />

        </S.Container>
    )
}