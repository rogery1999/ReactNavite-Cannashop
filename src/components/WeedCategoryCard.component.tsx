/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeContext } from '../context/Theme/ThemeContext';
import { HomeState, IWeedCategory } from '../screens/HomeScreen';
import { DEFAULT_VALUES } from '../Theme/appStyles';

interface IProps {
  item: IWeedCategory;
  onPress: () => void;
  homeState: HomeState;
}

const WeedCategoryCard = ({
  item: { id, label },
  onPress,
  homeState,
}: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={[
          styles.categoryCard,
          {
            backgroundColor:
              homeState.categorySelected.id === id
                ? DEFAULT_VALUES.activeBackgroundOpacity
                : 'transparent',
          },
        ]}
      >
        <Text
          style={[
            {
              color:
                homeState.categorySelected.id === id
                  ? colors.secondary
                  : colors.placeHolder,
              fontSize: homeState.categorySelected.id === id ? 14 : 17,
              fontFamily:
                homeState.categorySelected.id === id
                  ? 'Inter-Regular'
                  : 'Roboto-Regular',
            },
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WeedCategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    paddingHorizontal: 12,
    height: 40,
  },
});
