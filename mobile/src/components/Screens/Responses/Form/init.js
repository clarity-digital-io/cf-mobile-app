/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NewResponseConnection } from '../Connection';
import { ClarityResponse } from '.';

const ResponseStack = createStackNavigator();

export const InitResponse = ({ route, navigation }) => {
	
	console.log('route.params init person', route.params); 
	//navigation coming from 3 different locations
	// - From Form Detail
	// - From Response List Item
	// - From Deep Link
	//if it has a response-Id then we need to send directly to "Response" no connection required (response/:responseId)
	//if it is a new response then we need to check if its needs a connection (response/new/:formId)
	

	return <ResponseStack.Navigator mode="modal">
		<ResponseStack.Screen 
			name="Response Connection" 
			initialParams={route.params}
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
			component={ClarityResponse} 
			options={() => ({
				headerShown: false
			})}
		/>
	</ResponseStack.Navigator>

}
