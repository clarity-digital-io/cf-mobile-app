/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView, FlatList } from 'react-native';
import {SearchBar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useConnectionRecords } from '../../../../api';
import { FormContext } from '../../../Context';

export const NewResponseConnection = ({ route, navigation }) => {

	const goBack = () => {
		navigation.navigate('Detail', { formId: route.params.formId })
	}

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => goBack()} name={"ios-close"} color={'#16325c'} />
			)
		});
	}, [navigation]);
	
	const { records, searchRecords } = useConnectionRecords();

	const [query, setQuery] = useState('');
	
	useEffect(() => {
		if(query.length > 1) {
			searchRecords(route.params.form.Form_Connections[0].Salesforce_Object, query);
		}
	}, [query]);

	const recordSelected = (record) => {

		navigation.navigate('Response', { form: route.params.form, connection: record })

	}

	return  <View>
			{
				route.params.form ? 
				[<SearchBar
					placeholder="Search for a record..."
					onChangeText={(searchTerm) => setQuery(searchTerm)}
					value={query}
					containerStyle={{ height: 58, backgroundColor: '#fff', borderBottomColor: '#f2f5f9', borderTopColor: '#f2f5f9' }}
					inputContainerStyle={{ height: 40, backgroundColor: '#f2f5f9' }}
					inputStyle={{ fontSize: 16, color: '#16325c' }}
				/>,
				<FlatList
					data={records}
					renderItem={({ item }) => (
						<RecordListItem key={'item.Name'} record={item} onPress={recordSelected} />
					)}
					/>] : <Text>Not available</Text>
			}
		</View>
	
}
	
const RecordListItem = ({ record, onPress }) => {
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{  }}>
					<Text style={{ color: '#16325c', fontWeight: '700', fontSize: 14, marginBottom: 6 }}>{record.Name}</Text>
					<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, lineHeight: 18 }}>
						{record.Type}
					</Text>
				</View>
			}
			bottomDivider={true}
			onPress={() => onPress(record)}
			containerStyle={{ padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}
		/>
	)
}
	