import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import {useApps} from '../../../../api';

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

	return (
    <View style={{ backgroundColor: '#F8F8F8', flexGrow: 1 }}>
			<FlatList
				data={apps}
				renderItem={renderItem}
			/>
    </View>
  );
}
