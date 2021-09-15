import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { themeContext } from '../context/Theme/ThemeContext';
import {
  TabBarButtons,
  TabPagesProps,
} from '../navigation/TabNavigator/TabNavigator';
import IconNotification from './IconNotification.component';
import UserAvatar from './UserAvatar.component';

interface IProps {
  routeName: keyof TabPagesProps;
  iconSize: number;
  onPress: () => void;
}

const TabBarButton = ({ routeName, iconSize, onPress }: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      {routeName === 'ProfileScreen' ? (
        <UserAvatar diameter={iconSize + 5} borderWidth={2} />
      ) : (
        <IconNotification
          name={TabBarButtons[routeName].iconName}
          size={iconSize}
          color={colors.placeHolder}
          colorNotification={colors.secondary}
          notified={routeName === 'NotificationScreen'}
        />
      )}
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'transparent',
  },
});
