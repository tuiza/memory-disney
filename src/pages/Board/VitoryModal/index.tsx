import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import { useRecoilValue } from 'recoil';
import { movesState, timerState} from '../../../atoms/gameState';
import LottieView from 'lottie-react-native';
import { winner } from '../../../animations'
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

  return (
    <Modal open={open} onClosed={onClosed}>
      <S.Container>
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
              loop={true}
              duration={4000}
            style={{ width: 200, height: 200, position: 'absolute', top: -35, left: 80, zIndex: -1 }}
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
            text={'Outro Nível'}
            textColor={themeContext.secondary}
          />
        </S.ButtonsContainer>
      </S.Container>
    </Modal>)
}