/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { fieldStyle } from '../../../stylesheet';
import { transform } from '../../../api/helpers';

export const Dropdown = ({ question, disabled }) => {
	
	const [options] = useState(transform(question.Question_Options));

	return [
		<RNPickerSelect
			style={{
				inputIOS: fieldStyle.input,
				padding: 100
			}}
			onValueChange={(value) => console.log(value)}
			items={options.map(option => {
				return {
					label: option.Label, 
					value: option.Id
				}
			})}
		/>
	]
	
}
