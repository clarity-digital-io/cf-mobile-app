/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native';
import { Title } from '../Controls/index';
import { TextInputStyling } from '../Stylesheet';
import { FormContext } from '../../Context';

export const InputField = ({ question, disabled }) => {

	const { value, update } = useOnChange(question);
	
	return [
		<Title key={question.forms__Title__c} title={ question.forms__Title__c} />,
		<TextInput
			key={question.Id}
			style={TextInputStyling}
			onChangeText={text => update(text)}
			value={value}
		/>
	]
	
}

export const useOnChange = (question) => {

	const { responseId, form, answers, setAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(answers.get(question.Id) != null ? answers.get(question.Id) : '')

	const update = (text) => {

		setFormAnswer(form.form.Id, responseId, question, setAnswers, text);
		setValue(text); 

	}

	return { value, update }

}


const setFormAnswer = (formId, responseId, question, setAnswers, text) => {

	setAnswers(answers => {

		answers.set(question.Id,  { formId: formId, answer: text, questionId: question.Id, type: question.forms__Type__c, responseId: responseId });
		return answers;

	});

}
