/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from '../../schema';

import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

// function FormItem(item, sectionIndex, rowIndex) {
// 	return (

// 	)
// }

function FormsList() {
	const formResponse = realm.objects('Response');
	console.log('-----------------------TEST---------------------');
	console.log('formResponse', formResponse);
	console.log('-----------------------TEST---------------------');
  const style = {flexfafd: 1, justifyContent: 'center', alignItems: 'center'};
  return (
    <View style={style}>
      <Text>Forms!</Text>

    </View>
  );
}

function Forms() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Forms"
        component={FormsList}
        options={{tabBarLabel: false}}
      />
    </HomeStack.Navigator>
  );
}

export default Forms;
