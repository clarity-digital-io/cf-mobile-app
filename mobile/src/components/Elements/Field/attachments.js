/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { View, Button, StyleSheet, Image} from 'react-native';
import { Title } from '../Controls/Title';
import { FormContext } from '../../Context';

export const Attachments = ({ question }) => {

	const { navigation, images } = useContext(FormContext); 

	const takePicture = () => {
		navigation.navigate('Camera', question)
	}

	return [
		<Title key={question.forms__Title__c} title={ question.forms__Title__c} />,
		<Button onPress={takePicture} title="Take a Picture" />,
		<View style={styles.container}>
			{
				images.has(question.Id) ?
					images.get(question.Id).map(imgURI => {
						return (
							<Image
								source={{ uri: imgURI }}
								style={{ width:100, height: 100, margin: 10 }}
								resizeMode="cover"
							/>
						)
					}) :
					null
			}

		</View>
	]

}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'row',
    alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 10
  },
});