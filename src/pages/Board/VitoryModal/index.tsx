import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { movesState, timerState, themeState } from '../../../atoms/gameState';
import LottieView from 'lottie-react-native';
import {bad, happy, winner } from '../../../animations'
import { ThemeContext } from 'styled-components'

type NewModalProps = {
  open: boolean
  onClosed: () => void
  setNewModal: () => void
}

export default function VitoryModal({ open, onClosed, setNewModal }: NewModalProps) {
  const moves = useRecoilValue(movesState);
  const timer = useRecoilValue(timerState);
  const themeContext = useContext(ThemeContext)
  const [theme] = useRecoilState(themeState)
  
  const topAnimation = theme === 'light' ? happy : bad

  return (
    <Modal open={open} onClosed={onClosed}>
      <S.Container>
        <LottieView
          autoPlay
          loop={true}
          style={{ width: 100, height: 300, position: 'absolute', bottom: 50, left: 0, zIndex: -1 }}
          source={topAnimation}
        />
        <Label
          color={themeContext.title}
          fontSize={40}
          style={{ borderBottomColor: themeContext.primary }}>
          Vitória
        </Label>
        <S.Body>
          <S.InfosContainer>
            <Label color={themeContext.infos} fontSize={24}>Tempo: {timer}</Label>
            <Label color={themeContext.infos} fontSize={24}>Movimentos: {moves}</Label>
          <LottieView
              autoPlay
              loop={false}
              duration={4000}
            style={{ width: 200, height: 200, position: 'absolute', top: -40, left: 80, zIndex: -1 }}
              source={winner}
          />
          </S.InfosContainer>
        </S.Body>
        <S.ButtonsContainer>
          <Button
            backgroundColor={themeContext.secondary}
            onPress={onClosed}
            text={'Reiniciar'}
            textColor={themeContext.primary}
          />
          <Button
            backgroundColor={themeContext.primary}
            onPress={setNewModal}
            text={'Outro Tamanho'}
            textColor={themeContext.secondary}
          />
        </S.ButtonsContainer>
      </S.Container>
    </Modal>)
}