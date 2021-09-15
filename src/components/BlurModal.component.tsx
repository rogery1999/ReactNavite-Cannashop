import React from 'react';
import { ImageBackground, Modal, StyleSheet } from 'react-native';

interface IProps {
  visible: boolean;
  children: JSX.Element;
}

const BlurModal = ({ visible, children }: IProps) => {
  return (
    <Modal visible={visible} transparent={true}>
      <ImageBackground
        source={{
          uri: 'https://i.blogs.es/80042f/bingwallpaper-2020-04-18/840_560.jpg',
        }}
        style={[styles.container]}
        blurRadius={50}
      >
        {children}
      </ImageBackground>
    </Modal>
  );
};

export default BlurModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
