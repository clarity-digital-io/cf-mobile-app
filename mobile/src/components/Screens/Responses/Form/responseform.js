/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import uuid from 'react-native-uuid';
import { NewFormResponse } from './responseaction';

import { PhotoReview } from '../../../Elements/Camera/photoreview';

import { Camera } from '../../../Elements/Camera';
import { ClarityMap } from '../../../Elements/Map';
import { Lookup } from '../../../Elements/Lookup';
import { useResponses } from '../../../../api';

import { useFocusEffect } from '@react-navigation/native';
import ImagePickerExample from '../../../Elements/Camera/expo';

const ResponseFormStack = createStackNavigator();

export const ResponseForm = ({ route, navigation }) => {

	const [form] = useState(route.params.activeForm);
	
	const { loading, error, create } = useResponses();

	const [newUUID] = useState(uuid.v1());

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				create(form.Id, newUUID);
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	/**
	 * A level before this we can have a navigator that holds Connection / New as stacks
	 */
	return (
		<ResponseFormStack.Navigator style={{ backgroundColor: '#fff' }} mode="modal">
			<ResponseFormStack.Screen
				name={form.Title}
				component={NewFormResponse}
				initialParams={route.params}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#f2f5f9',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					}
				}}
			/>
			<ResponseFormStack.Screen
				name={'Camera'}
				component={ImagePickerExample}
				options={{tabBarLabel: false, headerShown: false}}
			/>
			<ResponseFormStack.Screen
				name={'Photo Review'}
				component={PhotoReview}
				options={{tabBarLabel: false, headerShown: false}}
			/>
			<ResponseFormStack.Screen
				name={'Map'}
				component={ClarityMap}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#fff',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerBackTitleVisible: false
				}}
			/>
			<ResponseFormStack.Screen
				name={'Lookup'}
				component={Lookup}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#fff',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerBackTitleVisible: false
				}}
			/>
		</ResponseFormStack.Navigator>
  );
}