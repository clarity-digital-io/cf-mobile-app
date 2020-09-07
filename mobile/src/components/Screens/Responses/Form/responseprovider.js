/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useEffect } from 'react';

import { FormContext } from '../../../Context';
import { calculateLogic } from '../../../Handlers/Logic/useLogic';

import { useForm, useResponses } from '../../../../api';
import { transform } from '../../../../api/helpers';

export const ResponseProvider = ({children, form, responseUUID, newFormId, newNavigation, isNew }) => {
	console.log(' form, responseUUID, newFormId, newNavigation, isNew',  form, responseUUID, newFormId, newNavigation, isNew); 

	const { getQuestions, getPicklists } = useForm();

	const { filtered, create } = useResponses();

	const [responseId] = useState(responseUUID); 

	const [response, setResponse] = useState({ UUID: responseId }); 

	const [formConnection, setFormConnection] = useState({}); 

	const [errors, setErrors] = useState({ success: true, errors: [], validations: [] }); 

	const [isNewResponse] = useState(isNew);

	useEffect(() => {

		if(isNewResponse) {
			let createdResponse = create(newFormId, responseId, form.Name);
			setResponse(createdResponse);
		} else {
			let existingResponse = filtered(`UUID = "${responseId}"`);
			setResponse(existingResponse);
		}

	}, [isNewResponse]);

	const [initialRouteName] = useState(form.Form_Connections.length > 0 && isNew ? 'Response Connection' : 'Response'); 
	
	const [navigation] = useState(newNavigation); 

  const [loading, setLoading] = useState(true);

	const [image, setImage] = useState(new Map());

	const [answers, setAnswers] = useState(new Map());

	const [records, setRecords] = useState(new Map()); 

	const [allQuestions, setAllQuestions] = useState([]); 

	const [questions, setQuestions] = useState([]); 
	
	useEffect(() => {
		if(questions.length == 0) {
			let formQuestions = getQuestions(`Form = "${newFormId}"`); //newForm.Questions;
			setAllQuestions(formQuestions);
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
	
	const [requiredConnections, setRequiredConnections] = useState([]); 
	
	const [activeQuestions, setActiveQuestions] = useState(questions); 

	useEffect(() => {
	
		if(questions.length) {
			let active = getActiveQuestions(questions, answers, criteriaControlled); 
			setActiveQuestions(active); 
		}

	}, [questions])

	const [recordGroupAnswers, setRecordGroupAnswers] = useState(new Map());

	/*

	1: { questionid: answer, questionid2: answer},

	*/

	const [recordGroupQuestions, setRecordGroupQuestions] = useState(new Map());

	useEffect(() => {
		if(allQuestions.length) {
			let rgQuestions = getRecordGroupQuestionsByRecordGroupId(allQuestions); 
			setRecordGroupQuestions(rgQuestions);
		}
	}, [allQuestions])

	const [recordGroupPicklists, setRecordGroupPicklists] = useState([]);

	useEffect(() => {
		console.log('recordGroupPicklists', allQuestions, recordGroupPicklists); 
		if(allQuestions.length > 0) {
			let filterQuery = getPicklistFilterQuery(allQuestions);
			let rgPicklists = getPicklists(filterQuery)
			setRecordGroupPicklists(rgPicklists);
		}

	}, [allQuestions])

	const [activeOptions, setActiveOptions] = useState([]);

  return (
    <FormContext.Provider
      value={{
				errors, 
				setErrors,
				initialRouteName,
				form,
				questions,
				response,
				responseId,
				formConnection, 
				setFormConnection,
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
				recordGroupAnswers,
				setRecordGroupAnswers,
				records, 
				setRecords,
				allValidations, 
				setAllValidations,
				recordGroupQuestions,
				recordGroupPicklists, 
				setRecordGroupPicklists,
				activeOptions,
				setActiveOptions
      }}>
      {children}
    </FormContext.Provider>
  );
};

const getPicklistFilterQuery = (fields) => {

	return fields.filter(field => field.Type == 'PICKLIST').reduce((accum, field) => {

		if(accum == '') {
			accum = `sObjectName = "${field.Salesforce_Object}"`
		} else {
			accum = ` AND sObjectName = "${field.Salesforce_Object}"`
		}

		return accum;

	}, '');
}

const getRecordGroupQuestionsByRecordGroupId = (questions) => {

	return questions.filter(question => question.Record_Group != null).reduce((accum, question) => {

		if(accum.has(question.Record_Group)) {
			let rgq = accum.get(question.Record_Group);
			accum.set(question.Record_Group, rgq.concat([question]))
		} else {
			accum.set(question.Record_Group, [question]);
		}

		return accum; 

	}, new Map());

}

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