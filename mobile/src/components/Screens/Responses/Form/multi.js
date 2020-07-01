/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MultiQuestions } from '../../../Elements/Questions';
import { FormContext } from '../../../Context';

const Drawer = createDrawerNavigator();

export const Multi = () => {
	const { form } = useContext(FormContext); 

	const [pages, setPages] = useState( form.Multi_Page_Info != null ? JSON.parse(form.Multi_Page_Info) : [] );

	return (
			<Drawer.Navigator initialRouteName={pages[0].title}>
				{
					pages.map(page => {
						return <Drawer.Screen name={page.title} component={MultiQuestions} initialParams={{ form: form, questions: form.questions }} />
					})
				}
			</Drawer.Navigator>
	)
}