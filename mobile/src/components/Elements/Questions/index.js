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
import { fieldStyle } from '../Stylesheet';
import { Title } from '../Controls/Title';

export const Questions = () => {

	const { form, activeQuestions, allValidations, errorValidations } = useContext(FormContext); 

	return activeQuestions.map(question => {
		let hasValidationError = errorValidations.indexOf(question.Id) > -1 ? true : false;
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
		hasFormLabel(question.Type__c) ? 
		<View key={question.Title__c} style={hasValidationError ? fieldStyle.mainError : fieldStyle.main}>
				<Title key={question.Title__c} title={ question.Title__c} required={question.Required__c} />
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

	if(type == 'RecordGroup' || type == 'FreeText') {
			return false; 
	}

	return true;

}