/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RecordGroupContext, FormContext } from '../../Context';
import { Fields } from './Fields';
import { ScrollView } from 'react-native-gesture-handler';
import { RecordGroupProvider } from './provider';

import { NewRecordGroup } from './new';
import { RecordGroups } from './table';

const RecordGroupStack = createStackNavigator();

export const InitRecordGroup = ({ navigation, route }) => {

	return (
		<RecordGroupProvider rgId={route.params.recordGroupId}>
			<RecordGroup />
		</RecordGroupProvider>
	)
	
}

const RecordGroup = ({ navigation, route }) => {

	return (
		<RecordGroupStack.Navigator style={{ backgroundColor: '#fff' }} mode="modal">
			<RecordGroupStack.Screen
				name={'Init Record Group'}
				component={RecordGroups}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#1C1C1C',
					},
					headerTintColor: '#FFF',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					}
				}}
			/>
			<RecordGroupStack.Screen
				name={'NewRecordGroup'}
				component={NewRecordGroup}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#1C1C1C',
					},
					headerTintColor: '#FFF',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					}
				}}
			/>
		</RecordGroupStack.Navigator>
	)
}

