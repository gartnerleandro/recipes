import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  FlatList,
  View,
} from 'react-native';

import styles from './styles';

const image = require('../../assets/background.jpeg');

const renderItem = ({item}) => (
  <View style={styles.ingredient}>
    <Text>- {item}</Text>
  </View>
);

const Recipe = ({route}) => {
  const {recipe} = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        source={image}
        resizeMode="cover">
        <View style={styles.overlay} />
        <Text style={styles.title}>{recipe.title}</Text>
      </ImageBackground>
      <FlatList
        bounces={false}
        style={styles.list}
        data={recipe.ingredients}
        renderItem={renderItem}
        keyExtractor={item => item}
        ListHeaderComponent={() => (
          <Text style={styles.label}>Ingredients</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.description}>{recipe.description}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Recipe;
