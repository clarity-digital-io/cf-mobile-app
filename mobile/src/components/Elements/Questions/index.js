/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { getType } from './types'; 
import { FormContext } from '../../Context';
import { fieldStyle } from '../../../stylesheet';
import { Title } from '../Controls/Title';

export const Questions = () => {

	const { activeQuestions, errors } = useContext(FormContext); 

	return activeQuestions.map(question => {
		let hasValidationError = errors.validations.indexOf(question.Id) > -1 ? true : false;
		return getQuestion(question, hasValidationError);
	})
}

export const MultiQuestions = ({ route }) => {

	const { activeQuestions } = useContext(FormContext); 

	return activeQuestions.map(question => {
		return getQuestion(question);
	})

}

const getQuestion = (question, hasValidationError) => {

	return (
		hasFormLabel(question.Type) ? 
		<View key={question.Title} style={hasValidationError ? fieldStyle.mainFieldError : fieldStyle.main}>
				
				<Title key={question.Title} title={ question.Title} required={question.Required} />
				
				<View style={hasValidationError ? fieldStyle.fieldError : fieldStyle.field}>

					{  
						hasValidationError ? 
						<Text style={fieldStyle.error}> This is a required field. </Text> : 
						null 
					}

					{ getType(question, false) }

				</View>
		</View> :
		getType(question, false)
	)

}

const hasFormLabel = (type) => {

	if(type == 'FreeText') {
			return false; 
	}

	return true;

}