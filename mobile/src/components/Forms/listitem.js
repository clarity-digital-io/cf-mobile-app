/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

export const FormListItem = ({ form, onPress }) => {
	console.log('form', form); 
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
			title={form.form.Name}
			titleStyle={{ color: 'black', fontWeight: 'bold' }}
			subtitleStyle={{ color: 'black' }}
			subtitle={form.id}
			chevron={{ color: 'black' }}
			onPress={() => onPress(form)}
		/>
	)
}
