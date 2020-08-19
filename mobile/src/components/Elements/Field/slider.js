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
import { useOnFieldChange } from '../../Handlers';

export const ClaritySlider = ({  question, disabled, uuid, isRecordGroup }) => {
	
	const { value, update } =  useOnFieldChange(question, isRecordGroup, uuid);

	return [
		<Slider
			key={question.Id}
			disabled={disabled}
			style={fieldStyle.slider}
			minimumValue={0}
			maximumValue={1}
		/>
	]
	
}

