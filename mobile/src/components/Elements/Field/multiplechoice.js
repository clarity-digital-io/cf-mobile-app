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


export const MultipleChoice = ({ key, question, disabled }) => {

	const [options] = useState(transform(question.Question_Options));
	const { value, update } = useOnChange(question);

	return options.map(option => {
			let checked = option.Id == value ? true : false; 
			return (
				<CheckBox
					title={ option.Label }
					checked={checked} 
					iconType='ion'
					containerStyle={{ backgroundColor: checked ? '#00b388' : '#fff', borderColor: checked ? '#00b388' : '#f2f5f9', borderRadius: 0 }}
					textStyle={{ color: checked ? '#fff' : '#16325c', fontSize: 14, fontWeight: '500' }}
					checkedIcon='check'
					uncheckedIcon='add'
					checkedColor='#fff'
					uncheckedColor='#00b388'
					onPress={(e, val) => {
						update(option.Id, !checked); 
					}}
				/>
			)
	})

}

export const useOnChange = (question) => {

	const { responseId, form, answers, setAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(answers.get(question.Id) != null ? answers.get(question.Id) : '')

	const update = (optionId, checked) => {
		setValue(value => {
			if(checked) {
				value = optionId;
			} else {
				value = '';
			}
			return value; 
		})

		setFormAnswer(form.Id, responseId, question, setAnswers, value)
	}

	return { value, update }

}

const setFormAnswer = (formId, responseId, question, setAnswers, value) => {

	setAnswers(answers => {

		answers.set(question.Id,  { formId: formId, answer: value, questionId: question.Id, type: question.forms__Type, responseId: responseId });
		return answers;

	});

}
