/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, ActivityIndicator, StyleSheet, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { NewResponseConnection } from '../Connection';
import { main } from '../../../../stylesheet/theme';


import { useForm, useResponses } from '../../../../api';
import { ResponseProvider } from './responseprovider';
import uuid from 'react-native-uuid';
import { InitRecordGroup } from '../../../Elements/RecordGroup';
import { ResponseForm } from './responseform';

const ResponseStack = createStackNavigator();

const ResponseLoad = ({ route, navigation }) => {

	const { getForm } = useForm();

	const [loading, setLoading] = useState(true); 

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				prepare();
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const prepare = () => {
		let form = getForm(`Id = "${route.params.formId}"`);
		if(form.Form_Connections.length > 0 && route.params.new) {
			navigation.navigate('Response Connection', { form: form, new: true })
		} else {
			navigation.navigate('Response', { form: form, new: route.params.new, responseId: !route.params.new ? route.params.responseId : null })
		}
	}

	return <View style={[styles.container, styles.horizontal]}>
		{
			loading ? 
			<ActivityIndicator size="large" color={main.headerColor} /> : 
			<Text>Loading</Text>
		}
		</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		justifyContent: "center",
		backgroundColor: main.lightBlueColor
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export const InitResponse = ({ route, navigation }) => {
	console.log('InitResponse', route.params);
	const [formId] = useState(route.params.formId);
	console.log('formId', formId);
	const { loading, error, create } = useResponses();

	const [responseUUID] = useState( route.params.new ? uuid.v1() : route.params.responseId );

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				create(route.params.new, formId, responseUUID);
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	return (
		<ResponseProvider newResponseId={responseUUID} newFormId={formId} newNavigation={navigation}>
			<ResponseNavigation route={route} />
		</ResponseProvider>
	)
}


export const ResponseNavigation = ({ route }) => {

	return <ResponseStack.Navigator>
		{/* <ResponseStack.Screen 
			name="Response Load" 
			initialParams={route.params}
			component={ResponseLoad} 
			options={() => ({
				headerShown: false
			})}
		/>
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
		/> */}
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
