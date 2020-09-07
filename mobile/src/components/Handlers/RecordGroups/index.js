/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState, useContext } from 'react';
import { RecordGroupContext } from '../../Context';

export const useOnChangeRG = (question) => {

	const { answers, setAnswers, setTable, index } = useContext(RecordGroupContext);

	const [value, setValue] = useState(answers.has(question.Id) ? answers.get(question.Id) :'')

	const update = (text) => {

		// setAnswers(answers => {

		// 	if(answers.has(index)) {
		// 		let fieldValue = answers.get(index) ;
		// 		fieldValue.set(question.Id, text);
		// 		answers.set(index, fieldValue);
		// 	} else {
		// 		let fieldValue = new Map(); 
		// 		fieldValue.set(question.Id, text); 
		// 		answers.set(index, fieldValue); 
		// 	}

		// 	return answers;
		// })

		// setTable(table => {
		// 	table.set(index, value);
		// 	return table; 
		// })
		setValue(text); 

	}

	return { value, update }

}

// setRecordGroupAnswers(answers => {

// 	if(answers.has(question.Record_Group)) {

// 		let recordGroupAnswers = answers.get(question.Record_Group);
// 		let recordGroupAnswer = {};
// 		recordGroupAnswer[question.Title] = text; 
// 		answers.set(question.Record_Group, recordGroupAnswers.concat(recordGroupAnswer));

// 	} else {
// 		let recordGroupAnswer = {};
// 		recordGroupAnswer[question.Title] = text;
// 		answers.set(question.Record_Group, [recordGroupAnswer]);
// 	}

// 	return answers;

// });