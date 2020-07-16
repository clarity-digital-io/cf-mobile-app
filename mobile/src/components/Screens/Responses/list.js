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
	const { loading, responses, error, getResponses } = useResponses();

	const responseSelected = (response) => {
		navigation.navigate('InitResponse', { formId: response.Form, new: false, responseId: response.UUID })
	}

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				getResponses();
	
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
				<SearchBar
					placeholder="Search for a response..."
					onChangeText={setQuery}
					value={query}
					containerStyle={{ height: 58, backgroundColor: '#fff', borderBottomColor: '#f2f5f9', borderTopColor: '#f2f5f9' }}
					inputContainerStyle={{ height: 40, backgroundColor: '#f2f5f9' }}
					inputStyle={{ fontSize: 16, color: '#16325c' }}
				/>,
				<FlatList
					data={responses}
					renderItem={({ item }) => (
						<ResponseListItem key={item.Name} response={item} onPress={responseSelected} />
					)}
				/>
			]
		}
		</View>
  );
}