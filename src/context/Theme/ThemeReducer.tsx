import { ThemeColors, ThemePalettes, ThemeState } from './ThemeContext';

type Themes = {
  [key in ThemePalettes]: ThemeColors;
};

export const THEMES: Themes = {
  light: {
    primary: '#FFFFFF',
    background: '#FFFFFF',
    card: '#0D1934',
    leftCardBorder: '#DFEAF5',
    rightCardBorder: '#DFF5E6',
    text: '#FFFFFF',
    placeHolder: '#B0BED1',
    notification: '#2e8b57',
    secondary: '#78CE74',
    cardText: '#78CE74',
    tertiary: '#EAF8EA',
    title: '#0D1934',
    tabBarBackground: '#FFFFFF',
    border: '#707070',
    modal: {
      background: '#F2F3F4',
      closeButton: '#1C2740',
      closeIcon: '#FFFFFF',
    },
  },
  dark: {
    primary: '#25293E',
    background: '#25293E',
    leftCardBorder: '#2F3347',
    rightCardBorder: '#2F3448',
    card: '#475164',
    text: '#FFFFFF',
    placeHolder: '#6A6E81',
    notification: '#78CE74',
    secondary: '#78CE74',
    cardText: '#FFFFFF',
    tertiary: 'EAF8EA',
    title: '#FFFFFF',
    tabBarBackground: '#22273B',
    border: '#FFFFFF',
    modal: {
      background: '#2D3446',
      closeButton: '#FFFFFF',
      closeIcon: '#0D1934',
    },
  },
};

const changeTheme = (state: ThemeState, payload: ThemePalettes): ThemeState => {
  return { ...state, colors: THEMES[payload], colorPalette: payload };
};

type Action = { type: 'ChangeTheme'; payload: ThemePalettes };

export const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case 'ChangeTheme':
      return changeTheme(state, action.payload);
    default:
      return state;
  }
};
