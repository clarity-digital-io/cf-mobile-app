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
import { FormDetail } from './formdetail';

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
						backgroundColor: '#f2f5f9',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					},
					headerLeft: props => {
						console.log('navigate', props); 
						return <Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.navigate('Settings')} name={"ios-settings"} color={'#16325c'} />
					}
					
				})}
      />
			<FormStack.Screen
        name="Form Details"
        component={FormDetail}
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
    </FormStack.Navigator>
  );
}

export default Forms;
