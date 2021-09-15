import React, { useContext } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { themeContext } from '../context/Theme/ThemeContext';
import { DEFAULT_VALUES } from '../Theme/appStyles';
import { agroupArray } from '../utils/ArrayUtils';
import CategoryCatalogItemGroup from './CategoryCatalogItemGroup.component';

interface IProps {
  categoryTitle: string;
}

export interface ICategoryItem {
  id: string;
  price: number;
  title: string;
  unit: string;
  uri: string;
  liked: boolean;
}

const categoryData: ICategoryItem[] = [
  {
    id: '1',
    liked: false,
    price: 128,
    title: 'Cannabidiol medicinal',
    unit: '30ml',
    uri: 'https://www.herbdon.com/wp-content/uploads/2020/11/Herbon-cbd-box-3.1-blue-sin-fondo.png',
  },
  {
    id: '2',
    liked: true,
    price: 78,
    title: 'Royal High Green',
    unit: 'gm',
    uri: 'https://img.sensiseeds.com/es/productos-de-cbd/aceite-cbd-gold-5-10ml-small.png',
  },
  {
    id: '3',
    liked: false,
    price: 128,
    title: 'Cannabidiol medicinal',
    unit: '30ml',
    uri: 'https://cdn.shopify.com/s/files/1/1176/7234/products/CBD-oil-Capsules_30ct-10mg-SKU-137.png?v=1539646194',
  },
  {
    id: '4',
    liked: true,
    price: 78,
    title: 'Royal High Green',
    unit: 'gm',
    uri: 'https://img.sensiseeds.com/es/productos-de-cbd/aceite-cbd-gold-5-10ml-small.png',
  },
  {
    id: '5',
    liked: false,
    price: 128,
    title: 'Cannabidiol medicinal',
    unit: '30ml',
    uri: 'https://cdn.shopify.com/s/files/1/1176/7234/products/CBD-oil-Capsules_30ct-10mg-SKU-137.png?v=1539646194',
  },
  {
    id: '6',
    liked: true,
    price: 78,
    title: 'Royal High Green',
    unit: 'gm',
    uri: 'https://img.sensiseeds.com/es/productos-de-cbd/aceite-cbd-gold-5-10ml-small.png',
  },
];

const { width } = Dimensions.get('window');

const CategoryCatalog = ({ categoryTitle }: IProps) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  const data = agroupArray(categoryData, 2);
  const sectionWidth = width - 2 * DEFAULT_VALUES.separatorSpace.default;
  return (
    <View
      style={{
        width: sectionWidth,
      }}
    >
      <Text style={[styles.sectionTitle, { color: colors.title }]}>
        {categoryTitle}
      </Text>
      <View style={[styles.productListContainer]}>
        {data.map((group, index) => (
          <CategoryCatalogItemGroup
            key={index.toString()}
            cant={2}
            group={group}
            width={sectionWidth}
            space={DEFAULT_VALUES.separatorSpace.maximun}
          />
        ))}
      </View>
    </View>
  );
};

export default CategoryCatalog;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  productListContainer: {
    marginTop: 8,
  },
});
