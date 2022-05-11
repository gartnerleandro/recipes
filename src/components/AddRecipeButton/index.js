import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

import {ADD_RECIPE_URL} from '../../utils/urls';

import styles from './styles';

export default () => {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(ADD_RECIPE_URL);

  return (
    <TouchableOpacity
      accessibilityLabel="Add recipe button"
      style={styles.button}
      onPress={handlePress}>
      <Text style={styles.buttonText}>Add recipe</Text>
    </TouchableOpacity>
  );
};
