/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import uuid from 'react-native-uuid';
import { NewFormResponse } from '.';
import { FormContext } from '../../../Context';
import { PhotoReview } from '../../../Elements/Camera/photoreview';
import { calculateLogic } from '../../../Handlers/useLogic';

import { Camera } from '../../../Elements/Camera';
import { ClarityMap } from '../../../Elements/Map';
import { Lookup } from '../../../Elements/Lookup';
import { useResponses } from '../../../../api';

import { useFocusEffect } from '@react-navigation/native';
import { useForm } from '../../../../api';
import { transform } from '../../../../api/helpers';
import ImagePickerExample from '../../../Elements/Camera/expo';

const FormResponseStack = createStackNavigator();

export const FormResponse = ({ route, navigation }) => {
	const [form] = useState(route.params);
	
	const { loading, error, create } = useResponses();

	const [newUUID] = useState(uuid.v1());

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive)
				create(form.Id, newUUID);
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	return (
		<FormProvider newResponseId={newUUID} newForm={form} newNavigation={navigation}>
			<FormResponseStack.Navigator style={{ backgroundColor: '#fff' }} mode="modal">
				<FormResponseStack.Screen
					name={`New ${form.Title__c}`}
					component={NewFormResponse}
					initialParams={route.params}
					options={{
						tabBarLabel: false, 
						headerStyle: {
							backgroundColor: '#f2f5f9',
						},
						headerTintColor: '#16325c',
						headerTitleStyle: {
							fontWeight: '500',
							fontSize: 14
						}
					}}
				/>
				<FormResponseStack.Screen
					name={'Camera'}
					component={ImagePickerExample}
					options={{tabBarLabel: false, headerShown: false}}
				/>
				<FormResponseStack.Screen
					name={'Photo Review'}
					component={PhotoReview}
					options={{tabBarLabel: false, headerShown: false}}
				/>
				<FormResponseStack.Screen
					name={'Map'}
					component={ClarityMap}
					options={{
						tabBarLabel: false, 
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: '#16325c',
						headerTitleStyle: {
							fontWeight: '500',
							fontSize: 14
						},
						headerBackTitleVisible: false
					}}
				/>
				<FormResponseStack.Screen
					name={'Lookup'}
					component={Lookup}
					options={{
						tabBarLabel: false, 
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: '#16325c',
						headerTitleStyle: {
							fontWeight: '500',
							fontSize: 14
						},
						headerBackTitleVisible: false
					}}
				/>
			</FormResponseStack.Navigator>
		</FormProvider>	
  );
}

const FormProvider = ({children, newResponseId, newForm, newNavigation}) => {

	const { getQuestions } = useForm();

	const [responseId] = useState(newResponseId); 

	const [form] = useState(newForm); 

	const [navigation] = useState(newNavigation); 

  const [loading, setLoading] = useState(true);
	//used on review
	const [image, setImage] = useState(new Map());

	const [answers, setAnswers] = useState(new Map());
	//keep record selected for a lookup question id => record
	const [records, setRecords] = useState(new Map()); 

	const [questions, setQuestions] = useState([]); 
	
	useEffect(() => {
		if(questions.length == 0) {
			let formQuestions = getQuestions(`Form__c = "${newForm.Id}"`); //newForm.Questions__r;
			let sortedQuestions = getSortedQuestions(formQuestions); 
			setQuestions(sortedQuestions);
		}
	}, [])

	const [images, setImages] = useState(new Map());
	//validations.put(question.Id, [{ required }, { must be > 2 }])
	const [allValidations, setAllValidations] = useState(new Map());

	useEffect(() => {
		if(questions.length) {
			let questionValidations = getQuestionValidations(questions);
			setAllValidations(questionValidations);
		}	
	}, [questions])

	const [errorValidations, setErrorValidations] = useState([]); 

	//controls other questions to show or hide
	const [criteriaController, setCriteriaController] = useState(new Map());
	
	useEffect(() => {
		if(questions.length) {
			let criteriaControllers = getCriteriaControllers(questions); 
			setCriteriaController(criteriaControllers); 
		}
	}, [questions])

	//is controlled by other questions to show or hide
	const [criteriaControlled, setCriteriaControlled] = useState(new Map()); 

	useEffect(() => {
		if(questions.length) {
			let criteriaControlledQuestions = getCriteriaControlledQuestions(questions); 
			setCriteriaControlled(criteriaControlledQuestions);
		}
	}, [questions])

	const [recordGroupAnswers, setRecordGroupAnswers] = useState(new Map());
	
	const [requiredConnections, setRequiredConnections] = useState([]); 
	
	const [pageQuestions, setPageQuestions] = useState(new Map());

	const [activePage, setActivePage] = useState(0);

	const [activePageQuestions, setActivePageQuestions] = useState([]); 

	const [activeQuestions, setActiveQuestions] = useState(questions); 

	useEffect(() => {
	
		if(questions.length) {
			let active = getActiveQuestions(questions, answers, criteriaControlled); 
			setActiveQuestions(active); 
		}

	}, [questions])

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
				activeQuestions,
				answers, 
				setAnswers,
				records, 
				setRecords,
				allValidations, 
				setAllValidations,
				errorValidations, 
				setErrorValidations
      }}>
      {children}
    </FormContext.Provider>
  );
};

const getSortedQuestions = (questions) => {

	let sortedQuestions = sorted(questions); 

	let filteredQuestions = filter(sortedQuestions);

	return filteredQuestions;

}

const filter = (questions) => {

	return questions.filter(question => {
		return question.Record_Group__c == null
	});

}

const sorted = (questions) => {

	let result = questions.sort((a, b) => {
			if(a.Order__c < b.Order__c) {
					return -1; 
			}
			if(a.Order__c > b.Order__c) {
					return 1; 
			}
	});

	return result; 

}

const getQuestionValidations = (questions) => {

	return questions.reduce((accum, question) => {

		if(question.Required__c) {
			accum.set(question.Id, [{ required: true }])
		}

		return accum; 

	}, new Map());

}

const getCriteriaControllers = (questions) => {

	let controllers = questions.reduce((accum, question) => {

		if(question.Question_Criteria__r != null && question.Question_Criteria__r.length > 0) {

				transform(question.Question_Criteria__r).forEach((criteria, i) => {

						if(accum.has(criteria.Field__c)) {
								let conditions = accum.get(criteria.Field__c); 
								conditions.concat([criteria])
								accum.set(criteria.Field__c, conditions);
						} else {
								accum.set(criteria.Field__c, [criteria])
						}

				})

		}

		return accum;

	}, new Map());

	return controllers;

}

const getCriteriaControlledQuestions = (questions) => {
	
	let questionsControlled = questions.reduce((accum, question) => {

		if(question.Question_Criteria__r != null && question.Question_Criteria__r.length > 0) {

				accum.set(question.Id, transform(question.Question_Criteria__r).map(criteria => criteria));

		}

		return accum; 

	}, new Map());

	return questionsControlled;

}

const getActiveQuestions = (questions, answers, controlledQuestions) => {

	return questions.filter(question => {

		if(calculateLogic(question, answers, controlledQuestions)) {
			return question; 
		} 

	});

}