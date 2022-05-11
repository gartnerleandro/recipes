import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';

import useRecipes from '../../hooks/useRecipes';
import userNewRecipe from '../../hooks/userNewRecipe';

import styles from './styles';

export default ({navigation}) => {
  const {addRecipe} = useRecipes();
  const {
    title,
    ingredients,
    description,
    onEditTitle,
    onAddNewIngredient,
    onRemoveIngredient,
    onEditIngredient,
    onEditDescription,
  } = userNewRecipe();

  const onSave = () => {
    addRecipe({title, ingredients, description}).then(() =>
      navigation.goBack(),
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollContainer}>
        <TextInput
          style={styles.title}
          onChangeText={onEditTitle}
          value={title}
          placeholder="Recipe title"
        />
        <Text style={styles.label}>Ingredients:</Text>
        {!!ingredients?.length &&
          ingredients.map((elem, idx) => (
            <View key={idx} style={styles.ingredientElement}>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={text => onEditIngredient(idx, text)}
                value={elem}
                placeholder="Some ingredient"
              />
              {idx !== 0 && (
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => onRemoveIngredient(idx)}>
                  <Text>X</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        <Button title="Add ingredient" onPress={onAddNewIngredient} />
        <TextInput
          style={styles.description}
          multiline
          numberOfLines={200}
          editable
          maxLength={900}
          onChangeText={onEditDescription}
          value={description}
          placeholder="Recipe description"
        />
        <Button title="Save" onPress={onSave} />
      </ScrollView>
    </SafeAreaView>
  );
};
