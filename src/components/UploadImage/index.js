import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import useStorage from '../../hooks/useStorage';

import styles from './styles';

export default ({currentImage, onUpload}) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const {uploadImage, getImageUrl} = useStorage();

  useEffect(() => {
    if (currentImage) {
      setImage(currentImage);
    }
  }, [currentImage]);

  useEffect(() => {
    if (previewImage?.uri) {
      setUploading(true);
      uploadImage(previewImage)
        .then(() => {
          getImageUrl(previewImage.fileName).then(url => {
            onUpload(url);
            setUploading(false);
            setPreviewImage(null);
            setImage(url);
          });
        })
        .catch(e => {
          console.error(e);
          setUploading(false);
          setPreviewImage(null);
        });
    }
  }, [previewImage, onUpload, getImageUrl, uploadImage]);

  const handleImagePicker = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {
          uri: response.assets[0].uri,
          fileName: response.assets[0].fileName,
        };
        setPreviewImage(source);
      }
    });
  };

  if (uploading) {
    return <Text>Uploading...</Text>;
  }

  return !previewImage?.uri && !image ? (
    <TouchableOpacity onPress={handleImagePicker}>
      <Text>Upload image</Text>
    </TouchableOpacity>
  ) : (
    <Image
      resizeMode="cover"
      style={styles.image}
      source={{
        uri: previewImage?.uri || image,
      }}
    />
  );
};
