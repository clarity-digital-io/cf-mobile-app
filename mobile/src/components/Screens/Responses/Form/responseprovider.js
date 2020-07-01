/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useEffect } from 'react';

import { FormContext } from '../../../Context';
import { calculateLogic } from '../../../Handlers/useLogic';

import { useForm } from '../../../../api';
import { transform } from '../../../../api/helpers';

export const ResponseProvider = ({children, newResponseId, newForm, newNavigation}) => {

	const { getQuestions } = useForm();

	const [responseId] = useState(newResponseId); 

	const [form] = useState(newForm); 

	const [navigation] = useState(newNavigation); 

  const [loading, setLoading] = useState(true);

	const [image, setImage] = useState(new Map());

	const [answers, setAnswers] = useState(new Map());

	const [records, setRecords] = useState(new Map()); 

	const [questions, setQuestions] = useState([]); 
	
	useEffect(() => {
		if(questions.length == 0) {
			let formQuestions = getQuestions(`Form = "${newForm.Id}"`); //newForm.Questions;
			let sortedQuestions = getSortedQuestions(formQuestions); 
			setQuestions(sortedQuestions);
		}
	}, [])

	const [images, setImages] = useState(new Map());

	const [allValidations, setAllValidations] = useState(new Map());

	useEffect(() => {
		if(questions.length) {
			let questionValidations = getQuestionValidations(questions);
			setAllValidations(questionValidations);
		}	
	}, [questions])

	const [errorValidations, setErrorValidations] = useState([]); 

	const [criteriaController, setCriteriaController] = useState(new Map());
	
	useEffect(() => {
		if(questions.length) {
			let criteriaControllers = getCriteriaControllers(questions); 
			setCriteriaController(criteriaControllers); 
		}
	}, [questions])

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
		return question.Record_Group == null
	});

}

const sorted = (questions) => {

	let result = questions.sort((a, b) => {
			if(a.Order < b.Order) {
					return -1; 
			}
			if(a.Order > b.Order) {
					return 1; 
			}
	});

	return result; 

}

const getQuestionValidations = (questions) => {

	return questions.reduce((accum, question) => {

		if(question.Required) {
			accum.set(question.Id, [{ required: true }])
		}

		return accum; 

	}, new Map());

}

const getCriteriaControllers = (questions) => {

	let controllers = questions.reduce((accum, question) => {

		if(question.Question_Criteria != null && question.Question_Criteria.length > 0) {

				transform(question.Question_Criteria).forEach((criteria, i) => {

						if(accum.has(criteria.Field)) {
								let conditions = accum.get(criteria.Field); 
								conditions.concat([criteria])
								accum.set(criteria.Field, conditions);
						} else {
								accum.set(criteria.Field, [criteria])
						}

				})

		}

		return accum;

	}, new Map());

	return controllers;

}

const getCriteriaControlledQuestions = (questions) => {
	
	let questionsControlled = questions.reduce((accum, question) => {

		if(question.Question_Criteria != null && question.Question_Criteria.length > 0) {

				accum.set(question.Id, transform(question.Question_Criteria).map(criteria => criteria));

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