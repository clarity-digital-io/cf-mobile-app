/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useEffect, useCallback } from 'react';
import {Text, FlatList, View, ScrollView, RefreshControl} from 'react-native';
import {useForms} from '../../../api';

import { FormListItem } from './listitem'
import {SearchBar} from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export const FormsList = ({ route, navigation }) => {
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
	
	const { loading, forms, setActiveForm, execute } = useForms(route.key);

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				execute();
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
	}, [refreshing]);

	const formSelected = (form) => {
		setActiveForm(form);
		navigation.navigate('Form Details', form)
	}

	const renderItem = ({ item }) => (<FormListItem key={item.Name} form={item} onPress={formSelected} />);

	return (
    <View style={{ backgroundColor: '#fff', flexGrow: 1 }}>
			{
				loading && forms != null && forms.length > 0 ? 
				<Text>Forms Loading...</Text> :
				
				[
					<ScrollView
					style={{flex: 1}}
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
						}
					>
						<SearchBar
							placeholder="Search for a form..."
							onChangeText={setQuery}
							value={query}
							containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#f2f5f9', borderTopColor: '#f2f5f9' }}
							inputContainerStyle={{ backgroundColor: '#fff' }}
						/>
						<FlatList
							data={forms}
							renderItem={renderItem}
						/>
					</ScrollView>
				]
			}
    </View>
  );
}
