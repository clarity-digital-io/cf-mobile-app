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
import { fieldStyle } from '../../../../stylesheet';
import { Title } from '../../Controls/Title';
import { RecordGroupContext } from '../../../Context';

export const Fields = () => {

	//const { form, activeQuestions, allValidations, errorValidations } = useContext(FormContext); 

	const { fields } = useContext(RecordGroupContext); 
	console.log('fields', fields); 
	return fields.map(question => {
		//let hasValidationError = errorValidations.indexOf(question.Id) > -1 ? true : false;
		return getQuestion(question, false);

	});
	
}

const getQuestion = (question, hasValidationError) => {

	return (
		<View key={question.Title} style={hasValidationError ? fieldStyle.mainError : fieldStyle.main}>
				<Title key={question.Title} title={ question.Title} required={question.Required} />
				<View style={hasValidationError ? fieldStyle.fieldError : fieldStyle.field}>

				{  
					hasValidationError ? 
					<Text style={fieldStyle.error}> This is a required field. </Text> : 
					null 
				}

				{ getType(question, false) }

				</View>
		</View>
	)

}