/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppsList } from './Records';
import { ChecklistGroupList } from './ChecklistGroups';


const Tab = createMaterialTopTabNavigator();

export const AppTabs = () => {
  return (
    <Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#1C1C1C',
				labelStyle: { fontSize: 12, textTransform: 'none', fontWeight: '700' },
				style: { borderBottomColor: '#1C1C1C' },
			}}
		>
      <Tab.Screen name="Accounts" component={AppsList} />
      <Tab.Screen name="Checklist Groups" component={ChecklistGroupList} />
    </Tab.Navigator>
  );
}