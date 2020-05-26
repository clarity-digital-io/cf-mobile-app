/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { ResponsesList } from './list';

const ResponseStack = createStackNavigator();

function Responses() {
  return (
    <ResponseStack.Navigator>
      <ResponseStack.Screen
        name="Responses"
        component={ResponsesList}
        options={{tabBarLabel: false}}
      />
    </ResponseStack.Navigator>
  );
}

export default Responses;
