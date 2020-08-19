/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useContext } from 'react';
import { CheckBox } from 'react-native-elements'
import { transform } from '../../../api/helpers';
import { FormContext } from '../../Context';

export const Checkbox = ({ key, question, disabled }) => {

	const [options] = useState(transform(question.Question_Options));
	const { values, update } = useOnChange(question);

	return options.map(option => {
			let checked = values.indexOf(option.Id) >= 0 ? true : false; 
			return (
				<CheckBox
					title={ option.Label }
					checked={checked} 
					iconType='ion'
					containerStyle={{ backgroundColor: checked ? '#85CD8C' : '#fff', borderColor: checked ? '#85CD8C' : '#E7F1F6', borderRadius: 0 }}
					textStyle={{ color: checked ? '#fff' : '#1C1C1C', fontSize: 14, fontWeight: '500' }}
					checkedIcon='check'
					uncheckedIcon='add'
					checkedColor='#fff'
					uncheckedColor='#85CD8C'
					onPress={(e, val) => {
						update(option.Id, !checked); 
					}}
				/>
			)
		})

}

export const useOnChange = (question) => {

	const { responseId, form, answers, setAnswers } = useContext(FormContext); 

	const [values, setValues] = useState(answers.get(question.Id) != null ? answers.get(question.Id) : [])

	const update = (optionId, checked) => {
		setValues(values => {
			if(checked) {
				values = values.concat(optionId); 
			} else {
				values = values.filter(val => optionId != val); 
			}
			return values; 
		})

		setFormAnswer(form.Id, responseId, question, setAnswers, values)
	}

	return { values, update }

}

const setFormAnswer = (formId, responseId, question, setAnswers, values) => {

	setAnswers(answers => {

		answers.set(question.Id,  { formId: formId, answer: values, questionId: question.Id, type: question.forms__Type, responseId: responseId });
		return answers;

	});

}
