import React, { useState, useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'ios') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {

		const options = {
			title: 'Select Avatar',
			customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};
		
		try {
			ImagePicker.launchCamera(options, (response) => {
				// Same code as in above section!
				console.log('response', response); 
			});
			
			// if (!result.cancelled) {
			// 	setImage(result.uri);
			// }
		} catch (error) {
			console.log('error', error); 
		}

  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
