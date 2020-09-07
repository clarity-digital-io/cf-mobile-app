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
    <View style={{ backgroundColor: '#F8F8F8', flex: 1  }}>
		{
			loading && responses != null && responses.length > 0 ? 
			<Text>Responses Loading...</Text> :
			[
				<SearchBar
					placeholder="Search for a response..."
					onChangeText={setQuery}
					value={query}
					containerStyle={{ height: 52, backgroundColor: '#fff', borderBottomColor: '#E7F1F6', borderTopColor: '#E7F1F6' }}
					inputContainerStyle={{ height: 34, backgroundColor: '#f8f8f8' }}
					inputStyle={{ fontSize: 14, color: '#1C1C1C' }}
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