import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  name: string;
  size: number;
  color?: string;
  colorNotification?: string;
  notified?: boolean;
}

const IconNotification = ({
  name,
  size,
  color = 'grey',
  colorNotification = 'green',
  notified = false,
}: IProps) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
      {notified ? (
        <View
          style={[styles.notification, { backgroundColor: colorNotification }]}
        />
      ) : null}
    </View>
  );
};

export default IconNotification;

const styles = StyleSheet.create({
  notification: {
    position: 'absolute',
    borderRadius: 10000,
    width: 10,
    height: 10,
    top: 1,
    right: 5,
  },
});
