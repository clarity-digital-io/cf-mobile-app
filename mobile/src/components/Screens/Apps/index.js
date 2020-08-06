/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { AppsList } from './list';
import { Detail } from './Detail';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack = createStackNavigator();


/**
 * Checklist by Asset/Account Holder
 */


function Apps() {
	
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Apps"
        component={AppsList}
        options={({ navigation, route }) => ({
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
						return <Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.navigate('Settings')} name={"ios-settings"} color={'#16325c'} />
					},
					headerRight: props => {
						return <Ionicons style={{ marginRight: 16, marginTop: 2 }} size={22} onPress={() => console.log('search')} name={"ios-search"} color={'#16325c'} />
					}
				})}
      />
			<AppStack.Screen
        name="Detail"
        component={Detail}
        options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#f2f5f9',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerBackTitleVisible: false
				}}
      />
    </AppStack.Navigator>
  );
}

export default Apps;
