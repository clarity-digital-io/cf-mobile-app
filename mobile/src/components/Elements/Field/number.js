/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { TextInput } from 'react-native';
import { fieldStyle } from '../../../stylesheet';
import { useOnFieldChange } from '../../Handlers';

export const Number = ({ question, disabled, uuid, isRecordGroup }) => {

	const { value, update } =  useOnFieldChange(question, isRecordGroup, uuid);
	
	return [
		<TextInput
			key={question.Id}
			style={fieldStyle.input}
			disabled={disabled}
			onChangeText={text => update(text.replace(/[^0-9]/g, ''))}
			value={value}
			keyboardType={'numeric'}
		/>
	]

}

