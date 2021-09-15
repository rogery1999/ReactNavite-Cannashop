import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface IProps {
  diameter?: number;
  borderWidth?: number;
}

const UserAvatar = ({ diameter = 80, borderWidth = 5 }: IProps) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        { height: diameter, width: diameter, borderWidth },
      ]}
    >
      <Image
        style={[styles.avatarImage, { height: diameter, width: diameter }]}
        source={{
          uri: 'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg',
        }}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderColor: '#E4E9F4',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {},
});
