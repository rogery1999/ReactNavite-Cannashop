/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState } from 'react-native';
import { themeReducer, THEMES } from './ThemeReducer';

export enum ThemePalettes {
  light = 'light',
  dark = 'dark',
}

export interface ThemeState {
  colorPalette: ThemePalettes;
  colors: ThemeColors;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  card: string;
  leftCardBorder: string;
  rightCardBorder: string;
  placeHolder: string;
  text: string;
  notification: string;
  title: string;
  tabBarBackground: string;
  border: string;
  cardText: string;
  modal: {
    background: string;
    closeButton: string;
    closeIcon: string;
  };
}

interface ThemeContext {
  state: ThemeState;
  setTheme: (name: ThemePalettes) => void;
}

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const defaultLightThemeState: ThemeState = {
  colorPalette: ThemePalettes.light,
  colors: THEMES.light,
};

const defaultDarkThemeState: ThemeState = {
  colorPalette: ThemePalettes.dark,
  colors: THEMES.dark,
};

export const themeContext = createContext({} as ThemeContext);

export const ThemeProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark'
      ? defaultDarkThemeState
      : defaultLightThemeState
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        searchingSystemTheme();
      }
    });
    AppState.addEventListener('focus', () => searchingSystemTheme());
  }, []);

  const searchingSystemTheme = () => {
    setTheme(
      Appearance.getColorScheme() === 'light'
        ? ThemePalettes.light
        : ThemePalettes.dark
    );
  };

  const setTheme = (name: ThemePalettes) =>
    dispatch({ type: 'ChangeTheme', payload: name });
  return (
    <themeContext.Provider value={{ state, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
