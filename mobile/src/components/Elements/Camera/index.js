/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { FormContext } from '../../Context';

export const Camera = ({route}) => {

	const { navigation, setImage, setImages } = useContext(FormContext); 

	const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
			const data = await this.camera.takePictureAsync(options);
			
			const { uri, width, height } = data;

			setImages(images => {

				let id = route.params.Id; 
				if(images.has(id)) {
					let currentImages = images.get(id); 
					let updatedImages = currentImages.concat([data.uri]);
					images.set(id, updatedImages);
				} else {
					images.set(id, [data.uri])
				}
				
				return images; 

			});
			setImage(data.uri); 
			navigation.navigate('Photo Review');
    }
	};
	
	return (
		<View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});