import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/Theme/ThemeContext';
import {
  TabBarButtons,
  TabPagesProps,
} from '../navigation/TabNavigator/TabNavigator';
import { DEFAULT_VALUES } from '../Theme/appStyles';
import UserAvatar from './UserAvatar.component';

interface IProps {
  routeName: keyof TabPagesProps;
  iconSize: number;
}

const ActiveTabBarButton = ({ routeName, iconSize }: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <View
      style={[
        styles.activeButton,
        { backgroundColor: DEFAULT_VALUES.activeBackgroundOpacity },
      ]}
    >
      {routeName === 'ProfileScreen' ? (
        <UserAvatar diameter={iconSize + 5} borderWidth={2} />
      ) : (
        <Icon
          name={TabBarButtons[routeName].iconName}
          size={iconSize}
          color={colors.secondary}
        />
      )}
      <Text style={[styles.activeText, { color: colors.secondary }]}>
        {TabBarButtons[routeName].label}
      </Text>
    </View>
  );
};

export default ActiveTabBarButton;

const styles = StyleSheet.create({
  activeButton: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  activeText: {
    marginLeft: 10,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
});
