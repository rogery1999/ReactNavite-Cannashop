/* eslint-disable react-native/no-inline-styles */
import { BlurView } from '@react-native-community/blur';
import React, { useContext, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/Theme/ThemeContext';
import { appStyles, DEFAULT_VALUES } from '../Theme/appStyles';
import StarsCounter from './StarsCounter.component';

interface IProps {
  showModal: boolean;
  onPress: () => void;
}

interface IPropsCloseButton {
  onPress: () => void;
}

interface IPropsBuyButton {}

interface IPropsPriceCardButton {
  active: boolean;
}

interface IPropsIconButton {
  name: string;
  size?: number;
  onPress: () => void;
}

interface IPropsContentBody {
  isFavourite: boolean;
  changeFavourite: () => void;
}

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

const MODAL_CONTENT = {
  height: 650,
  width: windowWidth - 2 * (DEFAULT_VALUES.separatorSpace.maximun + 5),
};
const MODAL_CLOSE_BUTTON = {
  size: 50,
  borderRadius: 100,
  top: parseInt(`${windowsHeight / 2 - MODAL_CONTENT.height / 2 - 30}`, 10),
  left: parseInt(`${windowWidth / 2 - MODAL_CONTENT.width / 2 + 30}`, 10),
};

const HomeModal = ({ showModal, onPress }: IProps) => {
  const {
    state: { colors, colorPalette },
  } = useContext(themeContext);
  const [isFavourite, setIsFavourite] = useState(true);
  return (
    <Modal
      visible={showModal}
      animationType='fade'
      hardwareAccelerated
      transparent
    >
      <BlurView
        blurAmount={4}
        style={[styles.blurContainer]}
        blurType={colorPalette}
      />
      {/* Modal Content */}
      <View style={[styles.modalContainer, appStyles.centerContent]}>
        <View
          style={[
            styles.modalContentContainer,
            {
              width: MODAL_CONTENT.width,
              backgroundColor: colors.modal.background,
            },
          ]}
        >
          <View style={[styles.modalContentHeader, { flex: 1 }]}>
            <View style={[styles.starsContainer, appStyles.centerContent]}>
              <StarsCounter
                stars={3}
                size={10}
                maxStars={5}
                emptyStarColor={colors.placeHolder}
                complete
                enableReload
              />
              <Text
                style={[styles.startText, { color: colors.modal.closeButton }]}
              >
                3.0
              </Text>
            </View>
            <View
              style={[
                styles.productTypeContainer,
                appStyles.centerContent,
                {
                  backgroundColor:
                    colorPalette === 'light' ? colors.secondary : 'transparent',
                },
              ]}
            >
              <Text
                style={[
                  styles.startText,
                  {
                    color:
                      colorPalette === 'light' ? '#FFFFFF' : colors.secondary,
                  },
                ]}
              >
                Semillas de cannabis
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.productTitleText,
                  { color: colors.modal.closeButton },
                ]}
              >
                Royal High Green
              </Text>
            </View>
            <View
              style={[
                {
                  position: 'absolute',
                  width: 130,
                  height: 200,
                  right: -0,
                  top: -90,
                },
              ]}
            >
              <Image
                source={{
                  uri: 'https://cdn.shopify.com/s/files/1/1176/7234/products/CBD-oil-Capsules_30ct-10mg-SKU-137.png?v=1539646194',
                }}
                style={[appStyles.imageCoverParent]}
              />
            </View>
          </View>
          <ContentBody
            isFavourite={isFavourite}
            changeFavourite={() => setIsFavourite(!isFavourite)}
          />
          <View style={[styles.modalPriceDetails]}>
            <Text
              style={[styles.priceTitle, { color: colors.modal.closeButton }]}
            >
              Seleccionar tamaño
            </Text>
            {/* TODO: Cambiar esto por un flatlist y hacerlo responsive con claulos matematicos */}
            <View
              style={[
                {
                  marginVertical: 10,
                  flexDirection: 'row',
                },
              ]}
            >
              <PriceCardButton active={false} />
              <PriceCardButton active={true} />
              <PriceCardButton active={false} />
            </View>
          </View>
          <BuyButton />
        </View>
        <CloseModalButton onPress={onPress} />
      </View>
    </Modal>
  );
};

const CloseModalButton = ({ onPress }: IPropsCloseButton) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <View
      style={[
        styles.modalCloseButton,
        appStyles.centerContent,
        {
          backgroundColor: colors.modal.closeButton,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[styles.modalCloseTouchable, appStyles.centerContent]}
        activeOpacity={0.4}
      >
        <Icon
          name='chevron-back-outline'
          size={40}
          color={colors.modal.closeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const BuyButton = ({}: IPropsBuyButton) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.modalTouchableButton]}>
      <View
        style={[
          styles.modalBuyButton,
          { backgroundColor: colors.modal.closeButton },
        ]}
      >
        <Text
          style={[{ color: colors.modal.closeIcon }, styles.modalTextButton]}
        >
          Agregar al carrito
        </Text>
        <Text
          style={[{ color: colors.modal.closeIcon }, styles.modalTextButton]}
        >
          $260
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const PriceCardButton = ({ active }: IPropsPriceCardButton) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <View
      style={[
        styles.modalPriceCardContainer,
        {
          borderColor: colors.modal.closeButton,
          backgroundColor: active ? colors.secondary : 'transparent',
          borderWidth: active ? 0 : 3,
        },
      ]}
    >
      <Text
        style={[
          styles.cantText,
          { color: active ? '#FFFFFF' : colors.modal.closeButton },
        ]}
      >
        $5.0/gm
      </Text>
      <Text
        style={[
          styles.priceText,
          { color: active ? '#FFFFFF' : colors.modal.closeButton },
        ]}
      >
        $160
      </Text>
    </View>
  );
};

