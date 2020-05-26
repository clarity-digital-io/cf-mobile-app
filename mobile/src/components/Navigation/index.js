/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Forms from '../Forms/index';
import Responses from '../Responses/index';
import Settings from '../Settings/index';
import { FormResponse } from '../Forms/response';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigation() {
	return <Tab.Navigator 
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
		
				if (route.name === 'Forms') {
					iconName = focused ? 'ios-dashboard' : 'ios-document-text-outline';
				} else if (route.name === 'Responses') {
					iconName = focused ? 'ios-list' : 'ios-list';
				} else if (route.name === 'Settings') {
					iconName = focused ? 'ios-settings' : 'ios-settings';
				}
		
				// You can return any component that you like here!
				return <Ionicons name={iconName} size={size} color={color} />;
			},
		})}
		tabBarOptions={{
			activeTintColor: '#000',
			inactiveTintColor: 'gray',
		}}
	>
		<Tab.Screen name="Forms" component={Forms} />
		<Tab.Screen name="Responses" component={Responses} />
		<Tab.Screen name="Settings" component={Settings} />
	</Tab.Navigator>
}

function Navigation() {
	return <Stack.Navigator screenOptions={{headerShown: false}}>
		<Stack.Screen name="Home" component={TabNavigation} />
		<Stack.Screen name="Form Response" component={FormResponse} />
		<Stack.Screen name="Settings" component={Settings} />
	</Stack.Navigator>
}

export default Navigation;
