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
import { ClarityResponse } from '.';
import { main } from '../../../../stylesheet/theme';


import { useForm } from '../../../../api';

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
			<Text>Test</Text>
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

	return <ResponseStack.Navigator mode="modal">
		<ResponseStack.Screen 
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
