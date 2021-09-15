/* eslint-disable no-shadow */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TabBar from '../../components/TabBar.component';
import { themeContext } from '../../context/Theme/ThemeContext';
import { HomeScreen } from '../../screens/HomeScreen';
import LocatizationScreen from '../../screens/LocatizationScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import OffersScreen from '../../screens/OffersScreen';
import ProfileScreen from '../../screens/ProfileScreen';

export enum TabScreens {
  HomeScreen = 'HomeScreen',
  LocatizationScreen = 'LocatizationScreen',
  OffersScreen = 'OffersScreen',
  NotificationScreen = 'NotificationScreen',
  ProfileScreen = 'ProfileScreen',
}

export type TabPagesProps = {
  HomeScreen: undefined;
  LocatizationScreen: undefined;
  OffersScreen: undefined;
  NotificationScreen: undefined;
  ProfileScreen: undefined;
};

interface ITabButton {
  label: string;
  iconName: string;
}

export const TabBarButtons: { [key in TabScreens]: ITabButton } = {
  HomeScreen: {
    label: 'Home',
    iconName: 'home',
  },
  LocatizationScreen: {
    label: 'Local',
    iconName: 'compass',
  },
  NotificationScreen: {
    label: 'Alert',
    iconName: 'notifications',
  },
  OffersScreen: {
    label: 'Offer',
    iconName: 'flash',
  },
  ProfileScreen: {
    label: 'User',
    iconName: 'person',
  },
};

const Tab = createBottomTabNavigator<TabPagesProps>();

export const TabNavigator = () => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <NavigationContainer>
      <View
        style={[
          styles.mainContainer,
          { backgroundColor: colors.tabBarBackground },
        ]}
      >
        <Tab.Navigator
          initialRouteName='HomeScreen'
          screenOptions={{
            headerShown: false,
          }}
          sceneContainerStyle={{
            backgroundColor: colors.background,
          }}
          tabBar={props => (
            <TabBar
              props={props}
              initialRouteName={'HomeScreen' as keyof TabPagesProps}
            />
          )}
        >
          <Tab.Screen name='HomeScreen' component={HomeScreen} />
          <Tab.Screen
            name='LocatizationScreen'
            component={LocatizationScreen}
          />
          <Tab.Screen name='OffersScreen' component={OffersScreen} />
          <Tab.Screen
            name='NotificationScreen'
            component={NotificationScreen}
          />
          <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
