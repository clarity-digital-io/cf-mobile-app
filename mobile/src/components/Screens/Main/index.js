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
import { InitResponse } from '../Responses/Form/init';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
	return <Tab.Navigator 
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
		
				if (route.name === 'Forms') {
					iconName = focused ? 'ios-paper' : 'ios-paper';
				} else if (route.name === 'Responses') {
					iconName = focused ? 'ios-list' : 'ios-list';
				} 
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

const Main = () => {
	return <Stack.Navigator screenOptions={{headerShown: false}} mode="modal">
		<Stack.Screen name="Home" component={TabNavigation} />
		<Stack.Screen name="InitResponse" component={InitResponse} />
		<Stack.Screen name="Settings" component={Settings} />
	</Stack.Navigator>
}

export default Main;
