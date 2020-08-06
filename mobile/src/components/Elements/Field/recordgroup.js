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

export const RecordGroup = ({ key, question, disabled }) => {

	const { navigation } = useContext(FormContext); 

	const createRecord = () => {
		navigation.navigate('RecordGroup', { recordGroupId: question.Id })
	}

	return (
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}>
			<Ionicons style={{ marginRight: 14 }} size={32} onPress={createRecord} name={"ios-add"} color={'#16325c'} />
			<Text style={{ color: '#16325c' }}>Create { question.Title }</Text>
		</View>
	)
}