const IconButton = ({ onPress, name, size = 25 }: IPropsIconButton) => {
  const {
    state: { colors },
  } = useContext(themeContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        appStyles.centerContent,
        styles.iconButton,
        styles.circleIconButton,
        {
          borderColor: colors.modal.closeButton,
        },
      ]}
    >
      <Icon name={name} size={size} color={colors.modal.closeButton} />
    </TouchableOpacity>
  );
};

const ContentBody = ({ isFavourite, changeFavourite }: IPropsContentBody) => {
  const {
    state: { colors, colorPalette },
  } = useContext(themeContext);
  return (
    <View style={[styles.modalContentBody]}>
      <View style={[styles.contentTitleContainer]}>
        <View
          style={[
            { borderBottomWidth: 2, borderBottomColor: colors.secondary },
          ]}
        >
          <Text
            style={[
              styles.contentTitleText,
              { color: colors.modal.closeButton },
            ]}
          >
            Descripción
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.contentTitleText,
              { color: colors.modal.closeButton, opacity: 0.3 },
            ]}
          >
            Recomendaciones
          </Text>
        </View>
      </View>
      <View style={[styles.contentDescriptionContainer]}>
        <Text
          style={[
            styles.contentDescriptionText,
            { color: colors.modal.closeButton },
          ]}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ad
          earum fuga possimus doloribus laborum quis amet! Explicabo molestiae,
          culpa quia minus quidem est corrupti maiores maxime ad asperiores
          illum!
        </Text>
      </View>
      <View style={[styles.contentButtonContainer]}>
        <View
          style={[styles.contentButtonBarContainer, appStyles.centerContent]}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={changeFavourite}
            style={[
              appStyles.centerContent,
              styles.heartButton,
              styles.circleIconButton,
            ]}
          >
            <Icon
              name={isFavourite ? 'heart' : 'heart-outline'}
              size={25}
              color={
                isFavourite
                  ? '#F03064'
                  : colorPalette === 'light'
                  ? colors.modal.closeButton
                  : colors.modal.closeIcon
              }
            />
          </TouchableOpacity>
          <IconButton name='share-social-outline' onPress={() => {}} />
          <IconButton name='chatbox-outline' onPress={() => {}} />
        </View>
        <TouchableOpacity>
          <Text
            style={[styles.learnMoreText, { color: colors.modal.closeButton }]}
          >
            Quiero aprender
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeModal;

const styles = StyleSheet.create({
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(8, 15, 38, 0.6)',
  },
  modalContainer: {
    flex: 1,
  },
  modalContentContainer: {
    height: MODAL_CONTENT.height,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderRadius: 40,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  modalContentHeader: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  modalContentBody: {
    marginTop: 20,
  },
  modalPriceDetails: {
    marginVertical: 15,
  },
  modalBuyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalTextButton: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    fontWeight: 'bold',
  },
  modalTouchableButton: {
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  modalPriceCardContainer: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 95,
    marginHorizontal: DEFAULT_VALUES.separatorSpace.minimun,
  },
  modalCloseButton: {
    position: 'absolute',
    borderRadius: MODAL_CLOSE_BUTTON.borderRadius,
    width: MODAL_CLOSE_BUTTON.size,
    height: MODAL_CLOSE_BUTTON.size,
    top: MODAL_CLOSE_BUTTON.top,
    left: MODAL_CLOSE_BUTTON.left,
  },
  modalCloseTouchable: {
    borderRadius: MODAL_CLOSE_BUTTON.borderRadius,
    height: '100%',
    width: '100%',
  },
  cantText: {
    alignSelf: 'flex-start',
    fontSize: 9,
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  priceTitle: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
  },
  contentTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTitleText: {
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  contentDescriptionContainer: {
    marginVertical: 8,
  },
  contentDescriptionText: {
    fontSize: 12,
    fontFamily: 'Inter-Light',
    textAlign: 'justify',
  },
  learnMoreText: {
    textDecorationLine: 'underline',
    fontSize: 12,
    fontFamily: 'Inter-Light',
    fontWeight: 'bold',
  },
  contentButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  contentButtonBarContainer: {
    flexDirection: 'row',
  },
  circleIconButton: {
    borderRadius: 100,
    marginHorizontal: 5,
  },
  heartButton: {
    backgroundColor: 'white',
    padding: 12,
  },
  iconButton: {
    borderWidth: 2,
    padding: 10,
  },
  startText: {
    fontSize: 9,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
  productTypeContainer: {
    paddingHorizontal: 5,
    marginVertical: 3,
    borderRadius: 5,
    marginTop: 10,
  },
  productTitleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  starsContainer: { flexDirection: 'row' },
});
