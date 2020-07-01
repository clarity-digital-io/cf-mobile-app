/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import {SearchBar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { useRecords } from '../../../api';
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormContext } from '../../Context';

export const Lookup = ({ navigation, route }) => {

	React.useLayoutEffect(() => {
    navigation.setOptions({
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => navigation.goBack()} name={"ios-close"} color={'#16325c'} />
			)
    });
	}, [navigation]);
	
	const { records, searchRecords } = useRecords();

	const [query, setQuery] = useState('');
	
	useEffect(() => {
		if(query.length > 2) {
			searchRecords('Account', query);
		}
	}, [query]);

	const { setAnswers, setRecords } = useContext(FormContext); 

	const recordSelected = (record) => {

		setAnswers(answers => {
			answers.set(route.params.Id, record.Id); 
			return answers;
		});

		setRecords(records => {
			records.set(route.params.Id, record); 
			return records; 
		});

		navigation.goBack();
		
	}

	return [
		<ScrollView style={{flex: 1}}>
			<SearchBar
				placeholder="Search for a record..."
				onChangeText={(searchTerm) => setQuery(searchTerm)}
				value={query}
				containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#f5f5f5', borderTopColor: '#f5f5f5' }}
				inputContainerStyle={{ backgroundColor: '#f5f5f5' }}
			/>
			<FlatList
				data={records}
				renderItem={({ item }) => (
					<RecordListItem key={'item.Name'} record={item} onPress={recordSelected} />
				)}
			/>
		</ScrollView>
	]
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
			chevron
			bottomDivider={true}
			onPress={() => onPress(record)}
			containerStyle={{ padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}
		/>
	)
}
