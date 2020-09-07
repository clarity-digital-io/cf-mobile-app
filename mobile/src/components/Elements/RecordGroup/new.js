/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormContext, RecordGroupContext } from '../../Context';
import { Fields } from './Fields';

export const NewRecordGroup = ({ navigation, route }) => {

	const { answers, setTable } = useContext(RecordGroupContext);

	const add = () => {

		setTable(table => {
			let size = table.size.toString();
			table.set(size, answers);
			return table; 
		})

		navigation.goBack();
	}
	
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={32} onPress={() => add()} name={"ios-checkmark"} color={'#fff'} />
			),
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => navigation.goBack()} name={"ios-close"} color={'#fff'} />
			)
		});
	}, [navigation]);

	return <Fields />
}