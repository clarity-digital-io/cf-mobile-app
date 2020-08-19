/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import {SearchBar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useConnectionRecords } from '../../../../api';
import { FormContext } from '../../../Context';

export const NewResponseConnection = ({ route, navigation }) => {

	const { form, setFormConnection } = useContext(FormContext); 

	const goBack = () => {
		navigation.navigate('Detail', { formId: form.Id })
	}

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => goBack()} name={"ios-close"} color={'#fff'} />
			)
		});
	}, [navigation]);
	
	const { records, searchRecords } = useConnectionRecords();

	const [query, setQuery] = useState('');
	
	useEffect(() => {
		if(query.length > 1) {
			searchRecords(form.Form_Connections[0].Salesforce_Object, query);
		}
	}, [query]);

	const recordSelected = (record) => {

		setFormConnection(record); 
		navigation.navigate('Response')

	}

	return  <View style={{ backgroundColor: '#F8F8F8', flexGrow: 1 }}>
			{
				form ? 
				[<SearchBar
					placeholder="Search for a record..."
					onChangeText={(searchTerm) => setQuery(searchTerm)}
					value={query}
					containerStyle={{ height: 52, backgroundColor: '#fff', borderBottomColor: '#E7F1F6', borderTopColor: '#E7F1F6' }}
					inputContainerStyle={{ height: 34, backgroundColor: '#f8f8f8' }}
					inputStyle={{ fontSize: 14, color: '#1C1C1C' }}
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
			<View style={{ paddingTop: 4, paddingBottom: 4 }}>
				<Text style={{ color: '#1C1C1C', fontWeight: '500', fontSize: 12, marginBottom: 4 }}>
					{record.Name}
				</Text>
				<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, lineHeight: 18 }}>
					{record.Type}
				</Text>
			</View>
			}
			chevron
			onPress={() => onPress(record)}
			containerStyle={{ 
				margin: 4, 
				marginBottom: 2,
				padding: 14, 
				paddingBottom: 8,
				paddingTop: 8,
				backgroundColor: '#fff', 
				borderColor: colors[2], 
				borderLeftWidth: 6, 
				borderRightWidth: 0, 
				borderBottomWidth: 0, 
				borderTopWidth: 0,
				borderRadius: 2
			}}
		/>
	)
}
	
const colors = [
	'#E7F1F6',
	'#FDE14D',
	'#001B34',
	'#1C1C1C'
]