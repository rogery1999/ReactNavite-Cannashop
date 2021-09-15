import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { themeContext } from '../context/Theme/ThemeContext';
import { TabPagesProps } from '../navigation/TabNavigator/TabNavigator';
import { parseInteger } from '../utils/MathUtils';
import ActiveTabBarButton from './ActiveTabBarButton.component';
import TabBarButton from './TabBarButton.component';

interface IProps {
  props: BottomTabBarProps;
  initialRouteName: keyof TabPagesProps;
}

const { width } = Dimensions.get('window');

const iconSize = (buttons: number): number => {
  const widthWithoutSpaces = parseInteger(width - (buttons + 1) * 25);
  const widthWithoutText = parseInteger(widthWithoutSpaces - 50);
  const widthWithoutCardSpaces = parseInteger(widthWithoutText - 3 * 15);
  return widthWithoutCardSpaces / buttons;
};

const TabBar = ({
  props: {
    state: { routeNames },
    navigation: { navigate },
  },
  initialRouteName,
}: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  const iconDiameter = iconSize(5);
  const [activeRoute, setActiveRoute] = useState(initialRouteName);
  const onPress = (name: keyof TabPagesProps) => {
    setActiveRoute(name);
    navigate(name);
  };
  return (
    <View style={[styles.tabBar, { backgroundColor: colors.tabBarBackground }]}>
      {routeNames.map((name, index) =>
        name !== activeRoute ? (
          <TabBarButton
            key={index.toString()}
            routeName={name as keyof TabPagesProps}
            iconSize={iconDiameter}
            onPress={() => onPress(name as keyof TabPagesProps)}
          />
        ) : (
          <ActiveTabBarButton
            key={index.toString()}
            iconSize={iconDiameter}
            routeName={name as keyof TabPagesProps}
          />
        )
      )}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
  },
});
