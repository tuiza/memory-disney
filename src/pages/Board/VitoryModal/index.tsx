import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import { useRecoilValue } from 'recoil';
import { movesState, timerState } from '../../../atoms/gameState';
import LottieView from 'lottie-react-native';
import {winner} from '../../../animations'
import { View } from 'react-native';
import { ThemeContext } from 'styled-components'

type NewModalProps = {
  open: boolean
  onClosed: () => void
  setNewModal: () => void
}

export default function VitoryModal({ open, onClosed, setNewModal }: NewModalProps) {
  const moves = useRecoilValue(movesState);
  const timer = useRecoilValue(timerState);
  const theme = useContext(ThemeContext)

  return (
    <Modal open={open} onClosed={onClosed}>
      <S.Container>

        <Label color={theme.primary} fontSize={40} style={{ borderBottomColor: theme.primary }}>Vitória</Label>
        <View style={{flexDirection: 'row'}}>
          <LottieView
            autoPlay
            loop={false}
            style={{ width: 200, height: 300, flex: 1 }}
            source={winner}
          />
          <S.InfosContainer>
            <Label color={theme.footer}>Tempo: {timer}</Label>
            <Label color={theme.footer}>Movimentos: {moves}</Label>
          </S.InfosContainer>
          <LottieView
            loop={false}
            autoPlay
            style={{ width: 200, height: 300, flex: 1 }}
            source={winner}
          />
        </View>
        <S.ButtonsContainer>
          <Button backgroundColor={theme.secondary} onPress={onClosed}>
            <Label color={theme.primary}>Reiniciar</Label>
          </Button>
          <Button backgroundColor={theme.primary} onPress={setNewModal}>
            <Label color={theme.secondary}>Outro Tamanho</Label>
          </Button>
        </S.ButtonsContainer>
        
      </S.Container>
    </Modal>)
}