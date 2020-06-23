import React from 'react';
import {Text, View, ScrollView } from 'react-native';

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

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

const SettingsListItem = ({ setting, navigation, chevron }) => {
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={() => setting.component(setting.title)}
			onPress={() => setting.onPress(navigation)}
			chevron={chevron}
			bottomDivider={true}
			containerStyle={{ padding: 14, backgroundColor: '#fff', borderColor: '#f2f5f9', borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0 }}
		/>
	)
}

