/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { FormContext, AppContext } from '../../Context';
import uuid from 'react-native-uuid';

export const useOnChange = (question) => {

	const { responseId, answers, setAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(answers.has(question.Id) ? answers.get(question.Id).answer : '')

	const update = (text) => {

		setFormAnswer(responseId, question, setAnswers, text);
		setValue(text); 

	}

	return { value, update }

}

const setFormAnswer = (responseId, question, setAnswers, text) => {

	const newUUID = uuid.v1();

	setAnswers(answers => {

		if(answers.has(question.Id)) {
			let answer = answers.get(question.Id); 
			answers.set(question.Id, { ...answer, answer: text });
		} else {
			answers.set(question.Id,  { answer: text, uuid: newUUID, questionId: question.Id, type: question.Type, responseId: responseId });
		}

		return answers;

	});
	
}