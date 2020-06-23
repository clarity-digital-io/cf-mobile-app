/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { fieldStyle } from '../Stylesheet';
import { Text, TouchableOpacity, View } from 'react-native';
import { FormContext } from '../../Context';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Lookup = ({ key, question, disabled }) => {

	const { navigation, answers, records } = useContext(FormContext); 

	console.log('answers', answers.get(question.Id)); 

	const searchLookup = () => {
		navigation.navigate('Lookup', question)
	}

	return (
		answers.has(question.Id) && records.has(question.Id) ? 
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
			<Ionicons style={{ marginRight: 14 }} size={32} onPress={searchLookup} name={"ios-cloudy"} color={'#f2f5f9'} />
			<Text style={{ backgroundColor: '#00b388', color: '#fff', marginRight: 10, padding: 4, borderRadius: 6, overflow: 'hidden' }}>{records.get(question.Id).Type}</Text>
			<Text style={{ color: '#16325c', fontWeight: '700' }}>{records.get(question.Id).Name}</Text>
		</View> :
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
			<Ionicons style={{ marginRight: 14 }} size={32} onPress={searchLookup} name={"ios-search"} color={'#f2f5f9'} />
			<Text style={{ color: '#16325c' }}>Select a Salesforce Record</Text>
		</View>
	)
}