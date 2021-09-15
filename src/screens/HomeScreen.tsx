import React, { useContext, useState } from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CategoryCatalog from '../components/CategoryCatalog.component';
import HomeFAB from '../components/HomeFAB.component';
import HomeModal from '../components/HomeModal.component';
import IconNotification from '../components/IconNotification.component';
import InputSearch from '../components/InputSearch.component';
import RecomendedSection from '../components/RecomendedSection.component';
import UserAvatar from '../components/UserAvatar.component';
import WeedCategoryCard from '../components/WeedCategoryCard.component';
import { themeContext } from '../context/Theme/ThemeContext';

export interface IWeedCategory {
  id: number;
  label: string;
}

export interface HomeState {
  textSearched: string;
  categorySelected: IWeedCategory;
}

const weedCategories: IWeedCategory[] = [
  {
    id: 1,
    label: 'Kali Mist',
  },
  {
    id: 2,
    label: 'Moby Dick',
  },
  {
    id: 3,
    label: 'Orange Bud',
  },
  {
    id: 4,
    label: 'Orange Kush',
  },
];

const defaultHomeState: HomeState = {
  textSearched: '',
  categorySelected: { ...weedCategories[0] },
};

export const HomeScreen = () => {
  const {
    state: { colors, colorPalette },
  } = useContext(themeContext);
  const [showModal, setShowModal] = useState(false);
  const { top } = useSafeAreaInsets();
  const [homeState, setHomeState] = useState(defaultHomeState);
  const onInputChange = (textSearched: string) =>
    setHomeState({ ...homeState, textSearched });
  const onCategorySelected = (item: IWeedCategory) =>
    setHomeState({ ...homeState, categorySelected: { ...item } });
  const onSearch = () =>
    console.log(`Buscar coincidencia con ${homeState.textSearched}`);
  return (
    <View>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={colorPalette === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.page, { paddingTop: top + 10 }]}>
          {/* SearchBar */}
          <View style={[styles.navSearch, { borderColor: colors.border }]}>
            <UserAvatar diameter={60} />
            <View style={[styles.searchContainer]}>
              <InputSearch onChange={onInputChange} onSearch={onSearch} />
              <TouchableOpacity style={styles.shoppingCart} activeOpacity={0.5}>
                <IconNotification
                  name='browsers'
                  size={30}
                  color={colors.placeHolder}
                  colorNotification={colors.secondary}
                  notified
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Category Bar */}
          <View style={[styles.categoryContainer]}>
            <Text style={[styles.categoryTitle, { color: colors.title }]}>
              Categorías
            </Text>
            <FlatList
              horizontal
              data={weedCategories}
              renderItem={({ item }) => (
                <WeedCategoryCard
                  homeState={homeState}
                  item={item}
                  onPress={() => onCategorySelected(item)}
                />
              )}
              keyExtractor={({ id }) => id.toString()}
              style={[styles.categoryList]}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* Recomended Section */}
          <RecomendedSection />
          {/* Category Section */}
          <CategoryCatalog categoryTitle={homeState.categorySelected.label} />
        </View>
      </ScrollView>
      <HomeFAB onPress={() => setShowModal(true)} />
      <HomeModal onPress={() => setShowModal(false)} showModal={showModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
  },
  navSearch: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'green',
    borderBottomWidth: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shoppingCart: {
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
  },
  categoryList: {
    width: '100%',
  },
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
