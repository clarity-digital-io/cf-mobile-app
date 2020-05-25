/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import { Questions, MultiQuestions } from '../Questions';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FormContext } from '../Context';
import { useSubmitAPI } from '../../api';

export const NewFormResponse = ({ route, navigation }) => {

	const { execute } = useSubmitAPI(route.key);

	const { form } = useContext(FormContext); 

	React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
				<Ionicons style={{ padding: 8, marginRight: 12 }} size={50} onPress={() => execute()} name={"ios-checkmark"} color={'#000'} />
			),
    });
  }, [navigation]);

	return form.forms__Is_Multi_Page__c ? 
				<Multi key="Multi" /> :
				<Single key="Single" />

}

const Single = () => {

	const { form } = useContext(FormContext); 
	console.log('single', form); 
	return <Questions form={form} />
}

const Drawer = createDrawerNavigator();

const Multi = () => {

	const { form } = useContext(FormContext); 

	const [pages, setPages] = useState( form.form.forms__Multi_Page_Info__c != null ? JSON.parse(form.form.forms__Multi_Page_Info__c) : [] );

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
