/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ListItem} from 'react-native-elements';
import {Text, View} from 'react-native';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { main } from '../../../stylesheet/theme';

export const ResponseListItem = ({ response, onPress }) => {

	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#1C1C1C', fontWeight: '500', fontSize: 12, marginBottom: 6 }}>{response.UUID}</Text>
					<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, lineHeight: 12, marginBottom: 6 }}>
						{/* { response.forms__Form.Title} */}
					</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, marginBottom: 4 }}>{ response.Status}</Text>
						{/* <Text style={{ color: '#1C1C1C', fontWeight: '300', fontSize: 12, marginBottom: 4 }}>{response.CreatedBy.Name}</Text> */}
						<Text style={{ color: '#333', fontWeight: '300', fontSize: 12 }}>{Moment(response.CreatedDate).format('MMMM d YYYY')}</Text>
					</View>
				</View>
			}
			chevron
			onPress={() => onPress(response)}
			containerStyle={{ 
				margin: 4, 
				marginBottom: 2,
				padding: 14, 
				backgroundColor: '#fff', 
				borderColor: colors[3], 
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