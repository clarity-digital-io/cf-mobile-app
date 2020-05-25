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
	console.log('FormResponse', route.params); 
	const [form, setForm] = useState(route.params);
	
	const [newUUID, setUUID] = useState(uuid.v1());

  return (
		<FormProvider newResponseId={newUUID} newForm={form} newNavigation={navigation}>

			<FormResponseStack.Navigator>
				<FormResponseStack.Screen
					name={route.params.Name}
					options={{
						tabBarLabel: false
					}}
					component={NewFormResponse}
					initialParams={route.params}
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

	const [responseId] = useState(newResponseId); 

	const [form] = useState(newForm); 

	const [navigation] = useState(newNavigation); 

  const [loading, setLoading] = useState(true);

	const [images, setImages] = useState(new Map());

	//used on review
	const [image, setImage] = useState(new Map());

	const [answers, setAnswers] = useState(new Map());

	const [records] = useState(new Map()); 

	const [questions] = useState([]); 

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
				answers, 
				setAnswers
      }}>
      {children}
    </FormContext.Provider>
  );
};