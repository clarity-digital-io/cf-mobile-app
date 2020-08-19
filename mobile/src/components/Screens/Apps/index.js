/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { AppTabs } from './tabs';
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
        component={AppTabs}
        options={({ navigation, route }) => ({
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#FFF',
					},
					headerTintColor: '#1C1C1C',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerLeft: props => {
						return <Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.navigate('Settings')} name={"ios-settings"} color={'#1C1C1C'} />
					},
					headerRight: props => {
						return <Ionicons style={{ marginRight: 16, marginTop: 2 }} size={22} onPress={() => console.log('search')} name={"ios-search"} color={'#1C1C1C'} />
					}
				})}
      />
			<AppStack.Screen
        name="Detail"
        component={Detail}
        options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#1C1C1C',
					},
					headerTintColor: '#FFF',
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
