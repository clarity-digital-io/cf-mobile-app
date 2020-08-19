/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState, useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { NewResponseConnection } from '../Connection';
import { main } from '../../../../stylesheet/theme';

import { ResponseProvider } from './responseprovider';
import uuid from 'react-native-uuid';
import { InitRecordGroup } from '../../../Elements/RecordGroup';
import { ResponseForm } from './responseform';
import { FormContext } from '../../../Context';
import { useForm } from '../../../../api';

const ResponseStack = createStackNavigator();

export const InitResponse = ({ route, navigation }) => {

	const { getForm } = useForm(); 

	const [formId] = useState(route.params.formId);

	const [form, setForm] = useState(null); 

	useEffect(() => {

		if(form == null) {

			if(formId) {
				let newForm = getForm(`Id = "${route.params.formId}"`);
				setForm(newForm);
			} 

		}

	}, [formId]);

	const [responseUUID] = useState( route.params.new ? uuid.v1() : route.params.responseId );

	return (
		form ? 
		<ResponseProvider responseUUID={responseUUID} form={form} newFormId={formId} newNavigation={navigation} isNew={route.params.new}>
			<ResponseNavigation route={route} />
		</ResponseProvider> :
		<View style={{ backgroundColor: '#1c1c1c', flex: 1 }}>
			<ActivityIndicator size="large" color={'#fff'} />
		</View>
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
					backgroundColor: '#1c1c1c',
				},
				headerTintColor: '#fff',
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
