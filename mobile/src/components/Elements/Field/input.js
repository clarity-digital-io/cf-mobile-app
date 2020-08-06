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
import { useOnChange, useOnChangeRG } from '../../Handlers/useOnChange';

export const InputField = ({ question, disabled, uuid }) => {

	const { value, update } = question.Record_Group ? useOnChangeRG(question) : useOnChange(question);
	
	return [
		<TextInput
			key={question.Id}
			style={fieldStyle.input}
			onChangeText={text => update(text)}
			value={value}
		/>
	]
	
}
