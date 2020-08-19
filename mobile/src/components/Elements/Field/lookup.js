/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { fieldStyle } from '../../../stylesheet';
import { Text, TouchableOpacity, View } from 'react-native';
import { FormContext } from '../../Context';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Lookup = ({ key, question, disabled }) => {

	const { navigation, answers, records } = useContext(FormContext); 

	const searchLookup = () => {
		navigation.navigate('Lookup', question)
	}

	return (
		answers.has(question.Id) && records.has(question.Id) ? 
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
			<Ionicons style={{ marginRight: 14 }} size={32} onPress={searchLookup} name={"ios-cloudy"} color={'#E7F1F6'} />
			<Text style={{ backgroundColor: '#00b388', color: '#fff', marginRight: 10, padding: 4, borderRadius: 6, overflow: 'hidden' }}>{records.get(question.Id).Type}</Text>
			<Text style={{ color: '#1C1C1C', fontWeight: '700' }}>{records.get(question.Id).Name}</Text>
		</View> :
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
			<Ionicons style={{ marginRight: 14 }} size={32} onPress={searchLookup} name={"ios-search"} color={'#E7F1F6'} />
			<Text style={{ color: '#1C1C1C' }}>Select a Salesforce Record</Text>
		</View>
	)
}