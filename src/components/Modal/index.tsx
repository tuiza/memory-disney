import React, { useRef, useEffect, useContext } from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { ThemeContext } from 'styled-components'

type ModaLProps = {
  open: boolean
  children: JSX.Element
} & ModalizeProps

export const Modal = ({ open, children, ...rest}: ModaLProps) => {
  const modalizeRef = useRef<Modalize>(null);
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (open) {
      modalizeRef.current?.open()
    } else {
      modalizeRef.current?.close()
    }
  }, [open])

  return (
    <Modalize
      ref={modalizeRef}
      childrenStyle={{ height: 300}}
      adjustToContentHeight
      modalStyle={{ backgroundColor: theme.background }}
      {...rest} >{children}</Modalize>
  );
};