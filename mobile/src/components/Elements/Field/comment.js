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

export const Comment = ({ question, disabled, uuid, isRecordGroup }) => {

	const { value, update } =  useOnFieldChange(question, isRecordGroup, uuid);
	
	return [
		<TextInput
			key={question.Id}
			style={fieldStyle.input}
			onChangeText={text => update(text)}
			value={value}
			multiline={true}
		/>
	]
	
}
