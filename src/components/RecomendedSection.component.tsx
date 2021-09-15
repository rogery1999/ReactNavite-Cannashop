import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { themeContext } from '../context/Theme/ThemeContext';
import { appStyles, DEFAULT_VALUES } from '../Theme/appStyles';
import CardItemCarousel from './CardItemCarousel.component';

export interface IProduct {
  id: number;
  title: string;
  stars: number;
  overview: string;
  price: number;
  currency: string;
  image: string;
}

const products: IProduct[] = [
  {
    id: 1,
    title: 'Cápsulas de Aceite de CBD',
    stars: 3,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1200,
    currency: 'mxn',
    image:
      'https://img.sensiseeds.com/es/productos-de-cbd/capsulas-aceite-cbd-10mg-photo.png',
  },
  {
    id: 2,
    title: 'Product 1',
    stars: 2.5,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 180,
    currency: 'mxn',
    image:
      'https://cdn.shopify.com/s/files/1/1176/7234/products/CBD-oil-Capsules_30ct-10mg-SKU-137.png?v=1539646194',
  },
  {
    id: 3,
    title: 'Product 2',
    stars: 4,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 2300,
    currency: 'mxn',
    image:
      'https://img.sensiseeds.com/es/productos-de-cbd/aceite-cbd-gold-5-10ml-small.png',
  },
  {
    id: 4,
    title: 'Product 3',
    stars: 5,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 900,
    currency: 'mxn',
    image:
      'https://img.sensiseeds.com/es/productos-de-cbd/capsulas-aceite-cbd-10mg-photo.png',
  },
  {
    id: 5,
    title: 'Product 4',
    stars: 4.1,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1700,
    currency: 'mxn',
    image:
      'https://cdn.shopify.com/s/files/1/1176/7234/products/CBD-oil-Capsules_30ct-10mg-SKU-137.png?v=1539646194',
  },
  {
    id: 6,
    title: 'Product 5',
    stars: 1,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 380,
    currency: 'mxn',
    image:
      'https://img.sensiseeds.com/es/productos-de-cbd/aceite-cbd-gold-5-10ml-small.png',
  },
];

const { width } = Dimensions.get('window');
const CARD_OFFSET = 30;
const BACKGROUND_CARD_OFFSET_HEIGHT = 15;

const calculateCardSize = () => width - 2 * CARD_OFFSET;

const RecomendedSection = () => {
  const {
    state: { colors },
  } = useContext(themeContext);
  const [counter, setCounter] = useState(1);
  const renderTitle = () => (
    <View style={styles.recomendedTitleContainer}>
      <Text style={[styles.recomendedTitle, { color: colors.title }]}>
        Recomendados
      </Text>
      <View style={[styles.countTextContainer, appStyles.centerContent]}>
        <Text style={[styles.counterText, { color: colors.title }]}>
          {counter}
        </Text>
        <Text style={[styles.counterText, { color: colors.secondary }]}>
          /{products.length}
        </Text>
      </View>
    </View>
  );
  const renderBackgroundCards = () => (
    <>
      <View
        style={[
          styles.cardProductContainerBackground,
          styles.leftCardBackground,
          {
            backgroundColor: colors.leftCardBorder,
            width: calculateCardSize(),
            height: calculateCardSize() - 2 * BACKGROUND_CARD_OFFSET_HEIGHT,
          },
        ]}
      />
      <View
        style={[
          styles.cardProductContainerBackground,
          styles.rightCardBackground,
          {
            backgroundColor: colors.rightCardBorder,
            width: calculateCardSize(),
            height: calculateCardSize() - 2 * BACKGROUND_CARD_OFFSET_HEIGHT,
          },
        ]}
      />
    </>
  );
  return (
    <View style={[styles.recomendedContainer]}>
      {renderTitle()}
      <View style={[appStyles.centerContent]}>
        {renderBackgroundCards()}
        <Carousel
          data={products}
          renderItem={({ item }) => (
            <CardItemCarousel item={item} size={calculateCardSize()} />
          )}
          itemWidth={calculateCardSize()}
          sliderWidth={width - 2 * DEFAULT_VALUES.separatorSpace.default}
          layout='tinder'
          onSnapToItem={index => setCounter(index + 1)}
          keyExtractor={({ id }) => id.toString()}
          layoutCardOffset={0}
        />
      </View>
    </View>
  );
};

export default RecomendedSection;

const styles = StyleSheet.create({
  recomendedContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  recomendedTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recomendedTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  countTextContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  counterText: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 20,
  },
  leftCardBackground: {
    left: 0,
  },
  rightCardBackground: {
    right: 0,
  },
  cardProductContainerBackground: {
    borderRadius: 30,
    position: 'absolute',
  },
});
