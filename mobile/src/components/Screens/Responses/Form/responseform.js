/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NewFormResponse } from './responseaction';

import { PhotoReview } from '../../../Elements/Camera/photoreview';

import { ClarityMap } from '../../../Elements/Map';
import { Lookup } from '../../../Elements/Lookup';

import ImagePickerExample from '../../../Elements/Camera/expo';
import { FormContext } from '../../../Context';

const ResponseFormStack = createStackNavigator();

export const ResponseForm = () => {

	const { form } = useContext(FormContext);

	/**
	 * A level before this we can have a navigator that holds Connection / New as stacks
	 */
	return (
		<ResponseFormStack.Navigator style={{ backgroundColor: '#fff' }}>
			<ResponseFormStack.Screen
				name={form.Title}
				component={NewFormResponse}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#1C1C1C',
					},
					headerTintColor: '#fff',
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
					headerTintColor: '#1C1C1C',
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
					headerTintColor: '#1C1C1C',
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

