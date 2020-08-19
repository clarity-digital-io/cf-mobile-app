/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormContext } from '../../Context';
import { Fields } from './Fields';

export const NewRecordGroup = ({ navigation, route }) => {

	const add = () => {
		navigation.goBack();
	}
	const { form } = useContext(FormContext);

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