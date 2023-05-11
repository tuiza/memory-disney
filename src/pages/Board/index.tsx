import React, { useContext, useEffect, useState } from 'react'

import Label from '../../components/Label'

import * as S from './styles'
import Button from '../../components/Button';
import NewModal from './NewModal';
import VitoryModal from './VitoryModal';
import { sizeState, victoriesState, movesState, timerState, themeState } from '../../../src/atoms/gameState';
import { useRecoilValue, useRecoilState } from 'recoil';
import { logoBranca, tuizaPreta } from '../../../src/imgs';
import { ThemeContext } from 'styled-components';
import Toggle from '../../components/Toggle';
import { ImagesCards } from 'utils/enuns/types/ImagesCards';
import Cards from './Cards';
import { princessBySize, villainsBySize } from './../../utils/imagesBySize';

export default function Board() {
    const [newModal, setNewModal] = useState(false);
    const [victoryModal, setVictoryModal] = useState(false);
    const [victories, setVictories] = useRecoilState(victoriesState)
    const [moves, setMoves] = useRecoilState(movesState)
    const [timer, setTimerState] = useRecoilState(timerState)
    const [imagesCards, setImagesCards] = useState<ImagesCards>([]);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>(null as any);
    const [theme] = useRecoilState(themeState)
    const toggleValue = theme === 'light' ? false : true;

    const imagesBySize = toggleValue ? villainsBySize : princessBySize

    const size = useRecoilValue(sizeState);
    const themeContext = useContext(ThemeContext);

    const onHandleNewModal = () => {
        setNewModal(true)
        setVictoryModal(false)
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
    }, [size, victories, toggleValue])

    return (
        <S.Container>
            <Toggle/>
            <S.InfosContainer>
                <Label color={themeContext.infos} fontSize={23}>Tempo: {timer}</Label>
                <Label color={themeContext.infos} fontSize={23} >Movimentos: {moves}</Label>
            </S.InfosContainer>
            <NewModal open={newModal} onClosed={() => setNewModal(false)} />
            <VitoryModal
                open={victoryModal}
                onClosed={() => {
                    setVictoryModal(false)
                    onHandleRestart()
                }}
                setNewModal={onHandleNewModal} />
            <Cards
                handleCardPress={handleCardPress}
                imagesCards={imagesCards}
                size={size}
            />
            <S.ButtonsContainer>
                <Button
                    backgroundColor={themeContext.secondary}
                    textColor={themeContext.primary}
                    onPress={onHandleRestart}
                    text={'Reiniciar'}
                />
                <Button
                    backgroundColor={themeContext.primary}
                    onPress={onHandleNewModal}
                    text={'Novo'}
                    textColor={themeContext.disable}
                />
            </S.ButtonsContainer>
            <S.Logo source={toggleValue ? logoBranca : tuizaPreta}/>
        </S.Container >
    )
}