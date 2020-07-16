import React from 'react';

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

export const SettingsListItem = ({ setting, navigation, chevron }) => {
	return (
		<ListItem 
			leftIcon={{ name: setting.icon }}
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

