import React from 'react';
import {Text, View, ScrollView } from 'react-native';
import { SettingsListItem } from './listitem';

const settings = [
	{
		id: 3, 
		title: 'Sync Salesforce Records',
		component: (title) => {
			return <View style={{ paddingTop: 4, paddingBottom: 4 }}>
				<Text style={{ color: '#16325c', fontWeight: '500', fontSize: 14 }}>{title}</Text>
			</View>
		},
		onPress: (navigation) => 	navigation.navigate('Salesforce Records Sync Settings'),
		chevron: true
	},
	{
		id: 1, 
		title: 'Push notificiations',
		component: (title) => {
			return <View style={{ paddingTop: 4, paddingBottom: 4 }}>
				<Text style={{ color: '#16325c', fontWeight: '300', fontSize: 14 }}>{title}</Text>
			</View>
		},
		onPress: () => {},
		chevron: false
	},
	{
		id: 2, 
		title: 'Send feedback',
		component: (title) => {
			return <View style={{ paddingTop: 4, paddingBottom: 4 }}>
				<Text style={{ color: '#16325c', fontWeight: '300', fontSize: 14 }}>{title}</Text>
			</View>
		},
		onPress: () => {},
		chevron: false
	}
];

export const SettingsList = ({ navigation, route }) => {

	return (
    <View style={{ backgroundColor: '#fff' }}>
				<ScrollView>
					{
							settings.map(setting => {
								return <SettingsListItem setting={setting} navigation={navigation} chevron={setting.chevron}  />
							})
					}
				</ScrollView>
		</View>
  );
}

