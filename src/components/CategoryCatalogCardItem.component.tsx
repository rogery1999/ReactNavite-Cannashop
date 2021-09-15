import currencyFormatter from 'currency-formatter';
import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/Theme/ThemeContext';
import { appStyles } from '../Theme/appStyles';

interface IProps {
  title: string;
  price: number;
  uri: string;
  unit: string;
  liked?: boolean;
  width: number;
}

const DEFAULT_BACKGROUND_COLOR = '#f8f8ff';
const CARD_PRIMARY_COLOR = '#0D1934';

const CategoryCatalogCardItem = ({
  price,
  title,
  uri,
  unit,
  width,
  liked = false,
}: IProps) => {
  const {
    state: { colors, colorPalette },
  } = useContext(themeContext);
  const [isFavourite, setIsFavourite] = useState(liked);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            colorPalette === 'light' ? DEFAULT_BACKGROUND_COLOR : colors.card,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => console.log('abrir modal')}
        activeOpacity={0.3}
        style={[styles.touchable]}
      >
        <View
          style={[
            styles.productCard,
            {
              width,
            },
          ]}
        >
          <View style={[styles.imageContainer, appStyles.centerContent]}>
            <Image
              source={{
                uri,
              }}
              style={[appStyles.imageCoverParent]}
            />
          </View>
          <View style={[styles.priceContainer]}>
            <Text style={[styles.priceText]}>
              {currencyFormatter.format(price, {
                code: 'MXN',
                precision: 0,
              })}
            </Text>
            <Text style={[styles.textCant]}> /{unit}</Text>
          </View>
          <Text style={[styles.titleCard]}>{title}</Text>
          <View style={[styles.heartButton, appStyles.centerContent]}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setIsFavourite(!isFavourite)}
            >
              <Icon
                name={isFavourite ? 'heart' : 'heart-outline'}
                size={27}
                color={isFavourite ? 'red' : CARD_PRIMARY_COLOR}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCatalogCardItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    shadowColor: '#8DC45DCC',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 15,
    marginTop: 3,
  },
  touchable: {
    borderRadius: 30,
  },
  productCard: {
    borderRadius: 30,
    height: 320,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  titleCard: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: CARD_PRIMARY_COLOR,
  },
  textCant: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    fontWeight: 'bold',
    color: CARD_PRIMARY_COLOR,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#70AC50',
  },
  imageContainer: { flex: 1 },
});
