/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState, useContext } from 'react';
import { FormContext } from '../../Context';

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