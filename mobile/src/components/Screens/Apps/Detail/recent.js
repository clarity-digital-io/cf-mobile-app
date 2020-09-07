/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback } from 'react';
import { Text, View, FlatList } from 'react-native';
import { RecentItem } from './recentlistitem';
import { useChecklist } from '../../../../api/checklists';

import { useFocusEffect } from '@react-navigation/native';

export const Recent = ({ route, navigation }) => {

	const { loading, checklists, getChecklists } = useChecklist('Account', route.params.record.Id);

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				getChecklists();
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const checklistSelected = () => {

	}
	
	const renderItem = ({ item }) => (<RecentItem key={item.Name} recent={item} onPress={checklistSelected} />);

	return [
		<View style={{ borderRadius: 14, margin: 8, marginTop: 4,  marginBottom: 0, padding: 14, borderLeftWidth: 0, borderRightWidth: 0 }}>
			<Text style={{ color: '#1C1C1C', fontWeight: '700', fontSize: 12 }}>Recent</Text>
		</View>,
		<FlatList data={checklists} renderItem={renderItem} />
	]

}
