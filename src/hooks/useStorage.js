import {Platform} from 'react-native';
import storage from '@react-native-firebase/storage';

export default () => {
  const uploadImage = image => {
    const {uri, fileName} = image;
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    return storage().ref(`images/${fileName}`).putFile(uploadUri);
  };

  const getImageUrl = image => {
    return storage().ref(`images/${image}`).getDownloadURL();
  };

  return {uploadImage, getImageUrl};
};
