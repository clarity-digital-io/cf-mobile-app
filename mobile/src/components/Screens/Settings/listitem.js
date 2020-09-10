import React from 'react';
import {Text} from 'react-native';

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

export const SettingsListItem = ({ setting, navigation, profile }) => {
	
	return (
		<ListItem 
			Component={TouchableScale}
			friction={90}
			tension={100} 
			activeScale={0.98}
			title={() => setting.component(setting.title, profile)}
			onPress={() => setting.onPress(navigation)}
			chevron={setting.chevron}
			containerStyle={style}
		/>
	)
}