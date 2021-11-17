import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

const AddRecipe = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [description, setDescription] = useState('');

  const onSave = () => {
    const key = `${title.trim().replace(' ', '-')}`;

    AsyncStorage.setItem(
      key,
      JSON.stringify({title, ingredients, description}),
    ).then(() => {
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollContainer}>
        <TextInput
          style={styles.title}
          onChangeText={setTitle}
          value={title}
          placeholder="Recipe title"
        />
        <Text style={styles.label}>Ingredients:</Text>
        {!!ingredients?.length &&
          ingredients.map((elem, idx) => (
            <View key={idx} style={styles.ingredientElement}>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={text => {
                  const newIngredients = [...ingredients];
                  newIngredients[idx] = text;

                  setIngredients(newIngredients);
                }}
                value={elem}
                placeholder="Some ingredient"
              />
              {idx !== 0 && (
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => {
                    const newIngredients = [...ingredients];
                    newIngredients.splice(idx, 1);
                    setIngredients(newIngredients);
                  }}>
                  <Text>X</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        <Button
          title="Add ingredient"
          onPress={() => setIngredients([...ingredients, ''])}
        />
        <TextInput
          style={styles.description}
          multiline
          numberOfLines={200}
          editable
          maxLength={900}
          onChangeText={setDescription}
          value={description}
          placeholder="Recipe description"
        />
        <Button title="Save" onPress={onSave} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRecipe;
