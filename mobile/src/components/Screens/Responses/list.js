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
import { useFocusEffect } from '@react-navigation/native';

import { useResponses } from '../../../api';

import { ResponseListItem } from './listitem.js'

export const ResponsesList = ({ route, navigation }) => {
	const [query, setQuery] = useState('');
	const { loading, responses, error, execute } = useResponses();

	const responseSelected = (response) => {
		console.log('responseId', response.UUID); 
		navigation.navigate('InitResponse', { formId: null, new: false, responseId: response.UUID })
	}

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

	return (
    <View style={{ backgroundColor: '#fff' }}>
		{
			loading && responses != null && responses.length > 0 ? 
			<Text>Responses Loading...</Text> :
			[
				<ScrollView>
					<SearchBar
						placeholder="Search for a response..."
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