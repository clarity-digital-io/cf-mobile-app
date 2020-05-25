/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { ViewTitleStyling, TextTitleStyling } from '../Stylesheet';

export const Title = ({ title }) => {

	return	<View style={ViewTitleStyling}>
		<Text style={TextTitleStyling}>
				{ title }
		</Text>
	</View>

}


