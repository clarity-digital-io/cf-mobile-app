/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';

import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FormContext } from '../Context';

export const PhotoReview = ({route}) => {

	const { image, navigation, form } = useContext(FormContext); 

	const approve = () => {
		navigation.navigate(form.Name);
	}
	
	const reject = () => {
		navigation.navigate('Camera');
	}
	
	return (
		<View style={styles.container}>
			<Image
				source={{
						isStatic: true,
						uri: image,
					}}
				style={{
					flex: 1,
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			/>
			<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
				<TouchableOpacity onPress={() => approve()} style={styles.capture}>
					<Text style={{ fontSize: 14 }}> Approve </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => reject()} style={styles.capture}>
					<Text style={{ fontSize: 14 }}> Reject </Text>
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