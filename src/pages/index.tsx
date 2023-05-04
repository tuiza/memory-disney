import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Board from './Board';
import { useRecoilValue } from 'recoil';
import SplashScreen from './SplashScreen';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import themes from '../theme';
import { themeState } from '../atoms/gameState';
import { useState } from 'react';

const Index = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    const theme = useRecoilValue(themeState)

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={themes[theme]}>
                <StatusBar style="auto" />
                {showSplashScreen
                    ? (<SplashScreen setSplashScreen={() => setShowSplashScreen(false)} />)
                    : (<Board />)
                }
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

export default Index