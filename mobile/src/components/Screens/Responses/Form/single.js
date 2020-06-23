/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Questions } from '../../../Elements/Questions';

export const Single = () => {
	return <ScrollView style={{ backgroundColor: '#fff' }}>
			<Questions />
		</ScrollView>
}