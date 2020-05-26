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

const FormStack = createStackNavigator();

function Forms() {
  return (
    <FormStack.Navigator>
      <FormStack.Screen
        name="Forms"
        component={FormsList}
        options={{tabBarLabel: false}}
      />
			<FormStack.Screen
        name="Form Details"
        component={FormDetail}
        options={{tabBarLabel: false}}
      />
    </FormStack.Navigator>
  );
}

export default Forms;
