/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useCallback, useState } from 'react';
import {Text, FlatList, View, ScrollView, RefreshControl} from 'react-native';
import {SearchBar} from 'react-native-elements';

import {useResponsesAPI} from '../../api';

import { ResponseListItem } from './listitem.js'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export const ResponsesList = ({ route, navigation }) => {
  const [query, setQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
	const { loading, responses, error } = useResponsesAPI(route.key);

	const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
	}, [refreshing]);

	const responseSelected = (response) => {
		navigation.navigate('Response Details', response)
	}

	return (
    <View style={{ backgroundColor: '#fff' }}>
		{
			loading && responses != null && responses.length > 0 ? 
			<Text>Responses Loading...</Text> :

			[
				<ScrollView
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
					<SearchBar
						placeholder="Search for a form..."
						onChangeText={setQuery}
						value={query}
						containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#f5f5f5', borderTopColor: '#f5f5f5' }}
						inputContainerStyle={{ backgroundColor: '#f5f5f5' }}
					/>
					<FlatList
						data={responses}
						renderItem={({ item }) => (
							<ResponseListItem key={item.Name} response={item} onPress={responseSelected} />
						)}
					/>
				</ScrollView>

			]
		}
		</View>
  );
}