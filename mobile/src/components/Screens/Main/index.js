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
import { View, Text } from 'react-native';
import { main } from '../../../stylesheet/theme';
import Apps from '../Apps';

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
			activeTintColor: '#16325c',
			inactiveTintColor: '#bfcade',
		}}
	>
		<Tab.Screen name="Forms" component={Forms} />
		<Tab.Screen name="Apps" 
			component={Apps} 
			options={{
				tabBarLabel: '',
				tabBarIcon: ({ focused, color, size }) => (
					<View
					style={{
						position: 'absolute',
						bottom: 0, // space from bottombar
						height: 68,
						width: 68,
						borderRadius: 68,
						justifyContent: 'center',
						backgroundColor: focused ? main.highLightColor : main.lightBlueColor,
						shadowColor: '#000',
						alignItems: 'center',
					}}
					>
						<Ionicons name="ios-apps" color={focused ? main.lightBlueColor : main.headerColor} size={38}/>
					</View>
				)
			}}
		/>
		<Tab.Screen name="Responses" component={Responses} />
	</Tab.Navigator>
}

const Main = () => {
	return <Stack.Navigator screenOptions={{headerShown: false}}>
		<Stack.Screen name="Home" component={TabNavigation} />
		<Stack.Screen name="InitResponse" component={InitResponse} />
		<Stack.Screen name="Settings" component={Settings} />
	</Stack.Navigator>
}

export default Main;
