import React from 'react';

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

export const SettingsListItem = ({ setting, navigation, chevron }) => {
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={() => setting.component(setting.title)}
			onPress={() => setting.onPress(navigation)}
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