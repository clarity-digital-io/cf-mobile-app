/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';

export const RecordDetail = ({ record }) => {
	
	return [
		<View style={{ borderRadius: 14, margin: 8, marginTop: 4,  marginBottom: 0, padding: 14, borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}>
			<Text style={{ color: '#16325c', fontWeight: '700', fontSize: 16 }}>Account</Text>
		</View>,
		<View style={{ borderRadius: 14, margin: 8, marginTop: 4,  marginBottom: 0, padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}>
			<Text style={{ color: '#333', fontWeight: '300', fontSize: 12 }}>{record.Name}</Text>
		</View>
	]

}
