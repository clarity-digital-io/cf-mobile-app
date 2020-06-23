/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { FormContext } from '../Context';

export const useOnChange = (question) => {

	const { responseId, form, answers, setAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(answers.get(question.Id) != null ? answers.get(question.Id) : '')

	const update = (text) => {

		setFormAnswer(form.Id, responseId, question, setAnswers, text);
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
