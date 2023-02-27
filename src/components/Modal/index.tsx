import React, { useRef, useEffect } from 'react';
import { Modalize,  ModalizeProps } from 'react-native-modalize';

type ModaLProps = {
  open: boolean
  children: JSX.Element
} & ModalizeProps

export const Modal = ({ open, children, ...rest}: ModaLProps) => {
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    if (open) {
   modalizeRef.current?.open()
  } 
  }, [open])

  return (
    <Modalize
      ref={modalizeRef}
      childrenStyle={{ height: 300}}
      adjustToContentHeight
      {...rest} >{children}</Modalize>
  );
};