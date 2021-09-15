import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { themeContext } from '../context/Theme/ThemeContext';
import { appStyles } from '../Theme/appStyles';

interface IProps {
  onPress: () => void;
}

const HomeFAB = ({ onPress }: IProps) => {
  const {
    state: { colors, colorPalette },
  } = useContext(themeContext);
  return (
    <View
      style={[
        styles.floatButtonContainer,
        appStyles.centerContent,
        {
          borderColor:
            colorPalette === 'light' ? colors.placeHolder : colors.title,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.floatButton,
          appStyles.imageCoverParent,
          appStyles.centerContent,
        ]}
        onPress={onPress}
      >
        <Image
          source={{
            uri: 'https://clipart.info/images/ccovers/1503425986weed-symbol-png-cannabis-leaf.png',
          }}
          style={appStyles.imageCoverParent}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeFAB;

const styles = StyleSheet.create({
  floatButtonContainer: {
    position: 'absolute',
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: '#0B1934',
    bottom: 7,
    right: 5,
    borderWidth: 3,
  },
  floatButton: {
    padding: 5,
    borderRadius: 50,
  },
});
