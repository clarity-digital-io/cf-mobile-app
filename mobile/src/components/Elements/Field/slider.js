/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Slider from '@react-native-community/slider';

import { Title } from '../Controls/Title';
import { fieldStyle } from '../Stylesheet';

export const ClaritySlider = ({ question, disabled }) => {
	
	return [
		<Title key={question.forms__Title__c} title={ question.forms__Title__c} />,
		<Slider
			key={question.Id}
			style={fieldStyle.slider}
			minimumValue={0}
			maximumValue={1}
		/>
	]
	
}

