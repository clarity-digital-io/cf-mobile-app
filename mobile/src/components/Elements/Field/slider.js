/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Slider from '@react-native-community/slider';

import { fieldStyle } from '../../../stylesheet';

export const ClaritySlider = ({ question, disabled }) => {
	
	return [
		<Slider
			key={question.Id}
			style={fieldStyle.slider}
			minimumValue={0}
			maximumValue={1}
		/>
	]
	
}

