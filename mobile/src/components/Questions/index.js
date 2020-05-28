/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { getType } from './types'; 
import { FormContext } from '../Context';

export const Questions = () => {

	const { form, questions } = useContext(FormContext); 
	console.log('questions', questions); 
	return questions.map(question => {

			return (            
				
				getType(question, false)
				
			)
	})
}

export const MultiQuestions = ({ route }) => {

	const [form, setForm] = useState(route.params);

	return form.forms__Questions__r.records.map(question => {
			return getType(question, false)
	})

}

const hasFormLabel = (type) => {

	if(type == 'RecordGroup' || type == 'FreeText') {
			return false; 
	}

	return true;

}