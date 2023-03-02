import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Board from './src/pages/Board';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
    <GestureHandlerRootView style={{flex: 1 }}>
      <Board/>
      </GestureHandlerRootView>
    </RecoilRoot>
    
  );
}

