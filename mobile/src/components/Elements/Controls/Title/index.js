/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { fieldStyle } from '../../Stylesheet';

export const Title = ({ title, required }) => {

	return	<View style={ required ? fieldStyle.titleContainerRequired : fieldStyle.titleContainer }>
		<Text style={fieldStyle.title}>
			{ required ? <Text style={{ color: '#fc5c65', fontWeight: '700' }}>*</Text> : null } { title } 
		</Text>
	</View>

}


