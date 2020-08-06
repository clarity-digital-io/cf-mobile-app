/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { FormContext, AppContext } from '../Context';
import uuid from 'react-native-uuid';

export const useOnChangeRG = (question) => {

	const { responseId, form, recordGroupAnswers, setRecordGroupAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(recordGroupAnswers.get(question.Id) != null ? recordGroupAnswers.get(question.Id) : '')

	const update = (text) => {

		setRecordGroupAnswer(form.Id, responseId, question, setRecordGroupAnswers, text);
		setValue(text); 

	}

	return { value, update }

}

const setRecordGroupAnswer =  (formId, responseId, question, setRecordGroupAnswers, text) => {

	// let test = {
	// 	recordGroupId: [
	// 		{
	// 			id: 0,
	// 			questionId: 'answer',
	// 			questionId2: 'answer'
	// 		},
	// 		{
	// 			id: 1,
	// 			questionId: 'answer',
	// 			questionId2: 'answer'
	// 		}
	// 	]
	// }

	setRecordGroupAnswers(answers => {


		if(answers.has(question.Record_Group)) {

			let recordGroupAnswers = answers.get(question.Record_Group);
			let recordGroupAnswer = {};
			recordGroupAnswer[question.Title] = text; 
			answers.set(question.Record_Group, recordGroupAnswers.concat(recordGroupAnswer));

		} else {
			let recordGroupAnswer = {};
			recordGroupAnswer[question.Title] = text;
			answers.set(question.Record_Group, [recordGroupAnswer]);
		}

		return answers;

	});

}

export const useOnChange = (question) => {

	const { realm } = useContext(AppContext);

	const [newUUID] = useState(uuid.v1());

	const { responseId, form, answers, setAnswers, recordGroupAnswers, setRecordGroupAnswers } = useContext(FormContext); 

	const [value, setValue] = useState(answers.get(question.Id) != null ? answers.get(question.Id) : '')

	const update = (text) => {

		setFormAnswer(form.Id, responseId, question, setAnswers, text);
		setValue(text); 

	}

	return { value, update }

}

const setFormAnswer = (formId, responseId, question, setAnswers, text) => {


	setAnswers(answers => {

		answers.set(question.Id,  { formId: formId, answer: text, questionId: question.Id, type: question.forms__Type, responseId: responseId });
		return answers;

	});

	// try {
		
	// 	realm.write(() => {
	// 		let answer = realm.create('Response', {
	// 			UUID: responseId, 
	// 			Answer: 
	// 			Name: `Response - ${responseId}`,
	// 			Completion: false,
	// 			Status: 'New', 
	// 			Form: formId,
	// 			Question: questionId,
	// 			OwnerId: auth.user_id.split('|')[1],


	// 			UUID = 'string',
	// 			Id = 'string',
	// 			Name = 'string', 
	// 			Answer = 'string',
	// 			Response = 'string',
	// 			ContentDocument = 'string',
	// 			ContentVersion = 'string',
	// 			Date_Answer = 'string',
	// 			Record = 'string',
	// 			Question = 'string'
	// 		});


	// 	});

	// } catch (error) {
	// 	setError(error)
	// }
	
}
// UUID: 'string',
// Id: 'string',
// Name: 'string', 
// Answer: 'string',
// Response: 'string',
// ContentDocument: 'string',
// ContentVersion: 'string',
// Date_Answer: 'string',
// Record: 'string',
// Question: 'string'