import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Board from './src/pages/Board';
import { RecoilRoot } from 'recoil';
import SplashScreen from './src/pages/SplashScreen';

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {showSplashScreen ? (
          <SplashScreen
            setSplashScreen={() => setShowSplashScreen(false)}
          />
        ) : (
          <Board />)
        }
      </GestureHandlerRootView>
    </RecoilRoot>

  );
}

