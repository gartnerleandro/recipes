import {useState} from 'react';

export default () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [description, setDescription] = useState('');

  const onEditImage = url => setImage(url);

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
    image,
    title,
    ingredients,
    description,
    onEditImage,
    onEditTitle,
    onAddNewIngredient,
    onRemoveIngredient,
    onEditIngredient,
    onEditDescription,
  };
};
