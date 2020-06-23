import { useContext } from 'react';
import { AppContext } from '../components/Context';
import { transform } from '../api/helpers';

export const useForm = () => {
	const { globalRealm } = useContext(AppContext);

	const getQuestions = (filter) => {
		const questions = globalRealm.objects('Question__c').filtered(filter);
		let transformedQuestions = transform(questions); 
		return transformedQuestions; 
	}

  return { getQuestions };
} 
