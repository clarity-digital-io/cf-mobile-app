/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Title } from '../Controls/index';
import { TextInputStyling } from '../Stylesheet';

export const Dropdown = ({ question, disabled }) => {
	
	return [
		<Title key={question.forms__Title__c} title={ question.forms__Title__c} />,
		<RNPickerSelect
			style={{
				inputIOS: TextInputStyling
			}}
			onValueChange={(value) => console.log(value)}
			items={[
					{ label: 'Football', value: 'football' },
					{ label: 'Baseball', value: 'baseball' },
					{ label: 'Hockey', value: 'hockey' },
			]}
		/>
	]
	
}
