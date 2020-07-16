import { useContext, useState } from 'react';
import { AppContext } from '../components/Context';
import { transform } from '../api/helpers';

export const useForm = () => {

	const { globalRealm } = useContext(AppContext);

	const getForm = (filter) => {
		const form = globalRealm.objects('Form').filtered(filter);
		let transformedForms = transform(form); 
		return transformedForms[0]; 
	}

	const getQuestions = (filter) => {
		const questions = globalRealm.objects('Question').filtered(filter);
		let transformedQuestions = transform(questions); 
		return transformedQuestions; 
	}

	return { getForm, getQuestions };
	
} 

