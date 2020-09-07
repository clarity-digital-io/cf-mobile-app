/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { FormContext } from '../../Context';
import uuid from 'react-native-uuid';

export const useOnSelectChange = (question) => {

	const { responseId, answers, setAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(answers.has(question.Id) ? answers.get(question.Id).answer : '')

	const update = (option) => {

		setFormAnswer(responseId, question, setAnswers, option);
		setValue(option); 

	}

	return { value, update, answers }

}

const setFormAnswer = (responseId, question, setAnswers, option) => {

	const newUUID = uuid.v1();

	setAnswers(answers => {
		if(answers.has(question.Id)) {
			let answer = answers.get(question.Id); 
			answers.set(question.Id, { ...answer, answer: option });
		} else {
			answers.set(question.Id,  { answer: option, uuid: newUUID, questionId: question.Id, type: question.Type, responseId: responseId });
		}

		return answers;

	});
	
}