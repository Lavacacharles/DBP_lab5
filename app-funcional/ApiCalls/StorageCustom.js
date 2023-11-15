import { StyleSheet, View, Button, Image } from 'react-native';
import { useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker'; //expo install expo-camera & expo install expo-image-picker

export default function CustomSaveImg() {
  
  const [image, setImage] = useState(null);


  const [imageSelected, setImageSelected] = useState(false);
  
  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.canceled) {
      // Subir la imagen a Cloudinary o cualquier otro servicio en la nube
      const formData = new FormData();
      formData.append('file', {
        uri: result.assets[0].uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
    
      const cloudinaryCloudName = 'dpx36s0p2';
      const cloudinaryUploadPreset = 'zyxykd0n';
      const cloudinaryApiKey = '556753495615669';

      const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload?upload_preset=${cloudinaryUploadPreset}&api_key=${cloudinaryApiKey}`;

      fetch(cloudinaryUploadUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => response.json())
        .then(responseData => {
          console.log('Imagen subida con éxito a Cloudinary:', responseData);
        })
        .catch(error => {
          console.error('Error al subir la imagen a Cloudinary:', error);
        });

      setImage(result.assets[0].uri);
      setImageSelected(true);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={openCamera} title="Open Camera" color="green" />
      <View style={{ margin: 20}}>
        {imageSelected && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  }
});