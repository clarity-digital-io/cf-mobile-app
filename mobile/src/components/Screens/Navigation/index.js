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

import Forms from '../Forms';
import Responses from '../Responses';
import Settings from '../Settings/index';
import { FormResponse } from '../Responses/Form/response';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigation() {
	return <Tab.Navigator 
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
		
				if (route.name === 'Forms') {
					iconName = focused ? 'ios-paper' : 'ios-paper';
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
			activeTintColor: '#DE3745',
			inactiveTintColor: '#bfcade',
		}}
	>
		<Tab.Screen name="Forms" component={Forms} />
		<Tab.Screen name="Responses" component={Responses} />
	</Tab.Navigator>
}

function Navigation() {
	return <Stack.Navigator screenOptions={{headerShown: false}} mode="modal">
		<Stack.Screen name="Home" component={TabNavigation} />
		<Stack.Screen name="Form Response" component={FormResponse} />
		<Tab.Screen name="Settings" component={Settings} />
	</Stack.Navigator>
}

export default Navigation;
