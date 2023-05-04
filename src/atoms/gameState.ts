import { atom } from 'recoil';

export const sizeState = atom<3 | 6 | 9>({
    key: 'sizeState',
    default: 6,
})

export const victoriesState = atom<number>({
    key: 'victoriesState',
    default: 0,
});

export const defeatsState = atom<number>({
    key: 'defeatsState',
    default: 0,
})

export const movesState = atom<number>({
    key: 'movesState',
    default: 0,
})

export const timerState = atom<string>({
    key: 'timerState',
    default: '0:00',
})

export const themeState = atom<'light' | 'dark'>({ // tirar daqui
    key: 'themeState',
    default: 'light',
})
