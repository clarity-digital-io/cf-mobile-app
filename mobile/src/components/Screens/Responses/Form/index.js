/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import { NewResponseConnection } from '../Connection';
import { main } from '../../../../stylesheet/theme';

import { ResponseProvider } from './responseprovider';
import uuid from 'react-native-uuid';
import { InitRecordGroup } from '../../../Elements/RecordGroup';
import { ResponseForm } from './responseform';
import { FormContext } from '../../../Context';

const ResponseStack = createStackNavigator();

export const InitResponse = ({ route, navigation }) => {

	const [formId] = useState(route.params.formId);

	const [responseUUID] = useState( route.params.new ? uuid.v1() : route.params.responseId );

	return (
		<ResponseProvider responseUUID={responseUUID} newFormId={formId} newNavigation={navigation} isNew={route.params.new}>
			<ResponseNavigation route={route} />
		</ResponseProvider>
	)
}


export const ResponseNavigation = ({ route }) => {

	const { initialRouteName } = useContext(FormContext); 

	return <ResponseStack.Navigator initialRouteName={initialRouteName}>
		<ResponseStack.Screen 
			name="Response Connection" 
			component={NewResponseConnection} 
			options={( {navigation, route} ) => ({
				tabBarLabel: false, 
				headerStyle: {
					backgroundColor: '#f2f5f9',
				},
				headerTintColor: '#16325c',
				headerTitleStyle: {
					fontWeight: '500',
					fontSize: 14
				}
			})}
		/> 
		<ResponseStack.Screen 
			name="Response" 
			component={ResponseForm} 
			options={() => ({
				headerShown: false
			})}
		/>
		<ResponseStack.Screen
				name={'RecordGroup'}
				component={InitRecordGroup}
				options={() => ({
					headerShown: false
				})}
			/>
	</ResponseStack.Navigator>

}
