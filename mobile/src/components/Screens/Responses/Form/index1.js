/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback } from 'react';
import uuid from 'react-native-uuid';
import { useResponses } from '../../../../api';

import { useFocusEffect } from '@react-navigation/native';
import { ResponseProvider } from './responseprovider';
import { ResponseForm } from './responseform';

export const ClarityResponse = ({ route, navigation }) => {

	const [form] = useState(route.params.form);
	
	const { loading, error, create } = useResponses();

	const [responseUUID] = useState( route.params.new ? uuid.v1() : route.params.responseId );

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				create(route.params.new, form.Id, responseUUID);
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	/**
	 * A level before this we can have a navigator that holds Connection / New as stacks
	 */
	return (
		<ResponseProvider newResponseId={responseUUID} newForm={form} newNavigation={navigation}>
			<ResponseForm />
		</ResponseProvider>	
  );
}
