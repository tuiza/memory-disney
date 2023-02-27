import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Board from './src/pages/Board';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1 }}>
      <Board/>
    </GestureHandlerRootView>
    
  );
}

