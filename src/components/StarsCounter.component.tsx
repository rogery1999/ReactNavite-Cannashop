/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const STAR_COLOR = '#FFCA1A';

interface IPropsSpecify {
  stars: number;
  size: number;
  maxStars: number;
  color: string;
  emptyStarColor: string;
  complete: boolean;
}

interface IProps {
  stars: number;
  size?: number;
  maxStars?: number;
  color?: string;
  emptyStarColor?: string;
  complete?: boolean;
  enableReload?: boolean;
}

interface IPropsRender {
  starsIconName: string[];
  emptyStars: string[];
  size: number;
  color: string;
  emptyStarColor: string;
}

const StarsCounter = ({
  stars,
  color = STAR_COLOR,
  size = 14,
  complete = false,
  maxStars = 5,
  emptyStarColor = 'grey',
  enableReload = false,
}: IProps) => {
  const arg: IPropsSpecify = useRef({
    color,
    complete,
    emptyStarColor,
    maxStars,
    size,
    stars,
  }).current;
  return enableReload ? ReloadEnable(arg) : ReloadDisable(arg);
};

const ReloadEnable = ({
  stars,
  color,
  complete,
  emptyStarColor,
  maxStars,
  size,
}: IPropsSpecify) => {
  const starsIconName: string[] = [];
  const emptyStars: string[] = [];
  for (let i = 0; i < stars; i++) {
    if (stars % 1 && parseInt(`${stars}`, 10) === i) {
      starsIconName.push('star-half');
    } else {
      starsIconName.push(`star`);
    }
  }
  if (complete) {
    for (let i = starsIconName.length; i < maxStars!; i++) {
      emptyStars.push('star');
    }
  }
  return Render({ color, emptyStarColor, emptyStars, size, starsIconName });
};

const ReloadDisable = ({
  stars,
  color,
  complete,
  emptyStarColor,
  maxStars,
  size,
}: IPropsSpecify) => {
  const starsIconName = useRef<string[]>([]).current;
  const emptyStars = useRef<string[]>([]).current;
  useEffect(() => {
    for (let i = 0; i < stars; i++) {
      if (stars % 1 && parseInt(`${stars}`, 10) === i) {
        starsIconName.push('star-half');
      } else {
        starsIconName.push(`star`);
      }
    }
    if (complete) {
      for (let i = starsIconName.length; i < maxStars!; i++) {
        emptyStars.push('star');
      }
    }
  }, []);
  return Render({ color, emptyStarColor, emptyStars, size, starsIconName });
};

const Render = ({
  starsIconName,
  emptyStars,
  size,
  color,
  emptyStarColor,
}: IPropsRender) => (
  <View style={[styles.startsContainer]}>
    {starsIconName.map((name, index) => (
      <Icon
        style={styles.startMargin}
        key={index.toString()}
        name={name}
        size={size}
        color={color}
      />
    ))}
    {emptyStars.map((name, index) => (
      <Icon
        style={styles.startMargin}
        key={`${index + starsIconName.length}`.toString()}
        name={name}
        size={size}
        color={emptyStarColor}
      />
    ))}
  </View>
);

export default StarsCounter;

const styles = StyleSheet.create({
  startMargin: {
    marginRight: 5,
  },
  startsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
