import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DEFAULT_VALUES } from '../Theme/appStyles';
import { ICategoryItem } from './CategoryCatalog.component';
import CategoryCatalogCardItem from './CategoryCatalogCardItem.component';

interface IProps {
  group: ICategoryItem[];
  cant: number;
  width: number;
  space?: number;
}

const CategoryCatalogItemGroup = ({
  cant,
  group,
  width,
  space = DEFAULT_VALUES.separatorSpace.default,
}: IProps) => {
  const cardWidth = parseInt(`${(width - (cant - 1) * space) / cant}`, 10);
  return (
    <View style={[styles.groupContainer, { width }]}>
      {group.map(value => (
        <CategoryCatalogCardItem key={value.id} {...value} width={cardWidth} />
      ))}
    </View>
  );
};

export default CategoryCatalogItemGroup;

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
