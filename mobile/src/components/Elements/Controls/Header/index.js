/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { fieldStyle } from '../../../../stylesheet';

export const Header = ({ title }) => {

	return <View style={fieldStyle.headerContainer}>
		<Text style={fieldStyle.header}>
			{ title }
		</Text>
	</View>
}


