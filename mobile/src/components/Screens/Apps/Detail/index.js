/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

import { RecordDetail } from './recorddetail';
import { Checklist } from './checklist';
import { Recent } from './recent';

export const Detail = ({ route, navigation }) => {
	
	const [record] = useState(route.params.record);
	
	React.useLayoutEffect(() => {
    navigation.setOptions({
			title: route.params.record.Name,
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#16325c'} />
			)
    });
	}, [navigation]);

	return <ScrollView  style={{ flex:1, backgroundColor: '#f2f5f9' }}>

		<Checklist route={route} navigation={navigation} />

		<Recent route={route} navigation={navigation}  />
		
	</ScrollView>

}
