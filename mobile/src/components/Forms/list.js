/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useEffect, useCallback } from 'react';
import {Text, FlatList, View, ScrollView, RefreshControl} from 'react-native';
import {useFormsAPI} from '../../api';

import { FormListItem } from './listitem'
import {SearchBar} from 'react-native-elements';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export const FormsList = ({ route, navigation }) => {
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

	const { loading, forms, error } = useFormsAPI(route.key);
	
	const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
	}, [refreshing]);
	
	const formSelected = (form) => {
		navigation.navigate('Form Details', form)
	}

	return (
    <View>
			{
				loading && forms != null && forms.length > 0 ? 
				<Text>Forms Loading...</Text> :
				
				[
					<SearchBar
						placeholder="Search for a form..."
						onChangeText={setQuery}
						value={query}
					/>,
					<ScrollView
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
						}
					>
					<FlatList
						data={forms}
						renderItem={({ item }) => (
							<FormListItem key={item.Name} form={item} onPress={formSelected} />
						)}
					/>
					</ScrollView>

				]
			}
    </View>
  );
}
