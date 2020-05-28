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
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

export const ResponseListItem = ({ response, onPress }) => {
	console.log('response', response);
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.95}
			linearGradientProps={{
				colors: ['#fafafa', '#fff'],
				start: { x: 1, y: 0 },
				end: { x: 0.2, y: 0 },
			}}
			ViewComponent={LinearGradient}
			title={response.Name}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#16325c', fontWeight: '500', fontSize: 16, marginBottom: 6 }}>{response.Name}</Text>
					<Text style={{ color: '#333', fontWeight: '100', fontSize: 12, lineHeight: 18, marginBottom: 6 }}>
						{ response.forms__Form__r.forms__Title__c}
					</Text>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<Text style={{ color: '#333', fontWeight: '100', fontSize: 12, marginRight: 8 }}>{ response.forms__Status__c}</Text>
						<Text style={{ color: '#16325c', fontWeight: '100', fontSize: 12, marginRight: 8 }}>{response.CreatedBy.Name}</Text>
						<Text style={{ color: '#333', fontWeight: '100', fontSize: 12 }}> {Moment(response.CreatedDate).format('MMMM d YYYY')} </Text>
					</View>
				</View>
			}
			chevron={{ color: 'black' }}
			onPress={() => onPress(response)}
		/>
	)
}