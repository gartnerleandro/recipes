import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {RECIPE_URL, ADD_RECIPE_URL} from '../../utils/urls';

import styles from './styles';

const Home = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    setLoading(true);

    AsyncStorage.getAllKeys().then(keys => {
      if (keys.length) {
        AsyncStorage.multiGet(keys).then(allElements => {
          const allRecipes = allElements.reduce((acc, current) => {
            acc.push(JSON.parse(current[1]));
            return acc;
          }, []);
          setRecipes(allRecipes);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });
  };

  const renderCard = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate(RECIPE_URL, {recipe: item})}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={recipes}
        extraData={loading}
        keyExtractor={item => item.title}
        renderItem={renderCard}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getRecipes} />
        }
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <TouchableOpacity
            accessibilityLabel="Add recipe button"
            style={styles.button}
            onPress={() => navigation.navigate(ADD_RECIPE_URL)}>
            <Text style={styles.buttonText}>Add recipe</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
