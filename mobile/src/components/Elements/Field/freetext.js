/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';
import { Header } from '../Controls/Header';

export const FreeText = ({ key, question, disabled }) => {
	// return <Text key={key}>
	// 	{ question.forms__Title__c }
	// </Text>

	return <Header key={question.forms__Title__c} title={ question.forms__Title__c} />
	
}