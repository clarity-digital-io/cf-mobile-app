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

export const Title = ({ title, required }) => {

	return	<View style={ required ? fieldStyle.titleContainerRequired : fieldStyle.titleContainer }>
		<Text style={required ? fieldStyle.requiredTitle : fieldStyle.title  }>
			{ title } 
		</Text>
	</View>

}

export const ConnectionTitle = ({ title }) => {

	return	<View style={ fieldStyle.connectionTitleContainer }>
		<Text style={ fieldStyle.connectionTitle  }>
			{ title } 
		</Text>
	</View>

}


