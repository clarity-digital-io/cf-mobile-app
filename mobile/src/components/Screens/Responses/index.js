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

import { ResponsesList } from './list';

const ResponseStack = createStackNavigator();

function Responses() {
  return (
    <ResponseStack.Navigator>
      <ResponseStack.Screen
        name="Responses"
        component={ResponsesList}
        options={({ navigation, route }) => (
					{
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
						}
					}
				)}
      />
    </ResponseStack.Navigator>
  );
}

export default Responses;
