/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SettingsList } from './list';
import { SyncDetails } from './Sync';

const SettingsStack = createStackNavigator();

const Settings = () => {
	return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsList}
        options={( {navigation, route} ) => ({
						tabBarLabel: false, 
						headerStyle: {
							backgroundColor: '#f2f5f9',
						},
						headerTintColor: '#16325c',
						headerTitleStyle: {
							fontWeight: '500',
							fontSize: 14
						},
						headerLeft: props => {
							return <Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#16325c'} />
						}
				})}
      />
			<SettingsStack.Screen
        name="Salesforce Records Sync Settings"
        component={SyncDetails}
        options={( {navigation, route} ) => ({
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#f2f5f9',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerLeft: props => {
						return <Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#16325c'} />
					}
				})}
      />
    </SettingsStack.Navigator>
	);
	
}

export default Settings;
