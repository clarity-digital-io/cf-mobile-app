import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import {useApps} from '../../../../api';

import { GroupListItem } from './listitem'
import { useFocusEffect } from '@react-navigation/native';

export const ChecklistGroupList = ({ route, navigation }) => {
	
	const { loading, groups, getGroups } = useApps();

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				getGroups();
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const groupSelected = (app) => {
		// setActiveForm(form);
		//navigation.navigate('Detail', app)
	}

	const renderItem = ({ item }) => (<GroupListItem key={item.Id} group={item} onPress={groupSelected} />);

	return (
    <View style={{ backgroundColor: '#F8F8F8', flexGrow: 1 }}>
			<FlatList
				data={groups}
				renderItem={renderItem}
			/>
    </View>
  );
}
