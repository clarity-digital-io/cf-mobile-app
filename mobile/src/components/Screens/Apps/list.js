/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback } from 'react';
import {Text, FlatList, View, ScrollView, RefreshControl} from 'react-native';
import {useApps} from '../../../api';

import { AppsListItem } from './listitem'
import { useFocusEffect } from '@react-navigation/native';

export const AppsList = ({ route, navigation }) => {
	
	const { loading, apps, getApps } = useApps();

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				getApps();
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const appSelected = (app) => {
		// setActiveForm(form);
		navigation.navigate('Detail', app)
	}

	const renderItem = ({ item }) => (<AppsListItem key={item.record.Name} app={item} onPress={appSelected} />);
	console.log('ap', apps);
	return (
    <View style={{ backgroundColor: '#fff', flexGrow: 1 }}>
			<View style={{ backgroundColor: '#f2f5f9' }}>
				<Text style={{ backgroundColor: '#fff', color: '#16325c', padding: 12, fontWeight: '500' }}>
					Accounts
				</Text>
			</View>
			<FlatList
				data={apps}
				renderItem={renderItem}
			/>
    </View>
  );
}
