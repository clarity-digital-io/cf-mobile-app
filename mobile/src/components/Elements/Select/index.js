/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormContext } from '../../Context';
import { useOnSelectChange } from '../../Handlers/OnChange/useOnSelectChange';

export const Select = ({ navigation, route }) => {

	const { activeOptions } = useContext(FormContext); 

	const  { value, update } = useOnSelectChange(route.params.question); 


	React.useLayoutEffect(() => {
    navigation.setOptions({
			title: route.params.question.Title,
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => navigation.goBack()} name={"ios-close"} color={'#1C1C1C'} />
			)
    });
	}, [navigation]);

	const optionSelected = (option) => {

		update(option);

		navigation.goBack();
		
	}

	return [
		<ScrollView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
			<FlatList
				data={activeOptions}
				renderItem={({ item }) => (
					<SelectOptionItem key={item.Id} option={item} onPress={optionSelected} />
				)}
			/>
		</ScrollView>
	]
}

const SelectOptionItem = ({ value, option, onPress }) => {

	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{  paddingTop: 2, paddingBottom: 2 }}>
					<Text style={{ color: '#1C1C1C', fontWeight: '300', fontSize: 14 }}>{option.Label}</Text>
				</View>
			}
			chevron
			bottomDivider={true}
			onPress={() => onPress(option)}
			containerStyle={{ 
				margin: 4, 
				marginBottom: 2,
				padding: 14, 
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
	'#343299',
	'#1C1C1C'
]