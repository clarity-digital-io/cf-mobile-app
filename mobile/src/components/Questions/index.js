/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { getType } from './types'; 

export const Questions = ({ form }) => {
	const [newForm, setForm] = useState(form);
	console.log('newForm', newForm); 
	return newForm.forms__Questions__r.records.map(question => {

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