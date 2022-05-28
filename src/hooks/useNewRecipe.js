import {useState} from 'react';

export default () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [description, setDescription] = useState('');

  const onEditTitle = text => setTitle(text);

  const onAddNewIngredient = () => setIngredients([...ingredients, '']);

  const onRemoveIngredient = index => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const onEditIngredient = (index, text) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = text;

    setIngredients(newIngredients);
  };

  const onEditDescription = text => setDescription(text);

  return {
    title,
    ingredients,
    description,
    onEditTitle,
    onAddNewIngredient,
    onRemoveIngredient,
    onEditIngredient,
    onEditDescription,
  };
};
