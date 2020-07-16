/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { FormContext } from '../../Context';
import { fieldStyle } from '../../../stylesheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const GeoLocation = ({ question }) => {

	const { navigation } = useContext(FormContext); 

	const takeLocation = () => {
		navigation.navigate('Map', question)
	}

	return (
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
		<Ionicons style={{ marginRight: 14 }} size={32} onPress={takeLocation} name={"ios-map"} color={'#f2f5f9'} />
		<Text style={{ color: '#16325c' }}>Select Location</Text>
		</View>
	)

}
