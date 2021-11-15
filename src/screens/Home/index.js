import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Button,
  FlatList,
  View,
  Text,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ADD_RECIPE_URL} from '../../utils/urls';

import styles from './styles';

const renderCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );
};

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
          <Button
            title="Add recipe"
            accessibilityLabel="Add recipe button"
            onPress={() => navigation.navigate(ADD_RECIPE_URL)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
