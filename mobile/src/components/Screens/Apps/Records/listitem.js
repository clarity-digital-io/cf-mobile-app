/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, Button, View} from 'react-native';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { main } from '../../../../stylesheet/theme';

export const AppsListItem = ({ app, onPress }) => {
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#1C1C1C', fontWeight: '700', fontSize: 12, marginBottom: 6 }}>{app.record.Name}</Text>
					<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, lineHeight: 18, marginBottom: 12 }}>
					{app.record.BillingAddress.city}, {app.record.BillingAddress.state} {app.record.Phone}
					</Text>

					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text style={{ color: '#333', fontWeight: '300', fontSize: 12 }}>{Moment(app.record.CreatedDate).format('MMMM d YYYY')}</Text>
					</View>
				</View>
			}
			chevron
			onPress={() => onPress(app)}
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
	'#1C1C1C'
]