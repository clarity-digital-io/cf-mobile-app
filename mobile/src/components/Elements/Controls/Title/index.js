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

export const Title = ({ title }) => {

	return	<View style={fieldStyle.container}>
		<Text style={fieldStyle.title}>
				{ title }
		</Text>
	</View>

}


