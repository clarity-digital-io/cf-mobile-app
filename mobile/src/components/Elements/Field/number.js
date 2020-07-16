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
import { useOnChange } from '../../Handlers/useOnChange';

export const Number = ({ key, question, disabled }) => {

	const { value, update } = useOnChange(question);
	
	return [
		<TextInput
			key={question.Id}
			style={fieldStyle.input}
			onChangeText={text => update(text.replace(/[^0-9]/g, ''))}
			value={value}
			keyboardType={'numeric'}
		/>
	]

}