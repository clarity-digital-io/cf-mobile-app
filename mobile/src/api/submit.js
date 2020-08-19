import { useState, useContext, useEffect } from 'react';
import { AppContext, FormContext } from '../components/Context';

export const useSubmit = (navigation) => {

	const { realm } = useContext(AppContext);

	const [startSubmit, setStartSubmit] = useState(false); 

	const { response, answers, images, records, allValidations, setErrors, setSubmit } = useContext(FormContext);

	useEffect(() => {

		if(startSubmit) {
			submit(allValidations, answers, response, navigation, setErrors);
		}

	}, [startSubmit])

	const submit = (allValidations, answers, response, navigation, setErrors) => {

		let status = { success: false, errors: [], validations: [] };

		try {

			status = validate(answers, allValidations, status); 

			if(status.success == false) {
				throw "Error"; 
			}

			status = upsert(answers, response, realm, status);

			if(status.success == false) {
				throw "Error"; 
			}

		} catch (error) {
			status.errors = [error]	
		}

		setStartSubmit(false); 

		status.success ? 
			navigate(navigation, response) : 
			setErrors(errors => { return status }); 

	}

	return { setStartSubmit };

} 

const navigate = (navigation, response) => {
	console.log('response', response); 
	navigation.reset({
		index: 0,
		routes: [{ name: 'Home' }],
	}) 

}

const validate = (answers, allValidations, status) => {

	let newErrors = Array.from(allValidations.keys()).reduce((accum, questionId) => {

		if(!answers.has(questionId)) {
			accum = accum.concat([questionId])
		}

		return accum; 

	}, []);

	if(newErrors.length == 0) {
		status.success = true; 
	} else {
		status.success = false;
		status.validations = newErrors; 
	}

	return status; 

}

const upsert = (answers, response, realm, status) => {

	let prepAnswers = [...answers.keys()].map(questionId => {

		let answer = answers.get(questionId);

		return {
			UUID: answer.uuid, 
			IsAttachment: false, 
			Name: '',
			Answer: answer.answer,
			Path: '',
			Base64: '',
			FileLocation: '',
			ContentDocument: '',
			ContentVersion: '',
			Date_Answer: '',
			Record: '',
			Question: answer.questionId,
			Response: response.UUID
		}

	});

	try {

		realm.write(() => {

			prepAnswers.forEach(answer => {
				
				realm.create('Answer', answer, 'all');
		
			});
			
			response.Status = 'Submitted';
	
			realm.create('Response', response, 'all');

			status.success = true; 

		});
			
	} catch (error) {
		console.log('responseerror', error); 

		status.success = false; 
		status.errors = error; 

	}

	return status; 

}