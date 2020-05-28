/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useEffect } from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import uuid from 'react-native-uuid';
import { NewFormResponse } from '../Responses/new';
import { FormContext } from '../Context';
import { Camera } from '../Camera';
import { PhotoReview } from '../Camera/photoreview';


const FormResponseStack = createStackNavigator();

export const FormResponse = ({ route, navigation }) => {

	const [form] = useState(route.params);
	
	const [newUUID] = useState(uuid.v1());
	console.log('form response', route.params);
  return (
		<FormProvider newResponseId={newUUID} newForm={form} newNavigation={navigation}>

			<FormResponseStack.Navigator>
				<FormResponseStack.Screen
					name={`New ${route.params.form.forms__Title__c} ${route.params.form.Name}`}
					options={{
						tabBarLabel: false
					}}
					component={NewFormResponse}
					initialParams={route.params}
					options={{
						tabBarLabel: false, 
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: '#DE3745',
						headerTitleStyle: {
							fontWeight: 'bold',
						}
					}}
				/>
				<FormResponseStack.Screen
					name={'Camera'}
					component={Camera}
					options={{tabBarLabel: false, headerShown: false}}
				/>
				<FormResponseStack.Screen
					name={'Photo Review'}
					component={PhotoReview}
					options={{tabBarLabel: false, headerShown: false}}
				/>
			</FormResponseStack.Navigator>

		</FormProvider>	

  );
}


const FormProvider = ({children, newResponseId, newForm, newNavigation}) => {
	console.log('FormProvider ONLY ON NEW', newResponseId, newForm)
	const [responseId] = useState(newResponseId); 

	const [form] = useState(newForm.form); 

	const [navigation] = useState(newNavigation); 

  const [loading, setLoading] = useState(true);

	const [images, setImages] = useState(new Map());

	//used on review
	const [image, setImage] = useState(new Map());

	const [answers, setAnswers] = useState(new Map());

	const [records] = useState(new Map()); 

	const [questions, setQuestions] = useState([]); 

	useEffect(() => {
		setQuestions(newForm.questions);
	}, [])

	const [criteriaController, setCriteriaController] = useState(new Map()); 

	const [criteriaControlled, setCriteriaControlled] = useState(new Map()); 

	const [recordGroupAnswers, setRecordGroupAnswers] = useState(new Map());
	
	const [requiredConnections, setRequiredConnections] = useState([]); 
	
	const [pageQuestions, setPageQuestions] = useState(new Map());

	const [activePage, setActivePage] = useState(0);

	const [activePageQuestions, setActivePageQuestions] = useState([]); 

  return (
    <FormContext.Provider
      value={{
				responseId,
        form,
        navigation,
				loading,
				setLoading,
				images,
				setImages,
				image, 
				setImage,
				questions,
				answers, 
				setAnswers
      }}>
      {children}
    </FormContext.Provider>
  );
};