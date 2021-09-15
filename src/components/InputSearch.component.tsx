import React, { useContext } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/Theme/ThemeContext';

interface IProps {
  onChange: (textSearched: string) => void;
  onSearch: () => void;
}

const InputSearch = ({ onChange, onSearch }: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <View style={[styles.container, { borderRightColor: colors.placeHolder }]}>
      <TouchableOpacity activeOpacity={0.5} onPress={onSearch}>
        <Icon name='search' size={30} color={colors.title} />
      </TouchableOpacity>
      <TextInput
        style={[styles.input]}
        onChangeText={onChange}
        placeholder='¿Qué quieres conectar?'
        placeholderTextColor={colors.placeHolder}
        onSubmitEditing={() => onSearch()}
        keyboardType={'default'}
      />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1.5,
  },
  input: {
    marginHorizontal: 5,
    fontSize: 14,
    fontFamily: 'Inter-Light',
  },
});
