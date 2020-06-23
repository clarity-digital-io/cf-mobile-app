/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ListItem} from 'react-native-elements';
import {Text, Button, View} from 'react-native';
import Moment from 'moment';

import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale

export const ResponseListItem = ({ response, onPress }) => {
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#16325c', fontWeight: '500', fontSize: 12, marginBottom: 6 }}>{response.Name}</Text>
					<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, lineHeight: 12, marginBottom: 6 }}>
						{/* { response.forms__Form__r.Title__c} */}
					</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, marginBottom: 4 }}>{ response.Status__c}</Text>
						{/* <Text style={{ color: '#16325c', fontWeight: '300', fontSize: 12, marginBottom: 4 }}>{response.CreatedBy.Name}</Text> */}
						<Text style={{ color: '#333', fontWeight: '300', fontSize: 12 }}>{Moment(response.CreatedDate).format('MMMM d YYYY')}</Text>
					</View>
				</View>
			}
			chevron
			bottomDivider={true}
			onPress={() => onPress(response)}
			containerStyle={{ padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}
		/>
	)
}