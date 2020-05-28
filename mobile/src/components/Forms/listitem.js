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
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

export const FormListItem = ({ form, onPress }) => {
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={
				<View style={{ paddingTop: 4, paddingBottom: 4 }}>
					<Text style={{ color: '#16325c', fontWeight: '500', fontSize: 16, marginBottom: 6 }}>{form.form.forms__Title__c}</Text>
					<Text style={{ color: '#333', fontWeight: '100', fontSize: 12, lineHeight: 18, marginBottom: 6 }}>
					Let’s maintain a high quality in our installations use this form to manage our recurring checks.
					</Text>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<Text style={{ color: '#333', fontWeight: '100', fontSize: 12, marginRight: 8 }}> {Moment(form.form.CreatedDate).format('MMMM d YYYY')} </Text>
						<Text style={{ color: '#16325c', fontWeight: '100', fontSize: 12 }}>{form.form.CreatedBy.Name}</Text>
					</View>
				</View>
			}
			chevron
			bottomDivider={true}
			onPress={() => onPress(form)}
			containerStyle={{ marginRight: 8, marginLeft: 8, padding: 4, backgroundColor: '#fff', margin: 8 }}
		/>
	)
}
