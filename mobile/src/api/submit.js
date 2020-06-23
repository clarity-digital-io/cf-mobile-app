import { useState, useContext, useEffect } from 'react';
import { AppContext, FormContext } from '../components/Context';

export const useSubmit = (navigation) => {

	const { realm, setError } = useContext(AppContext);

	const { form, responseId, answers, images, records, allValidations, setErrorValidations, setLoading } = useContext(FormContext);

	const [startSubmit, setStartSubmit] = useState(false); 

	useEffect(() => {
		submit(); 
		setStartSubmit(false);
	}, [startSubmit])

	const handleProcess = (index) => {

		switch (index) {
			case 0:
				break;
			case 1:
				setStartSubmit(true); 
				break;
			case 2:
				break;
			default:
				break;
		}
	
	}

	const handleCancel = (index) => {

		switch (index) {
			case 0:
				break;
			case 1:
				navigation.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				});
				break;
			case 2:
				break;
			default:
				navigation.goBack(); 
				break;
		}
	}

	const submit = () => {

		try {

			validate(answers, allValidations, setErrorValidations); 
			//notify of validations
			//answer prepare 
			let prepAnswers = [];
			prepAnswers = [...answers.keys()].map(questionId => {
				let answer = answers.get(questionId);
				return {

				}
			})
			//create(realm, preparedAnswers, )
			//response prepare + pending
			//submit to realm
			//setLoading(false);

		} catch (error) {
			setError(error)
		}

	}

	return { handleProcess, handleCancel };

} 

const validate = (answers, allValidations, setErrorValidations) => {

	let newErrors = Array.from(allValidations.keys()).reduce((accum, questionId) => {

		if(!answers.has(questionId)) {
			accum = accum.concat([questionId])
		}

		return accum; 
	}, []);

	setErrorValidations(newErrors);

}

const postResponseAPI = async ({url, access_token}, answers, formId, responseId) => {

	let cleanAnswers = prepareAnswers(answers, formId, responseId);

	const response = await fetch(`${url}/services/apexrest/forms/Responses`, { 
		method: 'post', 
		body: JSON.stringify([cleanAnswers]),
		headers: new Headers({
			'Authorization': `OAuth ${access_token}`, 
			'Content-Type': 'application/json'
		}), 
	});

	const formResponse = await response.json();

	return formResponse; 

}

const prepareAnswers = (answers, formId, responseId) => {

	return {
		formId: formId, 
		responseId: responseId,
		answers: Array.from(answers.values())
	}

}