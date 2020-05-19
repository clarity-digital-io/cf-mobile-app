/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useState } from 'react';
import {Text, Button, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

const FormResponseStack = createStackNavigator();

export const FormResponse = ({ route, navigation }) => {
	console.log('main', route, navigation);
  return (
    <FormResponseStack.Navigator>
			<FormResponseStack.Screen
        name={route.params.form.Name}
        component={NewFormResponse}
				options={{tabBarLabel: false}}
				initialParams={route.params}
      />
    </FormResponseStack.Navigator>
  );
}

const NewFormResponse = ({ route, navigation }) => {
	console.log('new form response',  route, navigation); 
	const [form, setForm] = useState(route.params);

	return <Questions questions={form.questions} />

}

const Questions = ({ questions }) => {
	return questions.map(question => {
		return <Text key={question.Id}>
			{ question.forms__Title__c }
		</Text>
	})
}