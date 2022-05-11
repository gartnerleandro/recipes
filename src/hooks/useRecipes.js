import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () =>
    AsyncStorage.getAllKeys().then(keys => {
      if (keys.length) {
        AsyncStorage.multiGet(keys).then(allElements => {
          const allRecipes = allElements.reduce((acc, current) => {
            acc.push(JSON.parse(current[1]));
            return acc;
          }, []);

          setRecipes(allRecipes);
        });
      }

      setLoading(false);
    });

  const addRecipe = recipe =>
    new Promise((resolve, reject) => {
      const key = `${recipe.title.trim().replace(' ', '-')}`;

      AsyncStorage.setItem(
        key,
        JSON.stringify({
          id: Date.now(),
          ...recipe,
        }),
      )
        .then(() => {
          setRecipes([...recipes, recipe]);
          resolve();
        })
        .catch(err => reject(err));
    });

  return {recipes, loading, getRecipes, addRecipe};
};
