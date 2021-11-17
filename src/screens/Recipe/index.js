import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  View,
} from 'react-native';

import styles from './styles';

const image = require('../../assets/background.jpeg');

const Recipe = ({route}) => {
  const {recipe} = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" bounces={false}>
        <ImageBackground
          style={styles.backgroundImage}
          source={image}
          resizeMode="cover">
          <View style={styles.overlay} />
          <Text style={styles.title}>{recipe.title}</Text>
        </ImageBackground>
        <Text style={styles.description}>{recipe.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
