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

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale

export const FormListItem = ({ form, onPress }) => {

	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#16325c', fontWeight: '500', fontSize: 12, marginBottom: 6 }}>{form.Title}</Text>
					<Text style={{ color: '#333', fontWeight: '300', fontSize: 12, lineHeight: 18, marginBottom: 12 }}>
					{form.Description}
					</Text>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text style={{ color: '#333', fontWeight: '300', fontSize: 12 }}>{Moment(form.CreatedDate).format('MMMM d YYYY')}</Text>
					</View>
				</View>
			}
			chevron
			bottomDivider={true}
			onPress={() => onPress(form)}
			containerStyle={{ padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}
		/>
	)
}
