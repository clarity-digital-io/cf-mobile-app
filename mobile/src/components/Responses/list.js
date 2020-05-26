/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect } from 'react';
import {Text, FlatList, View} from 'react-native';

import {useResponsesAPI} from '../../api';

import { ResponseListItem } from './listitem.js'

export const ResponsesList = ({ route, navigation }) => {

	//const { loading, forms, error } = useFormsAPI(route.key);
	console.log('route.key', route.key); 
	const { loading, responses, error } = useResponsesAPI(route.key);
	console.log('response1', responses, route.params);

	const responseSelected = (response) => {
		navigation.navigate('Response Details', response)
	}

	return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
		{
			loading && responses != null && responses.length > 0 ? 
			<Text>Responses Loading...</Text> :
			<FlatList
				data={responses}
				renderItem={({ item }) => (
					<ResponseListItem response={item} onPress={responseSelected} />
				)}
			/>
		}
		</View>
  );
}