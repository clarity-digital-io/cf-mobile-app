/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { FormsList } from './list';
import { Detail } from './detail';

import Ionicons from 'react-native-vector-icons/Ionicons';

const FormStack = createStackNavigator();

function Forms() {
	
  return (
    <FormStack.Navigator>
      <FormStack.Screen
        name="Forms"
        component={FormsList}
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
					}
				})}
      />
			<FormStack.Screen
        name="Detail"
        component={Detail}
        options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#1C1C1C',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerBackTitleVisible: false
				}}
      />
    </FormStack.Navigator>
  );
}

export default Forms;
