import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

const AddRecipe = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSave = () => {
    const key = `${title.trim().replace(' ', '-')}`;

    AsyncStorage.setItem(key, JSON.stringify({title, description})).then(() => {
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TextInput
          style={styles.title}
          onChangeText={setTitle}
          value={title}
          placeholder="Recipe title"
        />
        <TextInput
          style={styles.description}
          multiline
          numberOfLines={20}
          editable
          maxLength={400}
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
