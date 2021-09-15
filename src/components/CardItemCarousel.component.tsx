import currencyFormatter from 'currency-formatter';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/Theme/ThemeContext';
import { appStyles } from '../Theme/appStyles';
import { IProduct } from './RecomendedSection.component';
import StarsCounter from './StarsCounter.component';

interface IProps {
  item: IProduct;
  size: number;
}

const CardItemCarousel = ({
  item: { currency, image, overview, price, stars, title },
  size,
}: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <View
      style={[
        styles.cardProductContainer,
        { backgroundColor: colors.card, width: size, height: size },
      ]}
    >
      <View style={[styles.productContentContainer]}>
        <View style={[styles.productDecriptionContainer]}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          <StarsCounter stars={stars} />
          <Text style={[styles.overview, { color: colors.text }]}>
            {overview}
          </Text>
          <Text style={[styles.price, { color: colors.secondary }]}>
            {currencyFormatter.format(price, { code: 'MXN', precision: 0 })}{' '}
            {currency}
          </Text>
        </View>
        <View style={[styles.imageContainer, appStyles.centerContent]}>
          <Image source={{ uri: image }} style={[appStyles.imageCoverParent]} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log('abrir modal')}
        >
          <View
            style={[styles.buyButton, { backgroundColor: colors.placeHolder }]}
          >
            <Icon name='folder-outline' size={35} color='#FFFFFF' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <View
            style={[styles.buyButton, { backgroundColor: colors.secondary }]}
          >
            <Text style={[styles.buyText, { color: colors.text }]}>
              Comprar ahora
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardItemCarousel;

const styles = StyleSheet.create({
  cardProductContainer: {
    borderRadius: 30,
    marginVertical: 20,
    overflow: 'hidden',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  productContentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  productDecriptionContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  imageContainer: {
    flex: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  overview: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    textAlign: 'justify',
  },
  price: {
    fontFamily: 'Inter-Medium',
    fontWeight: '700',
    fontSize: 25,
  },
  buyButton: {
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyText: {
    fontFamily: 'Inter-Medium',
    fontWeight: '700',
    fontSize: 16,
  },
});
