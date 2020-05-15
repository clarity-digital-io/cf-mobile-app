/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Forms from '../Forms/index';
import Responses from '../Responses/index';
import Settings from '../Settings/index';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Forms" component={Forms} />
        <Tab.Screen name="Responses" component={Responses} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}

export default Navigation;
