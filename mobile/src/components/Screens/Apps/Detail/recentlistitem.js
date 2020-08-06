/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; 

export const RecentItem = ({ recent, onPress }) => {
	console.log('recent', recent);
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			leftIcon={
				<Ionicons size={32} name={"ios-checkmark"} color={'#72d4a6'}  />
			}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#16325c', fontWeight: '700', fontSize: 14, marginBottom: 6 }}>{recent.sObject}</Text>
				</View>
			}
			chevron
			onPress={() => onPress(recent)}
			containerStyle={{ padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}
		/>
	)
	
}