import * as S from './styles'
import { useRecoilState } from 'recoil'
import { themeState } from '../../atoms/gameState'
import { useContext, useState } from 'react'
import { evil, royal } from '../../animations/index'
import { ThemeContext } from 'styled-components/native'
import ToggleButton from "react-native-toggle-element"


export default function Toggle(){
const [toggleValue, setToogleValue] = useState(false);
{
    const [, setTheme] = useRecoilState(themeState)
    const themeContext = useContext(ThemeContext)

    const onHandleToggle = () => {
        setToogleValue(!toggleValue)
        setTheme(toggleValue ? "light" : 'dark')
    }

    return (
            <S.ToggleConatiner>
                <ToggleButton
                    value={toggleValue}
                    onPress={onHandleToggle}
                    thumbInActiveComponent={
                        <S.RoyalThumb
                            source={royal}
                            autoPlay={true}
                            loop={false}
                        />
                    }
                    thumbActiveComponent={
                        <S.EvilThumb
                            source={evil}
                            autoPlay={true}
                            loop={false}
                        />
                    }
                    thumbButton={{
                        width: 0,
                        height: 0,
                        radius: 0,
                        activeBackgroundColor: themeContext.disable,
                        inActiveBackgroundColor: themeContext.disable,
                    }}
                    trackBar={{
                        activeBackgroundColor: themeContext.background,
                        inActiveBackgroundColor: themeContext.background,
                        borderActiveColor: themeContext.primary,
                        borderInActiveColor: themeContext.secondary,
                        borderWidth: 2,
                        width: 67,
                        height: 15,

                    }}
                />
            </S.ToggleConatiner>
        )
    }
}
