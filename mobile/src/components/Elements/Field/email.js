/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';

export const Email = ({ key, question, disabled }) => {
	return <Text key={key}>
		{ question.forms__Title__c }
	</Text>
}