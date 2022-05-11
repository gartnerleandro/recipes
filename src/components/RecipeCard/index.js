import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {RECIPE_URL} from '../../utils/urls';

import styles from './styles';

export default ({item}) => {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(RECIPE_URL, {recipe: item});

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );
};
