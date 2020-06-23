/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { TextInput } from 'react-native';
import { fieldStyle } from '../Stylesheet';
import { useOnChange } from '../../Handlers/useOnChange';

export const Email = ({ key, question, disabled }) => {

	const { value, update } = useOnChange(question);
	
	return [
		<TextInput
			key={question.Id}
			style={fieldStyle.input}
			onChangeText={text => update(text)}
			value={value}
		/>
	]

}